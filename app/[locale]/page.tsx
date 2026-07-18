import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '../../components/Section';
import { siteConfig } from '../../config/siteConfig';
import { getContent } from '../../content/siteContent';
import { isLocale, localePath } from '../../lib/i18n';
import { buildPageMetadata } from '../../lib/seo';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildPageMetadata({ locale, ...getContent(locale).meta });
}
export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const { home, buckets, programs } = content;

  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container-inner hero-layout">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">{home.hero.kicker}</p>
            <h1>{home.hero.title}</h1>
            <p className="hero-subtitle">{home.hero.subtitle}</p>
            <p className="hero-body">{home.hero.body}</p>
            <div className="button-row">
              <Link className="button button-primary" href={localePath(locale, '/framework')}>
                {home.hero.primary}
              </Link>
              <Link className="button button-secondary" href={`${localePath(locale, '/framework')}#audit`}>
                {home.hero.secondary}
              </Link>
            </div>
            <p className="hero-note">{home.hero.note}</p>
          </div>

          <div className="portfolio-visual" aria-label="Core, Growth, Distribution, Meta">
            <div className="portfolio-label">
              <span>HCE / 04</span>
              <span>{locale === 'zh' ? '组合结构' : 'Portfolio structure'}</span>
            </div>
            <div className="portfolio-stack">
              {buckets.map((bucket, index) => (
                <div className={`portfolio-row portfolio-${bucket.key}`} key={bucket.key}>
                  <span className="portfolio-index">0{index + 1}</span>
                  <span className="portfolio-name">{bucket.name}</span>
                  <span className="portfolio-role">{bucket.role}</span>
                </div>
              ))}
            </div>
            <div className="portfolio-footer">
              <span>{locale === 'zh' ? '长期持有' : 'Hold long term'}</span>
              <span>{locale === 'zh' ? '持续再平衡' : 'Rebalance continuously'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="thesis-strip">
        <div className="container-inner thesis-grid">
          <p className="eyebrow">{home.thesis.label}</p>
          <blockquote>{home.thesis.quote}</blockquote>
          <p>{home.thesis.body}</p>
        </div>
      </section>

      <Section
        id="problem"
        eyebrow={home.problem.eyebrow}
        title={home.problem.title}
        intro={home.problem.body}
        tone="paper"
      >
        <div className="problem-grid">
          {home.problem.items.map((item, index) => (
            <article className="problem-card" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="worker-investor"
        eyebrow={home.bridge.eyebrow}
        title={home.bridge.title}
        intro={home.bridge.body}
        tone="ink"
      >
        <div className="ledger-grid">
          <article className="ledger-card">
            <p>{home.bridge.worker.label}</p>
            <h3>{home.bridge.worker.title}</h3>
            <div className="ledger-line" />
            <p>{home.bridge.worker.body}</p>
          </article>
          <div className="ledger-plus" aria-hidden="true">+</div>
          <article className="ledger-card ledger-card-accent">
            <p>{home.bridge.investor.label}</p>
            <h3>{home.bridge.investor.title}</h3>
            <div className="ledger-line" />
            <p>{home.bridge.investor.body}</p>
          </article>
        </div>
        <p className="bridge-conclusion">{home.bridge.conclusion}</p>
      </Section>

      <Section
        id="framework"
        eyebrow={home.framework.eyebrow}
        title={home.framework.title}
        intro={home.framework.body}
      >
        <div className="bucket-grid">
          {buckets.map((bucket, index) => (
            <article className={`bucket-card bucket-${bucket.key}`} key={bucket.key}>
              <div className="bucket-topline">
                <span>0{index + 1}</span>
                <span>{bucket.role}</span>
              </div>
              <h3>{bucket.name}</h3>
              <p className="bucket-question">{bucket.question}</p>
              <p className="bucket-description">{bucket.description}</p>
              <ul className="tag-list">
                {bucket.examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
              <p className="bucket-principle">{bucket.principle}</p>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Link className="text-link" href={localePath(locale, '/framework')}>
            {home.framework.action} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow={home.loop.eyebrow}
        title={home.loop.title}
        intro={home.loop.body}
        tone="paper"
      >
        <ol className="loop-grid">
          {home.loop.steps.map((step, index) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {index < home.loop.steps.length - 1 ? <b aria-hidden="true">→</b> : null}
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow={home.programs.eyebrow}
        title={home.programs.title}
        intro={home.programs.body}
      >
        <div className="program-grid">
          {programs.map((program, index) => {
            const href = program.href ?? `${localePath(locale, '/programs')}#program-${index + 1}`;
            return (
              <article className="program-card" key={program.title}>
                <p className="program-type">{program.type}</p>
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
                <ul className="tag-list">
                  {program.ideas.map((idea) => <li key={idea}>{idea}</li>)}
                </ul>
                {program.href ? (
                  <a className="text-link" href={href} target="_blank" rel="noreferrer">
                    {program.action} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link className="text-link" href={href}>
                    {program.action} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            );
          })}
        </div>
        <div className="section-action">
          <Link className="text-link" href={localePath(locale, '/programs')}>
            {home.programs.action} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section
        id="author"
        eyebrow={home.author.eyebrow}
        title={home.author.title}
        tone="ink"
      >
        <div className="author-grid">
          <div className="author-monogram" aria-hidden="true">
            <span>QM</span>
            <small>Engineer / Writer</small>
          </div>
          <div className="author-copy">
            <p>{home.author.body}</p>
            <p>{home.author.projectBody}</p>
            <div className="button-row">
              <a className="button button-primary" href={siteConfig.personalSiteUrl} target="_blank" rel="noreferrer">
                {home.author.personalSite} ↗
              </a>
              <Link className="button button-secondary" href={localePath(locale, '/about')}>
                {home.author.about}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="start"
        eyebrow={home.start.eyebrow}
        title={home.start.title}
        intro={home.start.body}
        tone="paper"
      >
        <div className="audit-preview">
          <ol>
            {home.start.questions.map((question, index) => (
              <li key={question}><span>0{index + 1}</span><p>{question}</p></li>
            ))}
          </ol>
          <Link className="button button-dark" href={`${localePath(locale, '/framework')}#audit`}>
            {home.start.action}
          </Link>
        </div>
      </Section>
    </>
  );
}
