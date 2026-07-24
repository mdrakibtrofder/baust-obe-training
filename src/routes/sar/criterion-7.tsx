import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-7")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 7 — Faculty — OBE Training" },
      { name: "description", content: "SAR template Criterion 7: full-time/part-time faculty rosters, class size, student-teacher ratio, faculty role, professional development, OBE training." },
    ],
  }),
  component: Criterion7,
});

function Criterion7() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-7" />
      <PageHeader eyebrow="SAR · Criterion 7" title="Faculty" lead="ACC-TMP-04-04-V3.0 — §7.1 through §7.7, in full." />

      <Section eyebrow="7.1" title="Full-time Faculty Members">
        <p className="text-sm text-foreground/80 mb-4">Provide a list of full-time faculty members teaching in the program for each semester of the last academic year. Include similar lists for the previous two academic years in the Annexure. State whether the program has sufficient qualified faculty members with relevant areas of specialization to teach all the courses offered.</p>
        <DataTable
          headers={["Name", "Designation", "Area of specialization", "Highest academic degree", "Yrs experience — Teaching", "Yrs experience — Industrial", "Date joined", "Weekly teaching load (hrs)"]}
          rows={[["", "", "", "", "", "", "", ""]]}
        />
        <p className="mt-3 text-sm text-foreground/80">Additionally, provide detailed curriculum vitae for each faculty member in the Annexure. The format of the faculty CV is given in <strong>Annexure J</strong>.</p>
      </Section>

      <Section eyebrow="7.2" title="Part-time Faculty Members">
        <p className="text-sm text-foreground/80 mb-4">Provide a list of part-time faculty members teaching in the program for each semester during the last academic year. Include similar lists for the previous two years in the Annexure.</p>
        <DataTable
          headers={["Name", "Designation", "Area of specialization", "Highest academic degree", "Yrs experience — Teaching", "Yrs experience — Industrial", "Weekly teaching load (hrs)"]}
          rows={[["", "", "", "", "", "", ""]]}
        />
        <p className="mt-3 text-sm text-foreground/80">Additionally, provide detailed CVs in the Annexure. Format is given in <strong>Annexure J</strong>.</p>
      </Section>

      <Section eyebrow="7.3" title="Class Size">
        <InfoCard>
          <p>State the minimum class size (number of students), the maximum class size and the average class size of all the courses/sections offered by the program for each semester during the last three academic years. State whether the class size suits teaching-learning and assessment activities to achieve all the course outcomes. In the Annexure, provide a list of all the courses/sections offered by the program, including the class size and the instructor's name, for each semester during the last three academic years.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="7.4" title="Student-teacher Ratio">
        <InfoCard>
          <p>Calculate the student-teacher ratio of the program for each semester during the last three academic years. Describe in detail the calculation procedure and justify the appropriateness of the adopted calculation model. State whether the student-teacher ratio is suitable for conducting the teaching-learning and assessment activities to achieve all the course outcomes and for adequate interactions between teachers and students outside of class.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="7.5" title="Role of Faculty Members in Coordinating and Improving the Courses">
        <InfoCard>
          <p>Describe in detail the role of the faculty members in establishing course outcomes, selecting appropriate pedagogical and assessment tools, updating course content, and making decisions regarding quality improvements to the program. Attach copies of the minutes of relevant meetings held during the last three academic years in the Annexure to support this assertion.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="7.6" title="Professional Development">
        <p className="text-sm text-foreground/80 mb-4">Summarize to what extent the faculty members are engaged in research, development, and professional activities that promote the attainment of the institutional mission and vision and how students benefit from these activities. The institutional support provided to the faculty members to further enhance academic and professional development should also be mentioned.</p>
        <p className="text-sm text-foreground/80 mb-4">Complete the following table for the full-time faculty members in service in the current semester.</p>
        <DataTable
          headers={["Name", "Designation", "No. journal/conference papers (last 3 yrs)", "No. consulting positions (last 3 yrs)", "Professional society activities (last 1 yr)"]}
          rows={[["", "", "", "", ""]]}
        />
      </Section>

      <Section eyebrow="7.7" title="Training of Faculty Members on Outcome-based Education">
        <InfoCard>
          <p>Provide data on faculty members' training on outcome-based education. Justify how the activities conducted by the program/institutions are adequate for the faculty members to train them in establishing appropriate course outcomes, conducting effective teaching-learning activities, conducting suitable assessments, and measuring outcome achievement.</p>
        </InfoCard>
        <div className="mt-6">
          <InfoCard tone="accent" title="Annexure J / K">
            <p>Provide the documentation supporting the claims under Criterion 7 in <strong>Annexure K</strong> (faculty CVs per §7.1/7.2 go in <strong>Annexure J</strong>).</p>
          </InfoCard>
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/criteria", label: "Criterion 5.7 in the Accreditation Criteria", desc: "The six required sub-criteria this SAR chapter must evidence." },
      ]} />
    </>
  );
}
