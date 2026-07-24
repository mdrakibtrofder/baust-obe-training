import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/** Interactive table where each row is expandable to reveal the full attribute text. */
export function AttributeTable({
  headers,
  rows,
  accent = "primary",
}: {
  headers: [string, string];
  rows: { code: string; attribute?: string; text: string }[];
  accent?: "primary" | "accent" | "chart-3" | "chart-4";
}) {
  const [open, setOpen] = useState<string | null>(rows[0]?.code ?? null);
  const badgeColor: Record<string, string> = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    "chart-3": "bg-[oklch(0.55_0.12_180)] text-white",
    "chart-4": "bg-[oklch(0.6_0.15_20)] text-white",
  };
  return (
    <div className="card-elev overflow-hidden">
      <div className="grid grid-cols-[110px_1fr_28px] gap-4 px-5 py-3 text-xs uppercase tracking-widest text-muted-foreground bg-surface-2 border-b border-border">
        <div>{headers[0]}</div>
        <div>{headers[1]}</div>
        <div></div>
      </div>
      {rows.map((r, i) => {
        const isOpen = open === r.code;
        return (
          <button
            key={r.code}
            onClick={() => setOpen(isOpen ? null : r.code)}
            className={`w-full text-left grid grid-cols-[110px_1fr_28px] gap-4 px-5 py-4 items-start border-b border-border last:border-b-0 hover:bg-secondary/40 transition-colors ${
              isOpen ? "bg-secondary/50" : ""
            } ${i % 2 === 1 ? "bg-surface-2/40" : ""}`}
          >
            <div>
              <span className={`inline-flex items-center justify-center min-w-[52px] px-2 py-1 rounded-md text-xs font-bold tracking-wider ${badgeColor[accent]}`}>
                {r.code}
              </span>
            </div>
            <div>
              {r.attribute && (
                <div className="font-semibold text-ink text-sm">{r.attribute}</div>
              )}
              <div className={`text-sm text-foreground/80 leading-relaxed ${!isOpen && r.attribute ? "line-clamp-1" : ""}`}>
                {r.text}
              </div>
            </div>
            <ChevronDown className={`h-4 w-4 mt-1 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        );
      })}
    </div>
  );
}

export function InfoCard({
  title,
  children,
  tone = "default",
}: {
  title?: string;
  children: ReactNode;
  tone?: "default" | "accent" | "muted" | "warn";
}) {
  const toneClass = {
    default: "card-elev",
    accent: "border border-accent/40 bg-highlight/40 rounded-xl p-5",
    muted: "bg-surface-2 border border-border rounded-xl p-5",
    warn: "border border-[oklch(0.7_0.15_30)]/40 bg-[oklch(0.95_0.05_45)] rounded-xl p-5",
  }[tone];
  return (
    <div className={`${toneClass} ${tone === "default" ? "p-5" : ""}`}>
      {title && <h3 className="font-display text-lg text-ink mb-2">{title}</h3>}
      <div className="text-sm text-foreground/85 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="card-elev overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface-2 border-b border-border">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={`border-b border-border last:border-b-0 ${ri % 2 === 1 ? "bg-surface-2/40" : ""}`}>
              {row.map((c, ci) => (
                <td key={ci} className="px-4 py-3 align-top text-foreground/85 leading-relaxed">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StepList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-4 card-elev p-4">
          <span className="grid place-items-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
            {i + 1}
          </span>
          <div>
            <div className="font-semibold text-ink">{it.title}</div>
            <div className="text-sm text-foreground/80 mt-1">{it.text}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Compact 7-category grid for the Psychomotor Domain (Perception → Origination), each with a short description and its verb list — matches the source slide layout. */
export function PsychomotorGrid({
  rows,
}: {
  rows: { code: string; label: string; desc: string; verbs: string[] }[];
}) {
  return (
    <div className="card-elev overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {rows.map((r) => (
              <th key={r.code} className="text-left align-top px-4 py-3 text-xs font-bold text-primary-foreground bg-primary border-r border-primary-foreground/10 last:border-r-0 whitespace-nowrap">
                {r.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border bg-surface-2/60">
            {rows.map((r) => (
              <td key={r.code} className="align-top px-4 py-3 text-foreground/85 leading-relaxed border-r border-border last:border-r-0 min-w-[160px]">
                {r.desc}
              </td>
            ))}
          </tr>
          <tr>
            {rows.map((r) => (
              <td key={r.code} className="align-top px-4 py-3 border-r border-border last:border-r-0">
                <ul className="space-y-1">
                  {r.verbs.map((v) => (
                    <li key={v} className="text-foreground/80 text-sm">{v}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/** 6-column Bloom's Cognitive Domain action-verb grid (Remember → Create). */
export function CognitiveVerbGrid({
  rows,
}: {
  rows: { level: string; verbs: string[] }[];
}) {
  return (
    <div className="card-elev overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-surface-2 border-b border-border">
            {rows.map((r) => (
              <th key={r.level} className="text-left px-4 py-3 text-sm font-bold text-ink border-r border-border last:border-r-0 whitespace-nowrap">
                {r.level}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.map((r) => (
              <td key={r.level} className="align-top px-4 py-3 border-r border-border last:border-r-0">
                <ul className="space-y-1">
                  {r.verbs.map((v) => (
                    <li key={v} className="text-foreground/80 text-sm">{v}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/** Responsive SVG "Learning Pyramid" — stacked trapezoid bands, widest at the bottom (highest retention), each annotated with % and outcomes enabled. */
export function LearningPyramid({
  levels,
}: {
  levels: { pct: number | null; activity: string; outcomes?: string }[];
}) {
  const n = levels.length; // ordered top (narrowest) → bottom (widest)
  const width = 720;
  const rowHeight = 56;
  const height = n * rowHeight + 20;
  const topWidth = 140;
  const bottomWidth = width - 40;
  const colors = ["oklch(0.5 0.16 290)", "oklch(0.55 0.15 250)", "oklch(0.58 0.13 210)", "oklch(0.6 0.14 160)", "oklch(0.65 0.15 90)", "oklch(0.65 0.18 50)", "oklch(0.6 0.2 25)"];

  return (
    <div className="card-elev p-5 overflow-x-auto">
      <svg viewBox={`0 0 ${width + 260} ${height}`} className="w-full min-w-[640px]" xmlns="http://www.w3.org/2000/svg">
        {levels.map((lvl, i) => {
          const wTop = topWidth + ((bottomWidth - topWidth) * i) / n;
          const wBottom = topWidth + ((bottomWidth - topWidth) * (i + 1)) / n;
          const y = 10 + i * rowHeight;
          const xTop = (width - wTop) / 2;
          const xBottom = (width - wBottom) / 2;
          const color = colors[i % colors.length];
          return (
            <g key={i}>
              <polygon
                points={`${xTop},${y} ${xTop + wTop},${y} ${xBottom + wBottom},${y + rowHeight - 4} ${xBottom},${y + rowHeight - 4}`}
                fill={color}
                stroke="white"
                strokeWidth="1.5"
              />
              <text x={width / 2} y={y + rowHeight / 2 + 4} textAnchor="middle" fontSize="12" fontWeight="600" fill="white">
                {lvl.activity.length > 46 ? lvl.activity.slice(0, 44) + "…" : lvl.activity}
              </text>
              {lvl.pct !== null && (
                <text x={xBottom - 12} y={y + rowHeight / 2 + 4} textAnchor="end" fontSize="13" fontWeight="700" fill="var(--ink, #1e293b)">
                  {lvl.pct}%
                </text>
              )}
              {lvl.outcomes && (
                <text x={xBottom + wBottom + 16} y={y + rowHeight / 2 + 4} fontSize="11" fill="var(--muted-foreground, #64748b)">
                  {lvl.outcomes}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <p className="mt-3 text-xs text-muted-foreground">Left: % of content generally recalled for that activity type. Right: the kinds of learning outcomes that activity level can support.</p>
    </div>
  );
}

export function BulletList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
