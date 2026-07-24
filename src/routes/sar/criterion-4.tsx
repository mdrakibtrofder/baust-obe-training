import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-4")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 4 — Interactions with the Industry — OBE Training" },
      { name: "description", content: "SAR template Criterion 4: industry participation in curriculum design/review, and students' opportunities to gain industrial experience." },
    ],
  }),
  component: Criterion4,
});

function Criterion4() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-4" />
      <PageHeader eyebrow="SAR · Criterion 4" title="Interactions with the Industry" lead="ACC-TMP-04-04-V3.0 — §4.1 and §4.2, in full." />

      <Section eyebrow="4.1" title="Process for Industry Participation in Curriculum Design and Review">
        <BulletList items={[
          "Explain how industrial participation is ensured in establishing, updating, and improving the objectives, outcomes, and curriculum to make these relevant to the industry's needs.",
          "If there is an industrial advisory panel, list the names, designations and professional qualifications of the members of the program/department's industrial advisory panel. Indicate how the IAP broadly covers all relevant industry representatives. Describe the IAP's role in the curriculum design and review.",
          "If the alumni association exists, describe its role in the curriculum design and review.",
          "Comment on the effectiveness and sustainability of the entire process.",
        ]} />
      </Section>

      <Section eyebrow="4.2" title="Students' Opportunities to Gain Industrial Experience">
        <BulletList items={[
          "State whether the students in the program are required to perform an industrial internship. If yes, describe the nature and the duration of the internship. Explain how student performance during the internship is assessed.",
          "State whether the industry is engaged in final-year design projects or other design projects. If yes, provide details regarding the industry's involvement in selecting the project topic, supporting activities, and providing an assessment. Provide relevant evidence.",
          "State whether the students in the program are required to visit relevant industries. If yes, provide details regarding the nature of such visits. Explain how the industrial visit supports students gaining industrial exposure.",
          "State any other activities the program uses to provide students with the opportunity to obtain industrial experience. Provide relevant evidence.",
        ]} />
        <div className="mt-6">
          <InfoCard tone="accent" title="Annexure G">
            <p>Provide the documentation supporting the claims under Criterion 4 in <strong>Annexure G</strong>.</p>
          </InfoCard>
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/criteria", label: "Criterion 5.4 in the Accreditation Criteria", desc: "The two required sub-criteria this SAR chapter must evidence." },
      ]} />
    </>
  );
}
