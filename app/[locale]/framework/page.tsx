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
    title: `${content.frameworkPage.title} | Human Capital ETF`,
    description: content.frameworkPage.intro,
    path: '/framework',
  });
}
export default async function FrameworkPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const page = content.frameworkPage;

  return (
    <>
      <header className="page-hero">
        <div className="container-inner narrow">
          <p className="eyebrow eyebrow-light">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </header>

      <section className="page-section">
        <div className="container-inner narrow">
          <div className="definition-card">
            <p className="eyebrow">{page.definitionLabel}</p>
            <blockquote>{page.definition}</blockquote>
          </div>

          <div className="subsection">
            <h2>{page.distinctionTitle}</h2>
            <div className="distinction-grid">
              {page.distinctions.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-paper">
        <div className="container-inner">
          <div className="section-heading-wrap">
            <p className="eyebrow">{page.bucketsEyebrow}</p>
            <h2>{page.bucketsTitle}</h2>
            <p className="section-intro">{page.bucketsIntro}</p>
          </div>
          <div className="framework-detail-grid">
            {content.buckets.map((bucket, index) => (
              <article className={`framework-detail bucket-${bucket.key}`} key={bucket.key}>
                <div className="framework-detail-title">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{bucket.name}</h3>
                    <p>{bucket.role}</p>
                  </div>
                </div>
                <p className="framework-question">{bucket.question}</p>
                <p>{bucket.description}</p>
                <dl>
                  <div>
                    <dt>{locale === 'zh' ? '失衡风险' : 'Failure mode'}</dt>
                    <dd>{bucket.risk}</dd>
                  </div>
                  <div>
                    <dt>{locale === 'zh' ? '资产证据' : 'Evidence of an asset'}</dt>
                    <dd>{bucket.evidence}</dd>
                  </div>
                </dl>
                <p className="bucket-principle">{bucket.principle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-inner narrow">
          <div className="section-heading-wrap">
            <p className="eyebrow">{page.systemEyebrow}</p>
            <h2>{page.systemTitle}</h2>
            <p className="section-intro">{page.systemIntro}</p>
          </div>
          <ol className="system-steps">
            {page.systemSteps.map((step, index) => (
              <li key={step.title}>
                <span className="system-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <strong>{step.output}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section boundary-section">
        <div className="container-inner boundary-grid">
          <div>
            <p className="eyebrow eyebrow-light">{page.boundaryEyebrow}</p>
            <h2>{page.boundaryTitle}</h2>
            <p>{page.boundaryBody}</p>
          </div>
          <ol>
            {page.boundaryTests.map((test, index) => (
              <li key={test}><span>0{index + 1}</span><p>{test}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="audit" className="page-section page-section-paper scroll-target">
        <div className="container-inner narrow">
          <div className="section-heading-wrap">
            <p className="eyebrow">{page.auditEyebrow}</p>
            <h2>{page.auditTitle}</h2>
            <p className="section-intro">{page.auditBody}</p>
          </div>
          <ol className="audit-list">
            {page.auditQuestions.map((question, index) => (
              <li key={question}>
                <span>0{index + 1}</span>
                <p>{question}</p>
              </li>
            ))}
          </ol>
          <blockquote className="closing-quote">{page.close}</blockquote>
          <Link className="text-link" href={localePath(locale)}>
            {content.common.backHome} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
