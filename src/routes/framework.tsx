import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Section } from "@/components/site/layout";
import { AttributeTable } from "@/components/site/data-blocks";
import { knowledgeProfile, complexProblems, complexActivities, programOutcomes } from "@/lib/obe-data";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: "Engineering Accreditation Framework — OBE Training" },
      { name: "description", content: "Tables 6.1, 6.2, 6.3 and Program Outcomes — the definitions the BAETE framework references." },
      { property: "og:title", content: "Engineering Accreditation Framework" },
      { property: "og:description", content: "Knowledge profile (WK), complex problem solving (WP), complex activities (EA) and the 12 Program Outcomes." },
    ],
  }),
  component: FrameworkPage,
});

const tabs = [
  { id: "wk", label: "Table 6.1 · Knowledge (WK)" },
  { id: "wp", label: "Table 6.2 · Problem Solving (WP)" },
  { id: "ea", label: "Table 6.3 · Activities (EA)" },
  { id: "po", label: "Program Outcomes (PO)" },
] as const;

function FrameworkPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("wk");

  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Engineering Accreditation Framework"
        lead="The four building blocks referenced across every BAETE criterion: the knowledge profile (WK1–WK9), the range of complex engineering problem solving (WP1–WP7), the range of complex engineering activities (EA1–EA5), and the twelve Program Outcomes."
      />

      <Section>
        <div className="flex gap-2 flex-wrap mb-8 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "wk" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl text-ink">Table 6.1 · Knowledge and Attitude Profile</h2>
              <p className="text-sm text-muted-foreground mt-2">Click any row to expand.</p>
            </div>
            <AttributeTable
              headers={["Code", "Attribute"]}
              rows={knowledgeProfile}
              accent="primary"
            />
          </div>
        )}

        {tab === "wp" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl text-ink">Table 6.2 · Range of Complex Engineering Problem Solving</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Complex Engineering Problems have characteristics WP1 and some or all of WP2 to WP7.
              </p>
            </div>
            <AttributeTable
              headers={["Code", "Attribute"]}
              rows={complexProblems}
              accent="chart-3"
            />
          </div>
        )}

        {tab === "ea" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl text-ink">Table 6.3 · Range of Complex Engineering Activities</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Complex activities mean (engineering) activities or projects that have some or all of the following characteristics.
              </p>
            </div>
            <AttributeTable
              headers={["Code", "Attribute"]}
              rows={complexActivities}
              accent="accent"
            />
          </div>
        )}

        {tab === "po" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl text-ink">Program Outcomes</h2>
              <p className="text-sm text-muted-foreground mt-2">
                The twelve graduate attributes a BAETE-accredited program must demonstrate its students attain by graduation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {programOutcomes.map((po) => (
                <div key={po.code} className="card-elev p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center justify-center min-w-[54px] px-2 py-1 rounded-md text-xs font-bold tracking-wider bg-primary text-primary-foreground">
                      {po.code}
                    </span>
                    <span className="font-display text-lg text-ink">{po.title}</span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{po.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
