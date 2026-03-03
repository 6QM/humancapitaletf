import type { MetadataRoute } from 'next';
import { siteConfig } from '../config/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.canonicalUrl;

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/framework`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}

