import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getContent } from '../../../content/siteContent';
import { isLocale, localePath } from '../../../lib/i18n';
import { buildPageMetadata } from '../../../lib/seo';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return buildPageMetadata({
    locale,
    title: `${content.programsPage.title} | Human Capital ETF`,
    description: content.programsPage.intro,
    path: '/programs',
  });
}
export default async function ProgramsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const page = content.programsPage;

  return (
    <>
      <header className="page-hero">
        <div className="container-inner narrow">
          <p className="eyebrow eyebrow-light">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </header>

      <section className="page-section page-section-paper">
        <div className="container-inner narrow">
          <div className="method-card">
            <p className="eyebrow">{locale === 'zh' ? '编辑说明' : 'Editorial note'}</p>
            <h2>{page.methodTitle}</h2>
            <p>{page.methodBody}</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-inner narrow program-list">
          {content.programs.map((program, index) => (
            <article id={`program-${index + 1}`} className="program-detail scroll-target" key={program.title}>
              <div className="program-detail-index">0{index + 1}</div>
              <div>
                <p className="program-type">{program.type}</p>
                <h2>{program.title}</h2>
                <p>{program.summary}</p>
                <h3>{locale === 'zh' ? '进入框架的概念' : 'Concepts retained in the framework'}</h3>
                <ul className="tag-list">
                  {program.ideas.map((idea) => <li key={idea}>{idea}</li>)}
                </ul>
                <p className="source-line">
                  <span>{locale === 'zh' ? '内容来源' : 'Content source'}</span>
                  <code>{program.source}</code>
                </p>
                {program.href ? (
                  <a className="text-link" href={program.href} target="_blank" rel="noreferrer">
                    {program.action} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link className="text-link" href={localePath(locale, '/framework')}>
                    {program.action} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section synthesis-section">
        <div className="container-inner narrow">
          <p className="eyebrow eyebrow-light">{locale === 'zh' ? '统一后的框架' : 'Unified framework'}</p>
          <h2>{page.synthesisTitle}</h2>
          <p>{page.synthesisBody}</p>
          <Link className="button button-primary" href={localePath(locale, '/framework')}>
            {content.nav.framework}
          </Link>
        </div>
      </section>
    </>
  );
}
