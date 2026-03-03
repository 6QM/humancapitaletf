import { copy } from '../../content/copy';
import { buildPageMetadata } from '../../lib/seo';

export const metadata = buildPageMetadata({
  title: 'Framework – Human Capital ETF',
  description: copy.frameworkPage.intro,
});

export default function FrameworkPage() {
  const { frameworkPage } = copy;

  return (
    <div className="section-shell">
      <div className="container-inner max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
          Framework
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-textPrimary">
          {frameworkPage.heading}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-textSecondary">
          {frameworkPage.intro}
        </p>
        <div className="mt-8 space-y-7">
          {frameworkPage.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-sm sm:text-base font-semibold text-textPrimary">
                {section.heading}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-textSecondary">
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm sm:text-base text-textSecondary">
          {frameworkPage.closing}
        </p>
      </div>
    </div>
  );
}

