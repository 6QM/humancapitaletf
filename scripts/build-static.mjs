import { cp, mkdir, readFile, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const sourceRoot = path.join(projectRoot, 'site');
const outputRoot = path.join(projectRoot, 'dist');

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

const files = await walk(sourceRoot);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const forbidden = [/<img\b/i, /<svg\b/i, /<canvas\b/i, /<script\b/i, /background-image\s*:/i, /url\s*\(/i];
const forbiddenLegacyCopy = [/16\s*%/i, /2\.1\s*[×x]/i, /example\.com/i, /Invest in Yourself Like an Index Fund/i];
const chineseText = /[\u3400-\u9fff]/u;
const canonicalOrigin = 'https://humancapitaletf.com';

for (const file of files) {
  if (!/\.(html|css)$/.test(file)) continue;
  const content = await readFile(file, 'utf8');
  for (const pattern of forbidden) {
    if (pattern.test(content)) {
      throw new Error(`Pure-text check failed in ${path.relative(projectRoot, file)}: ${pattern}`);
    }
  }
  for (const pattern of forbiddenLegacyCopy) {
    if (pattern.test(content)) {
      throw new Error(`Legacy-copy check failed in ${path.relative(projectRoot, file)}: ${pattern}`);
    }
  }
  if (chineseText.test(content)) {
    throw new Error(`English-only check failed in ${path.relative(projectRoot, file)}`);
  }
}

for (const file of htmlFiles) {
  const content = await readFile(file, 'utf8');
  if (!/<html\s+lang=/i.test(content) || !/<title>.+<\/title>/is.test(content)) {
    throw new Error(`Missing language or title in ${path.relative(projectRoot, file)}`);
  }

  const headingCount = [...content.matchAll(/<h1\b/gi)].length;
  if (headingCount !== 1) {
    throw new Error(`Expected exactly one h1 in ${path.relative(projectRoot, file)}; found ${headingCount}`);
  }

  const canonicalLinks = [...content.matchAll(/<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]+)"[^>]*>/gi)]
    .map((match) => match[1]);
  const relativeHtmlPath = path.relative(sourceRoot, file).split(path.sep).join('/');
  const expectedCanonical = relativeHtmlPath === 'index.html'
    ? `${canonicalOrigin}/`
    : `${canonicalOrigin}/${relativeHtmlPath}`;
  if (canonicalLinks.length !== 1 || canonicalLinks[0] !== expectedCanonical) {
    throw new Error(`Canonical check failed in ${path.relative(projectRoot, file)}; expected ${expectedCanonical}`);
  }

  const ids = new Set([...content.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  const links = [...content.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);

  for (const href of links) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    if (href.startsWith('#')) {
      if (!ids.has(href.slice(1))) {
        throw new Error(`Missing anchor ${href} in ${path.relative(projectRoot, file)}`);
      }
      continue;
    }

    const cleanHref = href.split('#')[0].split('?')[0];
    let target = path.resolve(path.dirname(file), cleanHref);
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
    } catch {
      throw new Error(`Broken local link ${href} in ${path.relative(projectRoot, file)}`);
    }
  }
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(sourceRoot, outputRoot, { recursive: true });

console.log(`Validated and built ${htmlFiles.length} English pure-text pages in dist/.`);
