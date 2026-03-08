import Link from 'next/link';
import { siteConfig } from '../config/siteConfig';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-borderSubtle bg-background">
      <div className="container-inner py-8 sm:py-10 text-sm text-textSecondary">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-textSecondary/70">
              Human Capital ETF
            </p>
            <p className="mt-2 text-xs sm:text-sm max-w-xs">
              Treat your skills like a long-term portfolio. Invest deliberately.
            </p>
            <p className="mt-3 text-xs text-textSecondary/50">
              © {year} Human Capital ETF
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-textSecondary/50 mb-3">
                Site
              </p>
              <div className="flex flex-col gap-2 text-xs sm:text-sm">
                <Link href="/framework" className="hover:text-textPrimary transition-colors">
                  Framework
                </Link>
                <Link href="/notes" className="hover:text-textPrimary transition-colors">
                  Notes
                </Link>
                <Link href="/about" className="hover:text-textPrimary transition-colors">
                  About
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-textSecondary/50 mb-3">
                External
              </p>
              <div className="flex flex-col gap-2 text-xs sm:text-sm">
                <a
                  href={siteConfig.personalSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-textPrimary transition-colors"
                >
                  Personal site
                </a>
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-textPrimary transition-colors"
                >
                  YouTube
                </a>
                <a
                  href={siteConfig.xUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-textPrimary transition-colors"
                >
                  X / Twitter
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-textPrimary transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
