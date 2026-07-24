import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-5")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 5 — Continuous Quality Improvement — OBE Training" },
      { name: "description", content: "SAR template Criterion 5: quality assurance system, student feedback, stakeholder feedback, and the three CQI loops (PEO, PO, Course/Curriculum)." },
    ],
  }),
  component: Criterion5,
});

function Criterion5() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-5" />
      <PageHeader eyebrow="SAR · Criterion 5" title="Continuous Quality Improvement" lead="ACC-TMP-04-04-V3.0 — §5.1 through §5.4.3, in full." />

      <Section eyebrow="5.1" title="Quality Assurance System">
        <InfoCard>
          <p>Describe the quality assurance system that the program has under an institutional framework. Mention its organogram, the name and qualifications of the person occupying each position, the terms of reference of the system, the budget, and the activities conducted. Describe how the quality assurance system's activities support the program in continuous improvement.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="5.2" title="Feedback on Student's Academic Performance">
        <InfoCard>
          <p>Describe the process of providing continuous feedback to students regarding their academic performance. Describe measures that are in place to help academically weaker students.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="5.3" title="Stakeholders' Feedback">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="5.3.1 · Feedback from Students">
            <p>Describe the process of collecting feedback from students. Indicate how the gathered feedback is used in continuous improvement.</p>
          </InfoCard>
          <InfoCard title="5.3.2 · Feedback from Faculty Members">
            <p>Describe the process of collecting feedback from Faculty Members. Indicate how the gathered feedback is used in continuous improvement.</p>
          </InfoCard>
          <InfoCard title="5.3.3 · Feedback from Alumni">
            <p>Describe the process of collecting feedback from program Alumni. Indicate how the gathered feedback is used in continuous improvement.</p>
          </InfoCard>
          <InfoCard title="5.3.4 · Feedback from Employers">
            <p>Describe the process of collecting feedback from the employers of the program graduates. Indicate how the gathered feedback is used in continuous improvement.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="5.4" title="CQI Loops">
        <div className="space-y-5">
          <InfoCard title="5.4.1 · CQI Loop for PEO">
            <BulletList items={[
              "Describe the CQI processes for PEOs.",
              "Discuss how various stakeholders' evaluation results and feedback are systematically utilized to improve the PEOs continuously.",
              "Provide copies of documents (survey results, analysis reports, meeting minutes) to justify each statement.",
            ]} />
          </InfoCard>
          <InfoCard title="5.4.2 · CQI Loop for PO">
            <BulletList items={[
              "Describe the CQI processes for POs. Discuss how the results of direct and indirect assessments, including feedback from various stakeholders, are systematically utilized to improve the PO attainments continuously.",
              "Provide copies of documents (survey results, assessment and analysis reports, meeting minutes, etc.) to justify each statement.",
            ]} />
          </InfoCard>
          <InfoCard title="5.4.3 · CQI Loop for Courses and Curriculum">
            <p>Describe the CQI processes for courses and curriculum. Discuss how various stakeholders' assessment results and feedback are systematically utilized to continuously improve the COs, their attainments, and the curriculum. To justify each statement, provide copies of documents (survey results, assessment and analysis reports, meeting minutes).</p>
          </InfoCard>
        </div>
        <div className="mt-6">
          <InfoCard tone="accent" title="Annexure H">
            <p>Provide the documentation supporting the claims under Criterion 5 in <strong>Annexure H</strong>.</p>
          </InfoCard>
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/module-4", label: "Module 4 · Continuous Quality Improvement", desc: "The full CQI framework — stakeholders, components, and closing the loop." },
        { to: "/module-6", label: "Module 6 · Outcome Attainment", desc: "How CO/PO/PEO CQI loops connect to attainment measurement." },
        { to: "/criteria", label: "Criterion 5.5 in the Accreditation Criteria", desc: "The six required sub-criteria this SAR chapter must evidence." },
      ]} />
    </>
  );
}
