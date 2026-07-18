'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Locale } from '../lib/i18n';

type MobileMenuProps = {
  locale: Locale;
  menuLabel: string;
  authorLabel: string;
  authorHref: string;
  languageLabel: string;
  links: Array<{ href: string; label: string }>;
};

export function MobileMenu({
  locale,
  menuLabel,
  authorLabel,
  authorHref,
  languageLabel,
  links,
}: MobileMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const targetLocale = locale === 'zh' ? 'en' : 'zh';
  const segments = pathname.split('/');
  segments[1] = targetLocale;
  const languageHref = segments.join('/') || `/${targetLocale}`;

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-menu-button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {menuLabel}
      </button>
      {open ? (
        <nav id="mobile-navigation" className="mobile-nav-panel" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={authorHref} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            {authorLabel} ↗
          </a>
          <Link
            href={languageHref}
            className="language-switch"
            aria-label={locale === 'zh' ? 'Switch to English' : '切换到中文'}
            onClick={() => setOpen(false)}
          >
            {languageLabel}
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
