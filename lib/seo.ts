import type { Metadata } from 'next';
import { siteConfig } from '../config/siteConfig';
import type { Locale } from './i18n';
import { localePath } from './i18n';

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  path = '',
}: PageMetadataInput): Metadata {
  const canonical = `${siteConfig.canonicalUrl}${localePath(locale, path)}`;
  const alternateLocale = locale === 'zh' ? 'en' : 'zh';

  return {
    metadataBase: new URL(siteConfig.canonicalUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'zh-CN': localePath('zh', path),
        en: localePath('en', path),
        'x-default': localePath('zh', path),
      },
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: alternateLocale === 'zh' ? 'zh_CN' : 'en_US',
      title,
      description,
      url: canonical,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

