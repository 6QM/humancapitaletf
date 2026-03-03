import Link from 'next/link';
import { notes } from '../../content/notes';

export default function NotesIndexPage() {
  return (
    <div className="section-shell">
      <div className="container-inner max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
          Live Experiment
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-textPrimary">
          Updates / Field Notes
        </h1>
        <p className="mt-4 text-sm sm:text-base text-textSecondary">
          A minimal, chronological log of the Human Capital ETF experiment. Each
          note is short and observational, closer to an engineering change log
          than a blog post.
        </p>
        <div className="mt-8 space-y-4">
          {notes.map((note) => (
            <article
              key={note.slug}
              className="rounded-xl border border-borderSubtle bg-surface/80 p-5 sm:p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-textSecondary/70">
                {new Date(note.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })}
              </p>
              <h2 className="mt-3 text-sm sm:text-base font-semibold text-textPrimary">
                {note.title}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-textSecondary">
                {note.summary}
              </p>
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
      </div>
    </div>
  );
}

