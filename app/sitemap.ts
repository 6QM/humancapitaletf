import type { MetadataRoute } from 'next';
import { siteConfig } from '../config/siteConfig';
import { locales } from '../lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/framework', '/programs', '/about'];
  const lastModified = new Date('2026-07-18');

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.canonicalUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: path === '' ? 'monthly' : 'yearly',
      priority: path === '' ? 1 : path === '/framework' ? 0.9 : 0.7,
      alternates: {
        languages: {
          'zh-CN': `${siteConfig.canonicalUrl}/zh${path}`,
          en: `${siteConfig.canonicalUrl}/en${path}`,
        },
      },
    }))
  );
}

