import type { Metadata } from 'next';
import { siteConfig } from '../config/siteConfig';

export function buildBaseMetadata(): Metadata {
  const title = siteConfig.name;
  const description = siteConfig.description;
  const url = siteConfig.canonicalUrl;

  return {
    title,
    description,
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function buildPageMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...buildBaseMetadata(),
    ...overrides,
  };
}

