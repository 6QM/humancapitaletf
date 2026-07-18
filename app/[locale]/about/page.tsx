import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig } from '../../../config/siteConfig';
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
    title: `${content.aboutPage.title} | Human Capital ETF`,
    description: content.aboutPage.intro,
    path: '/about',
  });
}
export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const page = content.aboutPage;

  return (
    <>
      <header className="page-hero about-hero">
        <div className="container-inner narrow">
          <p className="eyebrow eyebrow-light">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </header>

      <section className="page-section">
        <div className="container-inner author-page-grid">
          <div className="author-signature" aria-hidden="true">
            <span>QM</span>
            <p>Qiaomai Liu</p>
            <small>Engineer · Writer · Learner</small>
          </div>
          <div className="author-page-copy">
            <p className="eyebrow">{page.authorEyebrow}</p>
            <h2>{page.authorTitle}</h2>
            {page.authorBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="button-row">
              <a className="button button-dark" href={siteConfig.personalSiteUrl} target="_blank" rel="noreferrer">69mike.com ↗</a>
              <a className="button button-outline" href={siteConfig.authorUrl} target="_blank" rel="noreferrer">
                {locale === 'zh' ? '专业经历' : 'Professional background'} ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-paper">
        <div className="container-inner">
          <div className="section-heading-wrap">
            <p className="eyebrow">{page.relationEyebrow}</p>
            <h2>{page.relationTitle}</h2>
          </div>
          <div className="relation-grid">
            {page.relations.map((relation, index) => {
              const isExternal = relation.href.startsWith('http');
              const href = isExternal ? relation.href : localePath(locale, relation.href);
              return (
                <article key={relation.name}>
                  <span>0{index + 1}</span>
                  <p>{relation.role}</p>
                  <h3>{relation.name}</h3>
                  <p>{relation.body}</p>
                  {isExternal ? (
                    <a className="text-link" href={href} target="_blank" rel="noreferrer">{content.common.readMore} ↗</a>
                  ) : (
                    <Link className="text-link" href={href}>{content.common.readMore} →</Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-inner narrow">
          <div className="section-heading-wrap">
            <p className="eyebrow">{page.principlesEyebrow}</p>
            <h2>{page.principlesTitle}</h2>
          </div>
          <ol className="principles-list">
            {page.principles.map((principle, index) => (
              <li key={principle}><span>0{index + 1}</span><p>{principle}</p></li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
