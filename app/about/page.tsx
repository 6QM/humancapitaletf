import Link from 'next/link';
import { copy } from '../../content/copy';
import { siteConfig } from '../../config/siteConfig';
import { buildPageMetadata } from '../../lib/seo';

export const metadata = buildPageMetadata({
  title: 'About – Human Capital ETF',
  description: copy.aboutPage.intro,
});

export default function AboutPage() {
  const { aboutPage } = copy;

  return (
    <div className="section-shell">
      <div className="container-inner max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
          About
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-textPrimary">
          {aboutPage.heading}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-textSecondary">
          {aboutPage.intro}
        </p>
        <p className="mt-6 text-sm sm:text-base text-textSecondary">
          {aboutPage.body}
        </p>
        <ul className="mt-6 space-y-3 text-sm sm:text-base text-textSecondary">
          {aboutPage.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm sm:text-base text-textSecondary">
          {aboutPage.closing}
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <Link
            href="/framework"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Read the Framework
          </Link>
          <a
            href={siteConfig.personalSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-borderSubtle bg-transparent px-5 py-2.5 text-sm font-medium text-textPrimary transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-borderSubtle focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Visit 69mike.com
          </a>
        </div>
      </div>
    </div>
  );
}

