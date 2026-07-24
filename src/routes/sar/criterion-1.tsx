import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-1")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 1 — Program Educational Objectives — OBE Training" },
      { name: "description", content: "SAR template Criterion 1: Mission/Vision, PEOs, consistency with mission, and process for measuring PEO attainment." },
    ],
  }),
  component: Criterion1,
});

function Criterion1() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-1" />
      <PageHeader eyebrow="SAR · Criterion 1" title="Program Educational Objectives" lead="ACC-TMP-04-04-V3.0 — what the SAR must state under Criterion 1, in full." />

      <Section eyebrow="1.1" title="Mission and Vision Statement">
        <BulletList items={[
          "State the institution's vision and mission.",
          "State the vision and mission of the department/faculty/school offering the program.",
          "Indicate how the mission statements of the institution and the department are aligned.",
        ]} />
      </Section>

      <Section eyebrow="1.2" title="Program Educational Objectives">
        <BulletList items={[
          "State the program educational objectives.",
          "Describe the process of establishing the program educational objectives and stakeholders consulted, including industry, during the development of PEOs.",
          "List the program stakeholders. Describe how the program educational objectives meet the needs of the program stakeholders (e.g., faculty members, alumni, and employers of the program's graduates).",
          "Indicate how the program educational objectives are published and disseminated to various stakeholders.",
          "Indicate how the program educational objectives are realistic within the context of available resources.",
        ]} />
      </Section>

      <Section eyebrow="1.3" title="Consistency of the Program Educational Objectives with the Mission">
        <InfoCard>
          <p>Describe how the program educational objectives are consistent with the Mission of the Institution or Department offering the program.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="1.4" title="Process for measurement of attainment of the Program Educational Objectives">
        <BulletList items={[
          "Describe the process of tracking the stakeholders (e.g., graduates and employers) and measuring the attainment of program educational objectives.",
          "Describe the assessment methods and tools, attainment criteria, etc., for each objective.",
          "Provide a summary of PEO attainment results. Include evidence and documents in the Annexure.",
        ]} />
        <div className="mt-6">
          <InfoCard tone="accent" title="Annexure C">
            <p>Provide the documentation supporting the claims under Criterion 1 in <strong>Annexure C</strong>.</p>
          </InfoCard>
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/criteria", label: "Criterion 5.1 in the Accreditation Criteria", desc: "The three required sub-criteria this SAR chapter must evidence." },
        { to: "/module-6", label: "Module 6 · Outcome Attainment", desc: "How PEO attainment is measured via graduate/employer surveys." },
      ]} />
    </>
  );
}
