import Link from 'next/link';
import { notes } from '../../content/notes';

export default function NotesIndexPage() {
  return (
    <div className="section-shell">
      <div className="container-inner max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-textSecondary/50">
          Live Experiment
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-textPrimary">
          Field Notes
        </h1>
        <p className="mt-4 text-sm sm:text-base text-textSecondary leading-relaxed max-w-xl">
          A minimal, chronological log of the Human Capital ETF experiment. Each
          note is short and observational—closer to an engineering change log
          than a blog post.
        </p>

        <div className="mt-10 space-y-3">
          {notes.map((note, i) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="card-hover group flex flex-col sm:flex-row sm:items-start gap-4 rounded-xl border border-borderSubtle bg-surface/80 p-5 sm:p-6"
            >
              {/* Date column */}
              <div className="flex-none sm:w-28">
                <p className="text-[10px] uppercase tracking-[0.25em] text-textSecondary/50">
                  {new Date(note.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </p>
                <p className="mt-1 text-[10px] text-textSecondary/40">
                  Note {String(notes.length - i).padStart(2, '0')}
                </p>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="text-sm sm:text-base font-semibold text-textPrimary group-hover:text-white transition-colors leading-snug">
                  {note.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-textSecondary leading-relaxed line-clamp-2">
                  {note.summary}
                </p>
              </div>

              {/* Arrow */}
              <span className="hidden sm:block flex-none text-textSecondary/30 group-hover:text-accent transition-colors text-lg mt-0.5">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
