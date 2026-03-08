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
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-borderSubtle">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-accent/8 blur-[120px]" />
          <div className="absolute right-[5%] bottom-[0%] h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <div className="container-inner grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
              Concept Prospectus
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-textPrimary leading-[1.15]">
              {home.hero.title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-textSecondary font-light">
              {home.hero.subtitle}
            </p>
            <p className="mt-4 text-sm sm:text-base text-textSecondary/80 max-w-xl leading-relaxed">
              {home.hero.explanation}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/framework" className="btn-primary">
                {home.hero.primaryCtaLabel}
              </Link>
              <a
                href={siteConfig.experimentUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                {home.hero.secondaryCtaLabel}
              </a>
            </div>
          </div>

          {/* Key idea card */}
          <div className="rounded-2xl border border-borderSubtle/60 bg-gradient-to-b from-surface to-background p-5 sm:p-6 animate-fade-up [animation-delay:100ms]">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-textSecondary/50">
              Key idea
            </p>
            <p className="mt-3 text-sm sm:text-base text-textSecondary leading-relaxed">
              {meta.keyLine}
            </p>
            <div className="mt-5 pt-5 border-t border-borderSubtle/60 space-y-3 text-xs text-textSecondary/70 leading-relaxed">
              <p>
                This site is intentionally small—closer to a prospectus than a
                personal blog. Clear, limited, and explicit about scope.
              </p>
              <p>
                Nothing here is a guarantee. It is a structured invitation to
                manage your human capital with long-term discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────── */}
      <Section id="problem" title="The problem">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <ul className="space-y-4 text-sm sm:text-base text-textSecondary">
            {home.problem.bullets.map((item) => (
              <li key={item} className="flex gap-3.5">
                <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-borderSubtle bg-muted/40 p-5 sm:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-textSecondary/50">
              Problem statement
            </p>
            <p className="mt-3 text-sm sm:text-base text-textSecondary leading-relaxed">
              {home.problem.line}
            </p>
          </div>
        </div>
      </Section>

      {/* ── Definition ───────────────────────────────────────────── */}
      <Section
        id="definition"
        title={home.definition.heading}
        subtitle={home.definition.body}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-textSecondary/50 mb-5">
          {copy.home.definition.comparisonHeading}
        </p>
        <div className="overflow-hidden rounded-xl border border-borderSubtle bg-surface">
          <div className="grid grid-cols-2 border-b border-borderSubtle bg-muted/50 text-[10px] font-medium uppercase tracking-[0.25em] text-textSecondary/60">
            <div className="px-4 py-3">ETF concept</div>
            <div className="px-4 py-3 border-l border-borderSubtle">
              Life equivalent
            </div>
          </div>
          <dl className="divide-y divide-borderSubtle text-sm sm:text-base">
            {home.definition.table.map((row) => (
              <div
                key={row.etfConcept}
                className="grid grid-cols-1 sm:grid-cols-2 hover:bg-muted/20 transition-colors"
              >
                <dt className="px-4 py-3.5 text-textPrimary/90 font-medium sm:border-r sm:border-borderSubtle/70">
                  {row.etfConcept}
                </dt>
                <dd className="border-t border-borderSubtle/40 px-4 py-3.5 text-textSecondary sm:border-t-0 leading-relaxed">
                  {row.lifeEquivalent}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ── Framework buckets ─────────────────────────────────────── */}
      <Section
        id="framework"
        title={home.framework.heading}
        subtitle={home.framework.intro}
      >
        <p className="text-sm font-medium text-accent/90 mb-6">
          {home.framework.emphasis}
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {home.framework.buckets.map((bucket, i) => (
            <article
              key={bucket.name}
              className="card-hover flex flex-col gap-3 rounded-xl border border-borderSubtle bg-surface/80 p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-[11px] font-semibold text-accent">
                  {i + 1}
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-textPrimary">
                  {bucket.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                {bucket.description}
              </p>
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {bucket.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-full bg-muted border border-borderSubtle/60 px-2.5 py-1 text-[11px] text-textSecondary/80"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Experiment ───────────────────────────────────────────── */}
      <Section
        id="experiment"
        title={home.experiment.heading}
        subtitle={home.experiment.body}
      >
        <p className="text-sm sm:text-base text-textSecondary/80 max-w-2xl leading-relaxed">
          {home.experiment.bodySecondary}
        </p>
      </Section>

      {/* ── Methodology ──────────────────────────────────────────── */}
      <Section
        id="method"
        title={home.methodology.heading}
        subtitle={home.methodology.intro}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50 mb-5">
              {home.methodology.rulesHeading}
            </p>
            <ol className="space-y-4 text-sm sm:text-base text-textSecondary">
              {home.methodology.rules.map((rule, i) => (
                <li key={rule} className="flex gap-4">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full border border-borderSubtle text-[10px] font-medium text-textSecondary/50 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-xl border border-borderSubtle bg-muted/40 p-5 sm:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-textSecondary/50">
              Method
            </p>
            <p className="mt-3 text-lg font-semibold text-textPrimary tracking-tight">
              {home.methodology.line}
            </p>
            <p className="mt-3 text-xs text-textSecondary/70 leading-relaxed">
              Simple enough to follow for years. Strict enough to make drift visible.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Live Notes ───────────────────────────────────────────── */}
      <Section
        id="live"
        title="Live Experiment"
        subtitle="A lightweight log of ongoing allocation decisions and observations. Short field notes, not a blog."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {latestNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="card-hover group flex flex-col rounded-xl border border-borderSubtle bg-surface/80 p-5 sm:p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-textSecondary/50">
                {new Date(note.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })}
              </p>
              <h3 className="mt-3 text-sm sm:text-base font-semibold text-textPrimary group-hover:text-white transition-colors leading-snug">
                {note.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-textSecondary leading-relaxed flex-1">
                {note.summary}
              </p>
              <p className="mt-4 text-xs font-medium text-accent group-hover:underline underline-offset-4">
                Read field note →
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <Link
            href="/notes"
            className="text-xs text-textSecondary hover:text-textPrimary transition-colors underline-offset-4 hover:underline"
          >
            View all notes →
          </Link>
        </div>
      </Section>

      {/* ── Reports ──────────────────────────────────────────────── */}
      <Section
        id="reports"
        title={home.reports.heading}
        subtitle={home.reports.intro}
      >
        <ul className="space-y-2 text-sm sm:text-base text-textSecondary">
          {home.reports.items.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between rounded-lg border border-dashed border-borderSubtle/60 bg-surface/40 px-4 py-3.5"
            >
              <span>{item}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-textSecondary/40">
                Coming soon
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Start CTA ────────────────────────────────────────────── */}
      <Section id="start" title={home.start.heading}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-center">
          <div>
            <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
              {home.start.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/framework" className="btn-primary">
                {home.start.primaryCtaLabel}
              </Link>
              <a
                href={siteConfig.personalSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                {home.start.secondaryCtaLabel}
              </a>
            </div>
          </div>
          <blockquote className="rounded-2xl border border-borderSubtle bg-gradient-to-b from-surface to-background p-5 sm:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-textSecondary/50 mb-4">
              On this project
            </p>
            <p className="text-sm sm:text-base text-textSecondary leading-relaxed italic">
              &ldquo;{copy.meta.quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </Section>
    </div>
  );
}
