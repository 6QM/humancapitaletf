import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { siteConfig } from '../../config/siteConfig';
import { getContent } from '../../content/siteContent';
import { isLocale, locales } from '../../lib/i18n';
import { buildPageMetadata } from '../../lib/seo';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return buildPageMetadata({ locale, ...content.meta });
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.canonicalUrl,
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
    description: content.meta.description,
    author: { '@type': 'Person', name: siteConfig.author.name },
  };

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    alternateName: siteConfig.author.alternateName,
    url: siteConfig.authorUrl,
    jobTitle: 'Thermal Management Engineer and Writer',
    sameAs: [
      siteConfig.personalSiteUrl,
      siteConfig.youtubeUrl,
      siteConfig.xUrl,
      siteConfig.githubUrl,
    ],
  };

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : 'en'} data-scroll-behavior="smooth">
      <body>
        <div className="site-frame">
          <Navbar locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
