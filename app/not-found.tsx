import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-shell">
      <div className="container-inner max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
          404
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-textPrimary">
          Page not found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-textSecondary">
          This route does not exist in the Human Capital ETF prospectus. You
          can return to the home page or go directly to the framework.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Back to home
          </Link>
          <Link
            href="/framework"
            className="inline-flex items-center rounded-full border border-borderSubtle bg-transparent px-5 py-2.5 text-sm font-medium text-textPrimary transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-borderSubtle focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Read the Framework
          </Link>
        </div>
      </div>
    </div>
  );
}

