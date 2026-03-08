'use client';

import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TooltipProps = any;

type DataPoint = {
  age: number;
  now: number;
  later: number;
};

// Annual compounding rate based on consistent focused hours per week.
// Inspired by deliberate practice research — more hours compound faster
// up to a sustainable ceiling (~25%).
function getAnnualRate(hoursPerWeek: number): number {
  if (hoursPerWeek <= 2)  return 0.07;
  if (hoursPerWeek <= 5)  return 0.11;
  if (hoursPerWeek <= 10) return 0.16;
  if (hoursPerWeek <= 15) return 0.21;
  return 0.25;
}

function buildChartData(currentAge: number, hoursPerWeek: number): DataPoint[] {
  const rate = getAnnualRate(hoursPerWeek);
  const endAge = 65;
  const delayedStartAge = currentAge + 5;
  const points: DataPoint[] = [];
  let nowValue = 100;
  let laterValue = 100;

  for (let age = currentAge; age <= endAge; age++) {
    points.push({ age, now: Math.round(nowValue), later: Math.round(laterValue) });
    nowValue *= (1 + rate);
    if (age >= delayedStartAge) {
      laterValue *= (1 + rate);
    }
  }
  return points;
}

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nowVal   = Number(payload.find((p: any) => p.dataKey === 'now')?.value   ?? 0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const laterVal = Number(payload.find((p: any) => p.dataKey === 'later')?.value ?? 0);
  const gap = nowVal - laterVal;
  return (
    <div className="rounded-lg border border-borderSubtle bg-surface p-3 text-xs shadow-xl">
      <p className="font-semibold text-textPrimary mb-2">Age {label}</p>
      <div className="space-y-1">
        <p>
          <span className="inline-block h-2 w-2 rounded-full bg-accent mr-2" />
          <span className="text-textSecondary">Start now: </span>
          <span className="font-semibold text-accent">{nowVal.toLocaleString()}×</span>
        </p>
        <p>
          <span className="inline-block h-2 w-2 rounded-full bg-borderSubtle mr-2" />
          <span className="text-textSecondary/60">5 yrs later: </span>
          <span className="text-textSecondary/60">{laterVal.toLocaleString()}×</span>
        </p>
        {gap > 0 && (
          <p className="mt-2 pt-2 border-t border-borderSubtle text-textSecondary/40">
            {gap.toLocaleString()}× ahead
            ({Math.round((gap / Math.max(laterVal, 1)) * 100)}% more)
          </p>
        )}
      </div>
    </div>
  );
}

export function CompoundingVisualizer() {
  const [currentAge, setCurrentAge]     = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);

  const data = useMemo(
    () => buildChartData(currentAge, hoursPerWeek),
    [currentAge, hoursPerWeek]
  );

  const finalNow   = data[data.length - 1]?.now   ?? 0;
  const finalLater = data[data.length - 1]?.later  ?? 0;
  const multiplier = (finalNow / Math.max(finalLater, 1)).toFixed(1);
  const pctAhead   = Math.round(((finalNow - finalLater) / Math.max(finalLater, 1)) * 100);
  const rate       = getAnnualRate(hoursPerWeek);

  return (
    <div>
      {/* ── Sliders ──────────────────────────────────── */}
      <div className="grid gap-6 sm:grid-cols-2 mb-8">
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-textSecondary/60">Current age</span>
            <span className="font-semibold text-textPrimary">{currentAge}</span>
          </div>
          <input
            type="range" min={18} max={45} value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="viz-range w-full"
          />
          <div className="flex justify-between text-[10px] text-textSecondary/30 mt-1">
            <span>18</span><span>45</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-textSecondary/60">Focused hours / week</span>
            <span className="font-semibold text-textPrimary">{hoursPerWeek} hrs</span>
          </div>
          <input
            type="range" min={1} max={20} value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="viz-range w-full"
          />
          <div className="flex justify-between text-[10px] text-textSecondary/30 mt-1">
            <span>1 hr</span><span>20 hrs</span>
          </div>
        </div>
      </div>

      {/* ── Insight callout ───────────────────────────── */}
      <div className="mb-6 rounded-xl border border-accent/20 bg-accent/5 px-4 py-4">
        <p className="text-sm text-textSecondary leading-relaxed">
          Investing{' '}
          <span className="text-white font-medium">{hoursPerWeek} hrs/week</span>{' '}
          starting at age{' '}
          <span className="text-white font-medium">{currentAge}</span>{' '}
          vs age{' '}
          <span className="text-textSecondary/50">{currentAge + 5}</span>
          {' '}—by 65, you&apos;d have{' '}
          <span className="text-accent font-semibold">{multiplier}× more</span>{' '}
          compounded skill capital
          {pctAhead > 0 && ` (${pctAhead}% ahead)`}.
          That&apos;s the cost of a 5-year delay.
        </p>
      </div>

      {/* ── Chart ─────────────────────────────────────── */}
      <div className="h-60 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 8, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2933" vertical={false} />
            <XAxis
              dataKey="age"
              tick={{ fontSize: 11, fill: '#4B5563' }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#4B5563' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}×`}
              width={42}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#1F2933', strokeWidth: 1 }}
            />
            <Line
              type="monotone" dataKey="now"
              stroke="#3B82F6" strokeWidth={2.5} dot={false}
              activeDot={{ r: 4, fill: '#3B82F6', stroke: '#050608', strokeWidth: 2 }}
            />
            <Line
              type="monotone" dataKey="later"
              stroke="#374151" strokeWidth={2} dot={false}
              strokeDasharray="6 4"
              activeDot={{ r: 4, fill: '#374151', stroke: '#050608', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ── Legend ────────────────────────────────────── */}
      <div className="mt-3 flex flex-wrap items-center gap-5 text-xs text-textSecondary/50">
        <span className="flex items-center gap-2">
          <span className="block h-0.5 w-5 rounded bg-accent" />
          Start at {currentAge}
        </span>
        <span className="flex items-center gap-2">
          <span className="block h-0.5 w-5 rounded bg-textSecondary/20" />
          Start at {currentAge + 5}
        </span>
        <span className="ml-auto text-[10px] text-textSecondary/30">
          ~{Math.round(rate * 100)}% annual compound rate
        </span>
      </div>
    </div>
  );
}
