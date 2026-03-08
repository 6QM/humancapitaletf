'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../config/siteConfig';

const navLinks = [
  { href: '/framework', label: 'Framework' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-borderSubtle bg-background/85 backdrop-blur">
      <div className="container-inner flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-baseline gap-2 group"
          onClick={() => setOpen(false)}
        >
          <span className="text-sm font-semibold tracking-tight text-textPrimary group-hover:text-white transition-colors">
            {siteConfig.name}
          </span>
          <span className="hidden text-[11px] text-textSecondary sm:inline">
            Concept Prospectus
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  active
                    ? 'text-textPrimary bg-muted'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-muted/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={siteConfig.experimentUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-accentSoft"
          >
            Follow Experiment
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span
            className={`block h-px w-5 bg-textSecondary transition-all duration-200 origin-center ${
              open ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-textSecondary transition-all duration-200 ${
              open ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-textSecondary transition-all duration-200 origin-center ${
              open ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-borderSubtle bg-background/95 backdrop-blur animate-fade-in">
          <nav className="container-inner py-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm text-textSecondary hover:text-textPrimary hover:bg-muted transition-colors"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  pathname === link.href
                    ? 'text-textPrimary bg-muted'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-borderSubtle">
              <a
                href={siteConfig.experimentUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm text-accent font-medium hover:bg-muted transition-colors"
              >
                Follow Experiment ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
