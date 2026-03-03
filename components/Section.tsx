import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section-shell">
      <div className="container-inner">
        <div className="max-w-2xl">
          <h2 id={`${id}-heading`} className="section-heading">
            {title}
          </h2>
          {subtitle ? (
            <p className="section-subtitle">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

