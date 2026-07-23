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
