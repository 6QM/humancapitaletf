import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '../config/siteConfig';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { buildBaseMetadata } from '../lib/seo';

export const metadata: Metadata = buildBaseMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-textPrimary">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteConfig.name,
              url: siteConfig.canonicalUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteConfig.canonicalUrl}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Human Capital ETF',
              url: siteConfig.canonicalUrl,
              sameAs: [
                siteConfig.personalSiteUrl,
                siteConfig.youtubeUrl,
                siteConfig.xUrl,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

