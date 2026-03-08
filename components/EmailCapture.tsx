'use client';

import { useState } from 'react';

export function EmailCapture() {
  const [email,  setEmail]  = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await res.json();
        setStatus('error');
        setErrMsg(data.error ?? 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrMsg('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-accent/20 bg-accent/5 px-5 py-4">
        <p className="text-sm font-semibold text-textPrimary">You&apos;re in.</p>
        <p className="mt-1 text-xs text-textSecondary/60">
          Occasional field notes only—no noise, no promotion.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full border border-borderSubtle bg-muted px-4 py-2.5 text-sm text-textPrimary placeholder:text-textSecondary/30 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Joining…' : 'Follow the experiment'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-xs text-red-400 pl-1">{errMsg}</p>
      )}
      <p className="text-[11px] text-textSecondary/30 pl-1">
        Field notes only. Unsubscribe anytime.
      </p>
    </form>
  );
}
