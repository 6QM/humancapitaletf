import Link from 'next/link';
import { copy } from '../content/copy';
import { siteConfig } from '../config/siteConfig';
import { Section } from '../components/Section';
import { buildPageMetadata } from '../lib/seo';
import { notes } from '../content/notes';

export const metadata = buildPageMetadata({
  title: copy.meta.title,
  description: copy.meta.tagline,
});

export default function HomePage() {
  const { home, meta } = copy;
  const latestNotes = notes.slice(0, 3);

  return (
    <div id="top">
      <section className="section-shell pt-10 sm:pt-16 border-t-0">
        <div className="container-inner grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
              Concept Prospectus
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-textPrimary">
              {home.hero.title}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-textSecondary">
              {home.hero.subtitle}
            </p>
            <p className="mt-4 text-sm sm:text-base text-textSecondary max-w-xl">
              {home.hero.explanation}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-textSecondary/80">
              {meta.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/framework"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {home.hero.primaryCtaLabel}
              </Link>
              <a
                href={siteConfig.experimentUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-borderSubtle bg-transparent px-5 py-2.5 text-sm font-medium text-textPrimary transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-borderSubtle focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {home.hero.secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-borderSubtle bg-gradient-to-b from-surface to-background p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-textSecondary/70">
              Key idea
            </p>
            <p className="mt-3 text-sm sm:text-base text-textSecondary">
              {meta.keyLine}
            </p>
            <div className="mt-6 space-y-3 text-xs sm:text-sm text-textSecondary/80">
              <p>
                This site is intentionally small. It is closer to a
                prospectus—clear, limited, and explicit about its scope—than to
                a personal blog.
              </p>
              <p>
                Nothing here is a guarantee. It is a structured invitation to
                manage your own human capital with the same calm discipline you
                would expect from a long-term fund.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section id="problem" title="The problem">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div>
            <ul className="space-y-3 text-sm sm:text-base text-textSecondary">
              {home.problem.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-borderSubtle bg-muted/40 p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-textSecondary/70">
              Problem statement
            </p>
            <p className="mt-3 text-sm sm:text-base text-textSecondary">
              {home.problem.line}
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="definition"
        title={home.definition.heading}
        subtitle={home.definition.body}
      >
        <div className="mt-4 space-y-4 text-sm sm:text-base text-textSecondary">
          <p>{copy.home.definition.comparisonHeading}</p>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-borderSubtle bg-surface">
          <div className="grid grid-cols-2 gap-0 border-b border-borderSubtle bg-muted/40 text-xs font-medium uppercase tracking-[0.2em] text-textSecondary/80">
            <div className="px-4 py-3">ETF concept</div>
            <div className="px-4 py-3 border-l border-borderSubtle">
              Life equivalent
            </div>
          </div>
          <dl className="divide-y divide-borderSubtle text-sm sm:text-base">
            {home.definition.table.map((row) => (
              <div
                key={row.etfConcept}
                className="grid grid-cols-1 border-borderSubtle/70 last:border-b-0 sm:grid-cols-2"
              >
                <dt className="px-4 py-3 text-textPrimary/90 sm:border-r sm:border-borderSubtle/70">
                  {row.etfConcept}
                </dt>
                <dd className="border-t border-borderSubtle/40 px-4 py-3 text-textSecondary sm:border-t-0">
                  {row.lifeEquivalent}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section
        id="framework"
        title={home.framework.heading}
        subtitle={home.framework.intro}
      >
        <p className="text-sm sm:text-base font-medium text-textPrimary">
          {home.framework.emphasis}
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {home.framework.buckets.map((bucket) => (
            <article
              key={bucket.name}
              className="flex flex-col gap-3 rounded-xl border border-borderSubtle bg-surface/80 p-5 sm:p-6"
            >
              <h3 className="text-sm sm:text-base font-semibold text-textPrimary">
                {bucket.name}
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary">
                {bucket.description}
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {bucket.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-textSecondary"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="experiment"
        title={home.experiment.heading}
        subtitle={home.experiment.body}
      >
        <p className="text-sm sm:text-base text-textSecondary max-w-2xl">
          {home.experiment.bodySecondary}
        </p>
      </Section>

      <Section
        id="method"
        title={home.methodology.heading}
        subtitle={home.methodology.intro}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
              {home.methodology.rulesHeading}
            </p>
            <ul className="mt-4 space-y-3 text-sm sm:text-base text-textSecondary">
              {home.methodology.rules.map((rule) => (
                <li key={rule} className="flex gap-3">
                  <span className="mt-1 h-1 w-4 flex-none rounded-full bg-accent" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-borderSubtle bg-muted/40 p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-textSecondary/70">
              Method line
            </p>
            <p className="mt-3 text-sm sm:text-base text-textSecondary">
              {home.methodology.line}
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="live"
        title="Live Experiment"
        subtitle="A lightweight log of ongoing allocation decisions and observations. Short field notes, not a blog."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {latestNotes.map((note) => (
            <article
              key={note.slug}
              className="flex flex-col rounded-xl border border-borderSubtle bg-surface/80 p-5 sm:p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
                {new Date(note.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })}
              </p>
              <h3 className="mt-3 text-sm sm:text-base font-semibold text-textPrimary">
                {note.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-textSecondary">
                {note.summary}
              </p>
              <div className="mt-4 flex-1" />
              <div className="mt-4">
                <Link
                  href={`/notes/${note.slug}`}
                  className="text-xs font-medium text-accent hover:text-accentSoft underline-offset-4 hover:underline"
                >
                  Read field note
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/notes"
            className="text-xs font-medium text-textSecondary hover:text-textPrimary underline-offset-4 hover:underline"
          >
            View all notes
          </Link>
        </div>
      </Section>

      <Section
        id="reports"
        title={home.reports.heading}
        subtitle={home.reports.intro}
      >
        <ul className="space-y-2 text-sm sm:text-base text-textSecondary">
          {home.reports.items.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between rounded-lg border border-dashed border-borderSubtle/80 bg-surface/60 px-4 py-3"
            >
              <span>{item}</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-textSecondary/70">
                Placeholder
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="start" title={home.start.heading}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-center">
          <div>
            <p className="text-sm sm:text-base text-textSecondary">
              {home.start.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/framework"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {home.start.primaryCtaLabel}
              </Link>
              <a
                href={siteConfig.personalSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-borderSubtle bg-transparent px-5 py-2.5 text-sm font-medium text-textPrimary transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-borderSubtle focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {home.start.secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-borderSubtle bg-gradient-to-b from-surface to-background p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-textSecondary/70">
              Quote
            </p>
            <p className="mt-4 text-sm sm:text-base text-textSecondary">
              “{copy.meta.quote}”
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

