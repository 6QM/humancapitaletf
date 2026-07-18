import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: 'paper' | 'ink' | 'plain';
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = 'plain',
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`section section-${tone} ${className}`.trim()}>
      <div className="container-inner">
        <div className="section-heading-wrap">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

