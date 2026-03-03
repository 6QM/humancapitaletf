import Link from 'next/link';
import { siteConfig } from '../config/siteConfig';

const sections = [
  { href: '#top', label: 'Top' },
  { href: '#problem', label: 'Problem' },
  { href: '#definition', label: 'Definition' },
  { href: '#framework', label: 'Framework' },
  { href: '#experiment', label: 'Experiment' },
  { href: '#method', label: 'Method' },
  { href: '#start', label: 'Start' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-borderSubtle bg-background/85 backdrop-blur">
      <div className="container-inner flex items-center justify-between py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-tight text-textPrimary">
            {siteConfig.name}
          </span>
          <span className="hidden text-[11px] text-textSecondary sm:inline">
            Concept Prospectus
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-3 text-xs sm:text-sm"
        >
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-textSecondary hover:text-textPrimary transition-colors"
            >
              {section.label}
            </a>
          ))}
          <Link
            href="/framework"
            className="ml-2 hidden rounded-full border border-borderSubtle px-3 py-1 text-xs font-medium text-textPrimary hover:bg-muted sm:inline-flex"
          >
            Framework
          </Link>
        </nav>
      </div>
    </header>
  );
}

