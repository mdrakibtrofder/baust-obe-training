import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, RelatedPages } from "@/components/site/layout";
import { InfoCard } from "@/components/site/data-blocks";
import { poIndicators, poIndicatorsReference } from "@/lib/po-indicators";

export const Route = createFileRoute("/po-indicators")({
  head: () => ({
    meta: [
      { title: "PO Indicators (ACC-MAN-02-01) — OBE Training" },
      { name: "description", content: "List of a Suggested Sample PO Indicator — BAETE ACC-MAN-02-01, Version 1.0 — Program Outcomes a–l with all sub-indicators verbatim." },
      { property: "og:title", content: "PO Indicators — BAETE ACC-MAN-02-01" },
      { property: "og:description", content: "Sample PO performance indicators (a1…l2) mapped to Knowledge Profile attributes K1–K9." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PO Indicators — BAETE ACC-MAN-02-01" },
      { name: "twitter:description", content: "Sample PO performance indicators for the twelve Program Outcomes." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="BAETE · ACC-MAN-02-01"
        title="PO Indicators (Version 1.0)"
        lead="List of a Suggested Sample PO Indicator — every Program Outcome (a–l) with the recommended performance indicators, mapped to Knowledge Profile attributes K1–K9."
      />

      <Section>
        <div className="grid gap-4">
          {poIndicators.map((row) => (
            <div key={row.po} className="card-elev p-6 grid md:grid-cols-[1fr_1.4fr] gap-6">
              <div>
                <div className="inline-flex items-center justify-center min-w-[44px] px-3 py-1.5 rounded-md text-sm font-bold bg-primary text-primary-foreground">
                  {row.po}
                </div>
                <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{row.text}</p>
              </div>
              <div>
                <div className="chip mb-3">Performance Indicators</div>
                <ul className="space-y-2">
                  {row.indicators.map((ind) => (
                    <li key={ind} className="text-sm text-foreground/85 leading-relaxed flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <InfoCard tone="muted">
            <p><em>{poIndicatorsReference}</em></p>
          </InfoCard>
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/framework", label: "Engineering Accreditation Framework", desc: "Tables 6.1 (WK), 6.2 (WP), 6.3 (EA) and the twelve Program Outcomes." },
        { to: "/appendices", label: "Appendices — v2.2 → v3.0 & Bloom's Taxonomy", desc: "Version-history comparison and the full Revised Bloom's Action Verbs table." },
        { to: "/criteria", label: "Accreditation Criteria v3.0", desc: "The nine BAETE accreditation criteria." },
      ]} />
    </>
  );
}
