import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Target, Layers, RefreshCw, Compass, CheckCircle2, MapPin } from "lucide-react";
import { modules } from "@/lib/obe-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OBE Training — Home" },
      { name: "description", content: "Learn Outcome-Based Education and BAETE accreditation through the framework tables, criteria, and Modules 3–6." },
      { property: "og:title", content: "OBE Training — Home" },
      { property: "og:description", content: "Interactive OBE training reference for engineering educators and accreditation teams." },
    ],
  }),
  component: Home,
});

const goals = [
  { icon: Target, title: "Understand OBE", text: "Grasp what Outcome-Based Education is and why it matters for accreditation and modern engineering programs." },
  { icon: Layers, title: "Master the framework", text: "Work with the BAETE knowledge profile (WK1–WK9), complex problem attributes (WP1–WP7), and activities (EA1–EA5)." },
  { icon: RefreshCw, title: "Close the CQI loop", text: "Design assessments and continuous improvement cycles that produce defensible evidence of attainment." },
];

const moduleIcons: Record<string, typeof BookOpen> = {
  framework: Layers, criteria: BookOpen, m3: Target, m4: RefreshCw, m5: Compass, m6: CheckCircle2,
};

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-radial text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            BAETE · Outcome-Based Education Training
          </div>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-[1.05]">
            A hands-on guide to <span className="text-accent italic">Outcome-Based</span> engineering education.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            Everything you need to design, assess and continuously improve an OBE curriculum aligned with the BAETE Accreditation Criteria v3.0 — the framework tables, the nine criteria, and Modules 3 through 6, in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/framework" className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
              Explore the framework <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#modules" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
              Jump to modules
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { k: "12", v: "Program Outcomes" },
              { k: "9", v: "Knowledge Profile" },
              { k: "9", v: "Accreditation Criteria" },
              { k: "4", v: "Training Modules" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-accent/60 pl-4">
                <div className="font-display text-3xl md:text-4xl text-white">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl">
          <div className="chip mb-3">Purpose of this site</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Why OBE Training exists</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            OBE shifts the focus from what teachers deliver to what learners can demonstrably do. This site turns the BAETE training materials into a searchable, interactive reference so program teams can plan curriculum, run assessments, and produce accreditation-ready evidence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {goals.map((g) => (
            <div key={g.title} className="card-elev p-6">
              <div className="grid place-items-center h-11 w-11 rounded-lg bg-primary/10 text-primary mb-4">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-ink">{g.title}</h3>
              <p className="text-sm text-foreground/75 mt-2 leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="bg-surface-2 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="chip mb-3">Contents</div>
              <h2 className="font-display text-4xl md:text-5xl text-ink">Modules & references</h2>
              <p className="mt-3 text-foreground/75 max-w-2xl">Six focused sections covering everything from the underlying framework tables to outcome attainment.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => {
              const Icon = moduleIcons[m.slug] ?? BookOpen;
              return (
                <Link
                  key={m.slug}
                  to={m.href}
                  className="group card-elev p-6 flex flex-col hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] transition"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">{m.num}</span>
                  </div>
                  <h3 className="font-display text-xl text-ink leading-snug">{m.title}</h3>
                  <div className="mt-1 text-xs font-medium text-accent-foreground bg-highlight/60 border border-accent/30 rounded px-2 py-0.5 self-start">
                    {m.tag}
                  </div>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed flex-1">{m.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Open <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24">
        <div className="chip mb-3">Where to find what</div>
        <h2 className="font-display text-4xl md:text-5xl text-ink max-w-3xl">Instructions — a guided route through the material</h2>
        <p className="mt-4 text-foreground/75 max-w-2xl">Not sure where to start? Follow the four steps below in order, or jump directly to the section that matches your role.</p>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {[
            { step: "01", title: "Start with the framework", body: "Read Tables 6.1 (WK1–WK9), 6.2 (WP1–WP7) and 6.3 (EA1–EA5) plus the twelve Program Outcomes. These are the definitions everything else references.", to: "/framework", cta: "Framework tables" },
            { step: "02", title: "Understand the criteria", body: "The BAETE Accreditation Criteria v3.0 describes the nine areas your program will be evaluated against — PEOs, POs & assessment, curriculum, industry, CQI, students, faculty, governance and facilities.", to: "/criteria", cta: "Accreditation criteria" },
            { step: "03", title: "Design outcomes & assessment", body: "Module 3 covers Bloom's taxonomy, SMART course outcomes, learning domains and CO assessment for theory and lab courses. Module 5 defines complex engineering problems and activities.", to: "/module-3", cta: "Module 3 · Teaching & assessment" },
            { step: "04", title: "Close the loop", body: "Module 4 covers Continuous Quality Improvement — the feedback, analysis and action loop. Module 6 shows how to compute CO, PO and PEO attainment and build the CQI cycle.", to: "/module-4", cta: "Module 4 · CQI" },
          ].map((s) => (
            <div key={s.step} className="card-elev p-6 flex gap-5">
              <div className="font-display text-4xl text-accent leading-none">{s.step}</div>
              <div className="flex-1">
                <h3 className="font-display text-xl text-ink">{s.title}</h3>
                <p className="text-sm text-foreground/75 mt-1.5 leading-relaxed">{s.body}</p>
                <Link to={s.to} className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  <MapPin className="h-3.5 w-3.5" /> {s.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
