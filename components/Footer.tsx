import Link from 'next/link';
import { siteConfig } from '../config/siteConfig';
import { getContent } from '../content/siteContent';
import type { Locale } from '../lib/i18n';
import { localePath } from '../lib/i18n';

export function Footer({ locale }: { locale: Locale }) {
  const { footer } = getContent(locale);

  return (
    <footer className="site-footer">
      <div className="container-inner footer-grid">
        <div>
          <p className="footer-brand">Human Capital ETF</p>
          <p className="footer-line">{footer.line}</p>
        </div>
        <div className="footer-links" aria-label="Site links">
          <Link href={localePath(locale, '/framework')}>{footer.framework}</Link>
          <Link href={localePath(locale, '/programs')}>{footer.programs}</Link>
          <Link href={localePath(locale, '/about')}>{footer.about}</Link>
        </div>
        <div className="footer-links" aria-label="External links">
          <a href={siteConfig.personalSiteUrl} target="_blank" rel="noreferrer">{footer.personalSite}</a>
          <a href={siteConfig.youtubeUrl} target="_blank" rel="noreferrer">{footer.youtube}</a>
          <a href={siteConfig.xUrl} target="_blank" rel="noreferrer">{footer.x}</a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">{footer.github}</a>
        </div>
      </div>
      <div className="container-inner footer-bottom">
        <span>© {new Date().getFullYear()} Qiaomai Liu</span>
        <span>{locale === 'zh' ? '内容以逐字稿与长期写作为依据。' : 'Built from transcripts and long-form writing.'}</span>
      </div>
    </footer>
  );
}
