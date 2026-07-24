import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/")({
  head: () => ({
    meta: [
      { title: "SAR Template Overview · ACC-TMP-04-04-V3.0 — OBE Training" },
      { name: "description", content: "Self-assessment Report (SAR) template overview, preparation guidelines, and Volume 1/Volume 2 structure per ACC-TMP-04-04-V3.0." },
      { property: "og:title", content: "SAR Template Overview" },
      { property: "og:description", content: "Guidelines for preparing the SAR, supplemental documents, and how Volume 1 and Volume 2 are organized." },
    ],
  }),
  component: SarOverview,
});

function SarOverview() {
  return (
    <>
      <SarCriterionNav current="/sar" />
      <PageHeader
        eyebrow="BAETE · ACC-TMP-04-04-V3.0"
        title="Self-assessment Report (SAR) Template"
        lead="The SAR template a program uses to demonstrate compliance with the nine BAETE accreditation criteria — organized as Volume 1 (General Information, Eligibility, Criteria 1–9, Certificate of Compliance) and Volume 2 (Annexures)."
      />

      <Section eyebrow="Guidelines" title="Preparing the SAR">
        <InfoCard tone="muted">
          <p>The completed SAR must describe how the institution and the program comply with the BAETE benchmark in each criterion.</p>
        </InfoCard>
        <div className="mt-6">
          <h3 className="font-display text-xl text-ink mb-3">The following points should be noted while preparing the SAR</h3>
          <BulletList items={[
            "The data and the information provided in the SAR must be adequate and supplemented by comments and discussions that will allow the evaluation team to perform a preliminary evaluation of the program based on the SAR.",
            <>For any criteria and sub-criteria, the SAR is generally expected to address the following three questions with data, examples of cases and other supporting information to justify the assertions:
              <ol className="mt-2 ml-4 list-[lower-alpha] space-y-1">
                <li>Is there a policy/process in place?</li>
                <li>If 'yes', is the policy/process in practice?</li>
                <li>Does any improvement mechanism exist for the policy/process?</li>
              </ol>
              The challenges faced and how these were overcome during the enactment, implementation and improvement of each policy and process should also be described.
            </>,
            "The SAR must proactively and unambiguously identify the deviation from its policies where and when one exists.",
          ]} />
        </div>
      </Section>

      <Section eyebrow="Required attachments" title="Supplemental documents">
        <p className="text-sm text-foreground/80 mb-4">The following documents must be provided in the Annexure:</p>
        <BulletList items={[
          "Latest copy of the prospectus and a copy of the latest academic calendar followed by the program under evaluation.",
          "A copy of the approval letter from the appropriate authority to establish the institution.",
          "Copy of the approval letter from the appropriate authority to establish the program.",
          "Copy of statutes/academic ordinances or equivalent documents.",
        ]} />
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <InfoCard tone="warn" title="Length limit">
            <p>The SAR should not exceed <strong>150 pages</strong>, excluding annexures.</p>
          </InfoCard>
          <InfoCard tone="accent" title="Submission">
            <p>The SAR must be submitted through the Online Accreditation Management System of BAETE (<a className="underline" href="https://ams.baetebangladesh.org/" target="_blank" rel="noreferrer">ams.baetebangladesh.org</a>). No hard copies are required.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Structure" title="General Information, Eligibility & Renewal sections">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="General Information">
            <p>Program title, department/faculty/institution names, ownership status, contact information, university affiliation, year established, year program began, and details of any prior accreditation.</p>
          </InfoCard>
          <InfoCard title="Eligibility for Accreditation">
            <p>Eight yes/no eligibility questions (institution approval, program approval, ≥4-year duration, ≥12 years of prior schooling for admission, OBE approach in use, ≥130 credit hours, multiple program versions, unique graduate identification) that gate whether an application may proceed.</p>
          </InfoCard>
          <InfoCard title="For Renewal of Accreditation Only">
            <p>Lists deficiencies, weaknesses and concerns identified during the most recent evaluation, the remedial actions taken for each, and requires the most recent accreditation certificate and final BAETE statement as evidence.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Volume 1" title="Table of Contents — Criteria 1 through 9">
        <DataTable
          headers={["Criterion", "Title", "Page (source)"]}
          rows={[
            ["1", "Program Educational Objectives", "6"],
            ["2", "Program Outcomes and Assessment", "7"],
            ["3", "Curriculum and Teaching-Learning Processes", "11"],
            ["4", "Interactions with the Industry", "13"],
            ["5", "Continuous Quality Improvement", "14"],
            ["6", "Students", "16"],
            ["7", "Faculty", "18"],
            ["8", "Governance, Finance and Safety", "20"],
            ["9", "Academic Facilities and Technical Support", "24"],
          ]}
        />
        <p className="mt-4 text-sm text-muted-foreground">Followed by the Certificate of Compliance (page 26) and Volume 2: Annexures.</p>
      </Section>

      <RelatedPages items={[
        { to: "/criteria", label: "Accreditation Criteria v3.0", desc: "The nine criteria this SAR template is built to evidence." },
        { to: "/framework", label: "Framework tables", desc: "WK1–WK9, WP1–WP7, EA1–EA5 and the 12 POs referenced throughout the SAR." },
        { to: "/sar/criterion-1", label: "Start with Criterion 1", desc: "Program Educational Objectives — the first SAR chapter." },
      ]} />
    </>
  );
}
