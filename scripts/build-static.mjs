import { cp, mkdir, readFile, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const sourceRoot = path.join(projectRoot, 'site');
const outputRoot = path.join(projectRoot, 'dist');
const canonicalOrigin = 'https://humancapitaletf.com';
const sitemapUrl = `${canonicalOrigin}/sitemap.xml`;
const allowedExtensions = new Set(['.html', '.css', '.xml', '.txt']);

async function walk(directory) {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry);
    if ((await stat(absolute)).isDirectory()) files.push(...await walk(absolute));
    else files.push(absolute);
  }
  return files;
}

function relative(file) {
  return path.relative(projectRoot, file);
}

function parseAttributes(tag) {
  const attributes = new Map();
  for (const match of tag.matchAll(/([:\w-]+)="([^"]*)"/g)) {
    attributes.set(match[1].toLowerCase(), match[2]);
  }
  return attributes;
}

function tags(content, name) {
  return [...content.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))]
    .map((match) => parseAttributes(match[0]));
}

function metaContent(content, key, value) {
  const match = tags(content, 'meta').find((attributes) => attributes.get(key) === value);
  return match?.get('content');
}

function linkHrefs(content, relation) {
  return tags(content, 'link')
    .filter((attributes) => attributes.get('rel')?.split(/\s+/).includes(relation))
    .map((attributes) => attributes.get('href'))
    .filter(Boolean);
}

function expectedCanonicalFor(file) {
  const htmlPath = path.relative(sourceRoot, file).split(path.sep).join('/');
  return htmlPath === 'index.html' ? `${canonicalOrigin}/` : `${canonicalOrigin}/${htmlPath}`;
}

const files = await walk(sourceRoot);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const indexableHtmlFiles = htmlFiles.filter((file) => path.basename(file) !== '404.html');
const forbidden = [
  /<(?:img|svg|canvas|script|iframe|video|audio|object|embed|picture|source|form|input|button|select|textarea)\b/i,
  /\son[a-z]+\s*=/i,
  /javascript\s*:/i,
  /\sstyle\s*=/i,
  /background-image\s*:/i,
  /url\s*\(/i,
  /@import\b/i,
  /(?:property|name)="(?:og:image|twitter:image)"/i,
];
const forbiddenLegacyCopy = [
  /16\s*%/i,
  /2\.1\s*[×x]/i,
  /example\.com/i,
  /Invest in Yourself Like an Index Fund/i,
];
const chineseText = /[\u3400-\u9fff]/u;
const contentByFile = new Map();
const idsByFile = new Map();
const titles = new Map();
const descriptions = new Map();

for (const file of files) {
  const extension = path.extname(file).toLowerCase();
  if (!allowedExtensions.has(extension)) {
    throw new Error(`Unapproved file type in active site: ${relative(file)}`);
  }

  const content = await readFile(file, 'utf8');
  contentByFile.set(file, content);

  if (extension === '.html' || extension === '.css') {
    for (const pattern of forbidden) {
      if (pattern.test(content)) {
        throw new Error(`Pure-text check failed in ${relative(file)}: ${pattern}`);
      }
    }
    for (const pattern of forbiddenLegacyCopy) {
      if (pattern.test(content)) {
        throw new Error(`Legacy-copy check failed in ${relative(file)}: ${pattern}`);
      }
    }
    if (chineseText.test(content)) {
      throw new Error(`English-only check failed in ${relative(file)}`);
    }
  }
}

for (const file of htmlFiles) {
  const content = contentByFile.get(file);
  const isNotFound = path.basename(file) === '404.html';
  const htmlTag = tags(content, 'html')[0];
  const metaTags = tags(content, 'meta');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const description = metaContent(content, 'name', 'description');
  const author = metaContent(content, 'name', 'author');
  const robots = metaContent(content, 'name', 'robots');

  if (htmlTag?.get('lang') !== 'en') {
    throw new Error(`Missing lang="en" in ${relative(file)}`);
  }
  if (!metaTags.some((attributes) => attributes.get('charset')?.toLowerCase() === 'utf-8')) {
    throw new Error(`Missing UTF-8 charset in ${relative(file)}`);
  }
  if (metaContent(content, 'name', 'viewport') !== 'width=device-width, initial-scale=1') {
    throw new Error(`Missing canonical viewport in ${relative(file)}`);
  }
  if (!titleMatch || !description || !author) {
    throw new Error(`Missing title, description, or author in ${relative(file)}`);
  }
  if ([...content.matchAll(/<h1\b/gi)].length !== 1) {
    throw new Error(`Expected exactly one h1 in ${relative(file)}`);
  }
  if ([...content.matchAll(/<main\b/gi)].length !== 1) {
    throw new Error(`Expected exactly one main element in ${relative(file)}`);
  }
  if (!/<nav\b[^>]*class="series-nav"/i.test(content)) {
    throw new Error(`Missing shared series navigation in ${relative(file)}`);
  }

  const title = titleMatch[1].trim();
  if (titles.has(title)) throw new Error(`Duplicate title in ${relative(file)} and ${relative(titles.get(title))}`);
  if (descriptions.has(description)) throw new Error(`Duplicate description in ${relative(file)} and ${relative(descriptions.get(description))}`);
  titles.set(title, file);
  descriptions.set(description, file);

  const idList = [...content.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  if (new Set(idList).size !== idList.length) {
    throw new Error(`Duplicate id in ${relative(file)}`);
  }
  idsByFile.set(file, new Set(idList));

  const requiredNamedMeta = ['twitter:card', 'twitter:title', 'twitter:description'];
  const requiredPropertyMeta = ['og:site_name', 'og:type', 'og:title', 'og:description'];
  for (const key of requiredNamedMeta) {
    if (!metaContent(content, 'name', key)) throw new Error(`Missing ${key} in ${relative(file)}`);
  }
  for (const key of requiredPropertyMeta) {
    if (!metaContent(content, 'property', key)) throw new Error(`Missing ${key} in ${relative(file)}`);
  }

  const canonicals = linkHrefs(content, 'canonical');
  if (isNotFound) {
    if (!robots?.includes('noindex') || canonicals.length !== 0) {
      throw new Error(`404 must be noindex and have no canonical in ${relative(file)}`);
    }
    const requiredRootLinks = ['href="/works.css"', 'href="/"', 'href="/origins.html"', 'href="/operating-system.html"'];
    for (const rootLink of requiredRootLinks) {
      if (!content.includes(rootLink)) throw new Error(`404 is missing deep-route-safe ${rootLink}`);
    }
  } else {
    const expectedCanonical = expectedCanonicalFor(file);
    const socialUrl = metaContent(content, 'property', 'og:url');
    if (robots !== 'index,follow') throw new Error(`Indexable page has unexpected robots directive in ${relative(file)}`);
    if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical) {
      throw new Error(`Canonical check failed in ${relative(file)}; expected ${expectedCanonical}`);
    }
    if (socialUrl !== expectedCanonical) {
      throw new Error(`og:url check failed in ${relative(file)}; expected ${expectedCanonical}`);
    }
    if (!/<time\b[^>]*datetime="2026-07-22"/i.test(content)) {
      throw new Error(`Missing visible edition date in ${relative(file)}`);
    }
  }
}

for (const file of htmlFiles) {
  const content = contentByFile.get(file);
  const hrefs = [...content.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);

  for (const href of hrefs) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    if (/^(?:\/\/|data:|javascript:)/i.test(href)) {
      throw new Error(`Unsafe or unsupported link ${href} in ${relative(file)}`);
    }

    const [rawPath, fragment] = href.split('#', 2);
    const cleanPath = rawPath?.split('?')[0];
    let target = !cleanPath
      ? file
      : cleanPath.startsWith('/')
        ? path.resolve(sourceRoot, cleanPath.slice(1))
        : path.resolve(path.dirname(file), cleanPath);
    if (!(target === sourceRoot || target.startsWith(`${sourceRoot}${path.sep}`))) {
      throw new Error(`Local link escapes site root: ${href} in ${relative(file)}`);
    }

    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
    } catch {
      throw new Error(`Broken local link ${href} in ${relative(file)}`);
    }

    if (fragment) {
      if (!target.endsWith('.html')) {
        throw new Error(`Fragment target is not HTML: ${href} in ${relative(file)}`);
      }
      if (!idsByFile.get(target)?.has(fragment)) {
        throw new Error(`Missing anchor #${fragment} in ${relative(target)}, linked from ${relative(file)}`);
      }
    }
  }
}

const canonicalSet = new Set(indexableHtmlFiles.map(expectedCanonicalFor));
const sitemapFile = path.join(sourceRoot, 'sitemap.xml');
const sitemap = contentByFile.get(sitemapFile);
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (new Set(sitemapLocations).size !== sitemapLocations.length) {
  throw new Error('Duplicate URLs in sitemap.xml');
}
if (sitemapLocations.length !== canonicalSet.size || sitemapLocations.some((url) => !canonicalSet.has(url))) {
  throw new Error('sitemap.xml URLs do not exactly match indexable canonical pages');
}
if ([...sitemap.matchAll(/<lastmod>2026-07-22<\/lastmod>/g)].length !== canonicalSet.size) {
  throw new Error('sitemap.xml lastmod dates are missing or stale');
}

const robots = contentByFile.get(path.join(sourceRoot, 'robots.txt'));
if (!robots.includes(`Sitemap: ${sitemapUrl}`)) {
  throw new Error('robots.txt does not declare the canonical sitemap');
}

const vercelConfig = JSON.parse(await readFile(path.join(projectRoot, 'vercel.json'), 'utf8'));
if (
  vercelConfig.buildCommand !== 'npm run build'
  || vercelConfig.outputDirectory !== 'dist'
  || 'builds' in vercelConfig
  || 'routes' in vercelConfig
) {
  throw new Error('vercel.json must use the modern static build/output configuration so Vercel can discover 404.html');
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(sourceRoot, outputRoot, { recursive: true });

console.log(`Validated and built ${indexableHtmlFiles.length} canonical English pure-text pages plus a noindex 404 in dist/.`);
