import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/framework", label: "Framework" },
  { to: "/criteria", label: "Criteria" },
  { to: "/module-3", label: "Module 3" },
  { to: "/module-4", label: "Module 4" },
  { to: "/module-5", label: "Module 5" },
  { to: "/module-6", label: "Module 6" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg text-ink">OBE Training</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">BAETE · Outcome-Based Education</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  active ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-5 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm ${pathname === n.to ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-muted"}`}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <div className="font-display text-lg text-ink">OBE Training</div>
          <div className="text-sm text-muted-foreground">
            Hands-on training reference for Outcome-Based Education and BAETE accreditation.
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          Content sourced from BAETE Accreditation Criteria v3.0 and BAETE OBE Training Modules 3–6.
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-hero-radial text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 lg:py-20">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 lg:px-8 py-12 lg:py-16 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-8">
          {eyebrow && <div className="chip mb-3">{eyebrow}</div>}
          {title && <h2 className="font-display text-3xl md:text-4xl text-ink">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}
