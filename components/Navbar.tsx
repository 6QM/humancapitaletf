import Link from 'next/link';
import { siteConfig } from '../config/siteConfig';
import { getContent } from '../content/siteContent';
import type { Locale } from '../lib/i18n';
import { localePath } from '../lib/i18n';
import { LanguageSwitch } from './LanguageSwitch';
import { MobileMenu } from './MobileMenu';

export function Navbar({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const links = [
    { href: localePath(locale, '/framework'), label: content.nav.framework },
    { href: localePath(locale, '/programs'), label: content.nav.programs },
    { href: localePath(locale, '/about'), label: content.nav.about },
  ];

  return (
    <header className="site-header">
      <div className="container-inner nav-shell">
        <Link href={localePath(locale)} className="brand" aria-label="Human Capital ETF home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>Human Capital ETF</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href={siteConfig.personalSiteUrl} target="_blank" rel="noreferrer">
            {content.nav.author} <span aria-hidden="true">↗</span>
          </a>
          <LanguageSwitch locale={locale} label={content.nav.language} />
        </nav>

        <MobileMenu
          locale={locale}
          menuLabel={content.nav.menu}
          authorLabel={content.nav.author}
          authorHref={siteConfig.personalSiteUrl}
          languageLabel={content.nav.language}
          links={links}
        />
      </div>
    </header>
  );
}
