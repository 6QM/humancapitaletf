'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '../lib/i18n';

export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const targetLocale = locale === 'zh' ? 'en' : 'zh';
  const segments = pathname.split('/');
  segments[1] = targetLocale;

  return (
    <Link
      href={segments.join('/') || `/${targetLocale}`}
      className="language-switch"
      aria-label={locale === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      {label}
    </Link>
  );
}
