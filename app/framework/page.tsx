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
        <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50">
          Framework
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-textPrimary">
          {frameworkPage.heading}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-textSecondary leading-relaxed max-w-2xl">
          {frameworkPage.intro}
        </p>

        {/* Steps timeline */}
        <div className="mt-12 relative">
          {/* Vertical connecting line (desktop) */}
          <div className="absolute left-[15px] top-2 bottom-4 w-px bg-borderSubtle hidden sm:block" />

          <div className="space-y-10">
            {frameworkPage.sections.map((section, i) => (
              <section key={section.heading} className="relative sm:pl-12">
                {/* Step circle (desktop) */}
                <div className="hidden sm:flex absolute left-0 top-0 h-8 w-8 items-center justify-center rounded-full border border-borderSubtle bg-surface text-xs font-semibold text-accent">
                  {i + 1}
                </div>

                {/* Step indicator (mobile) */}
                <div className="flex items-center gap-3 mb-3 sm:hidden">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-borderSubtle bg-surface text-[11px] font-semibold text-accent">
                    {i + 1}
                  </span>
                  <div className="h-px flex-1 bg-borderSubtle/60" />
                </div>

                <h2 className="text-sm sm:text-base font-semibold text-textPrimary pt-1">
                  {section.heading}
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-textSecondary leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>

        {/* Closing callout */}
        <div className="mt-12 rounded-xl border border-borderSubtle/60 bg-muted/40 p-5 sm:p-6">
          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            {frameworkPage.closing}
          </p>
        </div>
      </div>
    </div>
  );
}
