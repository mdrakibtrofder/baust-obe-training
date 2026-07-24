import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Section, RelatedPages } from "@/components/site/layout";
import { InfoCard, DataTable } from "@/components/site/data-blocks";
import {
  appendixIntro, poVersionChanges, wkVersionChanges, wpVersionChanges, eaVersionChanges,
  bloomIntro, bloomDomains, cognitiveIntro, cognitiveTable, affectiveIntro, affectiveTable,
  psychomotorIntro, psychomotorTable, referencesList,
} from "@/lib/appendices-data";
import { bloomActionVerbs } from "@/lib/module-extras";

export const Route = createFileRoute("/appendices")({
  head: () => ({
    meta: [
      { title: "Appendices · Version 2.2 → 3.0 and Bloom's Taxonomy — OBE Training" },
      { name: "description", content: "Appendix A (Version 2.2 → 3.0 comparison of POs, WK, WP, EA) and Appendix B (Bloom's Taxonomy cognitive/affective/psychomotor tables + Revised Action Verbs) from the BAETE Accreditation Criteria." },
      { property: "og:title", content: "Appendices — v2.2 → v3.0 & Bloom's Taxonomy" },
      { property: "og:description", content: "Version-history comparison and the full Revised Bloom's Action Verbs table." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Appendices — v2.2 → v3.0 & Bloom's" },
      { name: "twitter:description", content: "PO/WK/WP/EA changes and the full Revised Bloom's Action Verbs." },
    ],
  }),
  component: Page,
});

const tabs = [
  { id: "a", label: "Appendix A · v2.2 → v3.0" },
  { id: "b", label: "Appendix B · Bloom's Taxonomy" },
  { id: "verbs", label: "Revised Action Verbs" },
  { id: "ref", label: "References" },
] as const;

function Page() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("a");
  return (
    <>
      <PageHeader
        eyebrow="BAETE Accreditation Criteria · Appendices"
        title="Appendices A · B · References"
        lead="Version-history comparison from V2.2 to V3.0 (POs, WK, WP, EA) and the full Bloom's Taxonomy reference — reproduced verbatim from ACC-TMP-04-04-V3.0."
      />

      <Section>
        <div className="flex gap-2 flex-wrap mb-8 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "a" && (
          <div className="space-y-10">
            <InfoCard tone="accent"><p>{appendixIntro}</p></InfoCard>

            <div>
              <h2 className="font-display text-2xl text-ink mb-4">Program Outcomes (POs) and Assessment</h2>
              <div className="space-y-3">
                {poVersionChanges.map((r) => (
                  <div key={r.label} className="card-elev p-5">
                    <div className="font-display text-base text-ink">{r.label}</div>
                    <div className="mt-3 grid md:grid-cols-2 gap-4">
                      <div><div className="chip mb-2">Version 2.2</div><p className="text-sm text-foreground/80 leading-relaxed">{r.v22}</p></div>
                      <div><div className="chip mb-2">Version 3.0</div><p className="text-sm text-foreground/80 leading-relaxed">{r.v30}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink mb-4">Knowledge and Attitude Profile</h2>
              <DataTable headers={["Code","Version 2.2 (K)","Version 3.0 (WK)"]} rows={wkVersionChanges.map((r) => [r.code, r.v22, r.v30])} />
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink mb-4">Range of Complex Engineering Problem Solving</h2>
              <DataTable headers={["Attribute","Version 2.2 (P1–P7)","Version 3.0 (WP1–WP7)"]} rows={wpVersionChanges.map((r) => [r.attribute, r.v22, r.v30])} />
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink mb-4">Range of Complex Engineering Activities</h2>
              <DataTable headers={["Attribute","Version 2.2 (A1–A5)","Version 3.0 (EA1–EA5)"]} rows={eaVersionChanges.map((r) => [r.attribute, r.v22, r.v30])} />
            </div>
          </div>
        )}

        {tab === "b" && (
          <div className="space-y-10">
            <InfoCard>
              <p>{bloomIntro}</p>
              <ul className="mt-3 space-y-1">
                {bloomDomains.map((d) => (
                  <li key={d.name} className="text-sm"><strong>{d.name}:</strong> {d.desc}</li>
                ))}
              </ul>
            </InfoCard>

            <div>
              <h2 className="font-display text-2xl text-ink mb-2">Cognitive Domain</h2>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">{cognitiveIntro}</p>
              <DataTable
                headers={["Category","Examples","Key Words (Verbs)","Technologies for Learning"]}
                rows={cognitiveTable.map((r) => [r.cat, r.examples, r.keyWords, r.technologies])}
              />
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink mb-2">Affective Domain</h2>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">{affectiveIntro}</p>
              <DataTable
                headers={["Category","Examples","Key Words (verbs)"]}
                rows={affectiveTable.map((r) => [r.cat, r.examples, r.keyWords])}
              />
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink mb-2">Psychomotor Domain</h2>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">{psychomotorIntro}</p>
              <DataTable
                headers={["Category","Examples","Key Words (verbs)"]}
                rows={psychomotorTable.map((r) => [r.cat, r.examples, r.keyWords])}
              />
            </div>
          </div>
        )}

        {tab === "verbs" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Revised Bloom's Taxonomy Action Verbs</h2>
            <div className="card-elev overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-2 border-b border-border">
                    {bloomActionVerbs.headers.map((h, i) => (
                      <th key={i} className="text-left px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold align-top">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    {bloomActionVerbs.definition.map((c, i) => (
                      <td key={i} className={`px-4 py-3 align-top leading-relaxed ${i === 0 ? "font-semibold text-ink" : "text-foreground/85"}`}>{c}</td>
                    ))}
                  </tr>
                  <tr>
                    {bloomActionVerbs.verbs.map((c, i) => (
                      <td key={i} className={`px-4 py-3 align-top leading-relaxed ${i === 0 ? "font-semibold text-ink" : "text-foreground/85"}`}>{c}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "ref" && (
          <div>
            <h2 className="font-display text-2xl text-ink mb-4">References</h2>
            <ol className="space-y-2 list-decimal list-inside">
              {referencesList.map((r, i) => (
                <li key={i} className="text-sm text-foreground/85 leading-relaxed">
                  {/^https?:\/\//.test(r) ? <a href={r} target="_blank" rel="noopener noreferrer" className="text-primary underline">{r}</a> : r}
                </li>
              ))}
            </ol>
          </div>
        )}
      </Section>

      <RelatedPages items={[
        { to: "/framework", label: "Engineering Accreditation Framework", desc: "Current-version WK, WP, EA tables + POs." },
        { to: "/criteria", label: "Accreditation Criteria v3.0", desc: "The nine BAETE accreditation criteria." },
        { to: "/po-indicators", label: "PO Indicators", desc: "Sample performance indicators for each PO." },
      ]} />
    </>
  );
}
