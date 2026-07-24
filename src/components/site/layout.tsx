import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useRef, useEffect, type ReactNode } from "react";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

type NavItem = { to: string; label: string };
type NavGroup = { label: string; items: NavItem[] };

const topNav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/framework", label: "Framework" },
  { to: "/criteria", label: "Criteria" },
  { to: "/resources", label: "Resources" },
];

const modulesGroup: NavGroup = {
  label: "Modules",
  items: [
    { to: "/module-3", label: "Module 3 · Teaching & Assessment" },
    { to: "/module-4", label: "Module 4 · CQI" },
    { to: "/module-5", label: "Module 5 · CEP & CEA" },
    { to: "/module-6", label: "Module 6 · Outcome Attainment" },
  ],
};

const referencesGroup: NavGroup = {
  label: "References",
  items: [
    { to: "/po-indicators", label: "PO Indicators" },
    { to: "/appendices", label: "Appendices (Bloom's + v2.2→v3.0)" },
  ],
};

const sarGroup: NavGroup = {
  label: "SAR Template",
  items: [
    { to: "/sar", label: "Overview & Guidelines" },
    { to: "/sar/criterion-1", label: "Criterion 1 · PEOs" },
    { to: "/sar/criterion-2", label: "Criterion 2 · POs & Assessment" },
    { to: "/sar/criterion-3", label: "Criterion 3 · Curriculum" },
    { to: "/sar/criterion-4", label: "Criterion 4 · Industry" },
    { to: "/sar/criterion-5", label: "Criterion 5 · CQI" },
    { to: "/sar/criterion-6", label: "Criterion 6 · Students" },
    { to: "/sar/criterion-7", label: "Criterion 7 · Faculty" },
    { to: "/sar/criterion-8", label: "Criterion 8 · Governance, Finance & Safety" },
    { to: "/sar/criterion-9", label: "Criterion 9 · Facilities" },
    { to: "/sar/annexures", label: "Annexures A–M" },
  ],
};

const allGroups = [modulesGroup, referencesGroup, sarGroup];

function useOutsideClose(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);
  return ref;
}

function NavDropdown({ group, pathname }: { group: NavGroup; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClose(open, () => setOpen(false));
  const active = group.items.some((i) => pathname === i.to || pathname.startsWith(i.to + "/"));
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors ${
          active ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        {group.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 min-w-[260px] rounded-lg border border-border bg-background shadow-[var(--shadow-lift)] p-1 z-50">
          {group.items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm ${
                pathname === i.to ? "bg-secondary text-secondary-foreground font-medium" : "text-foreground/85 hover:bg-muted"
              }`}
            >
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

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
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">BAETE Accreditation Manual v3 · Presented by BAUST</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {topNav.map((n) => {
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
          {allGroups.map((g) => (
            <NavDropdown key={g.label} group={g} pathname={pathname} />
          ))}
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
        <div className="lg:hidden border-t border-border bg-background max-h-[70vh] overflow-auto">
          <div className="px-5 py-3 flex flex-col gap-1">
            {topNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm ${pathname === n.to ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-muted"}`}
              >
                {n.label}
              </Link>
            ))}
            {allGroups.map((g) => (
              <div key={g.label} className="mt-3">
                <div className="px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{g.label}</div>
                {g.items.map((i) => (
                  <Link
                    key={i.to}
                    to={i.to}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm ${pathname === i.to ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-muted"}`}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

const importantLinks: { label: string; href: string }[] = [
  { label: "BAETE", href: "https://www.baetebangladesh.org/" },
  { label: "BAUST", href: "https://www.baust.edu.bd/" },
  { label: "IQAC, BAUST", href: "https://baust.edu.bd/iqac/" },
  { label: "Developer", href: "https://mdrakibtrofder.github.io/" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 flex flex-col md:flex-row gap-8 justify-between items-start">
        <div>
          <div className="font-display text-lg text-ink">OBE Training</div>
          <div className="text-sm text-muted-foreground mt-1 max-w-sm">
            Hands-on training reference for Outcome-Based Education and BAETE accreditation.
          </div>
          <div className="text-sm text-foreground/80 mt-2 max-w-sm">
            Presented by <a href="https://www.baust.edu.bd/" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">Bangladesh Army University of Science and Technology (BAUST)</a>.
          </div>
        </div>

        <div className="md:text-right">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2">Important Links</div>
          <ul className="flex flex-col md:items-end gap-1.5">
            {importantLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-center text-xs text-muted-foreground">
          © {year} Bangladesh Army University of Science and Technology, Saidpur. All Rights Reserved.
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

const sarSequence: { to: string; label: string }[] = [
  { to: "/sar", label: "Overview & Guidelines" },
  { to: "/sar/criterion-1", label: "Criterion 1 · PEOs" },
  { to: "/sar/criterion-2", label: "Criterion 2 · POs & Assessment" },
  { to: "/sar/criterion-3", label: "Criterion 3 · Curriculum" },
  { to: "/sar/criterion-4", label: "Criterion 4 · Industry" },
  { to: "/sar/criterion-5", label: "Criterion 5 · CQI" },
  { to: "/sar/criterion-6", label: "Criterion 6 · Students" },
  { to: "/sar/criterion-7", label: "Criterion 7 · Faculty" },
  { to: "/sar/criterion-8", label: "Criterion 8 · Governance, Finance & Safety" },
  { to: "/sar/criterion-9", label: "Criterion 9 · Facilities" },
  { to: "/sar/annexures", label: "Annexures A–M" },
];

/** Breadcrumb + progress strip + prev/next links shared by every /sar/* page. */
export function SarCriterionNav({ current }: { current: string }) {
  const idx = sarSequence.findIndex((s) => s.to === current);
  const prev = idx > 0 ? sarSequence[idx - 1] : null;
  const next = idx >= 0 && idx < sarSequence.length - 1 ? sarSequence[idx + 1] : null;
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-6">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/sar" className="hover:text-foreground">SAR Template</Link>
        {idx > 0 && (
          <>
            <span>/</span>
            <span className="text-foreground">{sarSequence[idx].label}</span>
          </>
        )}
      </div>
      {idx >= 0 && (
        <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
          {idx === 0 ? "Overview" : `Criterion ${idx} of 9`}
        </div>
      )}
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-b border-border py-3">
        {prev ? (
          <Link to={prev.to} className="text-sm font-medium text-primary hover:underline">
            ← {prev.label}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={next.to} className="text-sm font-medium text-primary hover:underline">
            {next.label} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}

export function RelatedPages({ items }: { items: { to: string; label: string; desc?: string }[] }) {
  return (
    <Section eyebrow="Related" title="See also">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <Link key={it.to} to={it.to} className="card-elev p-5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] transition block">
            <div className="font-display text-lg text-ink">{it.label}</div>
            {it.desc && <p className="text-sm text-foreground/70 mt-1.5 leading-relaxed">{it.desc}</p>}
          </Link>
        ))}
      </div>
    </Section>
  );
}
