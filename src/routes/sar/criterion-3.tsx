import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-3")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 3 — Curriculum and Teaching-Learning Processes — OBE Training" },
      { name: "description", content: "SAR template Criterion 3: program-specific criteria, breadth/depth, course content, flow chart, PEO/CO-PO relations, WK/WP/EA/UN-SDG mapping, teaching-learning and assessment, labs, culminating course." },
    ],
  }),
  component: Criterion3,
});

function Criterion3() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-3" />
      <PageHeader eyebrow="SAR · Criterion 3" title="Curriculum and Teaching-Learning Processes" lead="ACC-TMP-04-04-V3.0 — §3.1 through §3.8.2, in full." />

      <Section eyebrow="3.1" title="Program-specific Criteria">
        <InfoCard><p>Describe how the program satisfies any applicable program criteria.</p></InfoCard>
      </Section>

      <Section eyebrow="3.2" title="Breadth and Depth of the Curriculum">
        <InfoCard><p>Indicate how the breadth and depth of the curriculum are appropriate for solving complex engineering problems.</p></InfoCard>
      </Section>

      <Section eyebrow="3.3" title="Course Content">
        <p className="text-sm text-foreground/80 mb-4">List all courses by subject categories. Subject categories may include engineering, mathematics, natural sciences, computing, humanities, social sciences and other non-engineering courses. Indicate whether these courses are Compulsory or Optional.</p>
        <DataTable
          headers={["Course no. and title", "Credit hours", "Contact hours", "Last three terms offered", "No. of students registered", "Compulsory/Optional"]}
          rows={[["Subject category 1", "", "", "", "", ""], ["Course 1", "", "", "", "", ""], ["Course 2", "", "", "", "", ""], ["…", "", "", "", "", ""], ["Subcategory total", "", "", "", "", ""], ["Subject category 2", "", "", "", "", ""], ["…", "", "", "", "", ""]]}
        />
        <p className="mt-4 text-sm text-foreground/80">Justify the adequacy of the courses of each category and their contents for attaining program outcomes.</p>
        <p className="mt-2 text-sm text-foreground/80">Also, submit the detailed content of each course the program offers, including credit hours, contact hours, prerequisites and a list of the textbooks and reference books in the Annexure. The format of the detailed course content is in <strong>Annexure E</strong> of this template.</p>
      </Section>

      <Section eyebrow="3.4" title="Flow Chart">
        <InfoCard><p>Submit a semester-by-semester flow chart or worksheet that depicts the prerequisite structure of the program's required courses.</p></InfoCard>
      </Section>

      <Section eyebrow="3.5" title="Relation between Program Educational Objectives and Curriculum">
        <InfoCard><p>Describe how the curriculum and teaching-learning process support the attainment of program educational objectives.</p></InfoCard>
      </Section>

      <Section eyebrow="3.6" title="Relation between Course Outcomes and Program Outcomes">
        <InfoCard><p>For each course, present a map of COs and POs. Alternatively, the following information may be presented graphically.</p></InfoCard>
      </Section>

      <Section eyebrow="3.7" title="Knowledge Profile, Complex Engineering Problems, Complex Engineering Activities and UN-SDGs">
        <BulletList items={[
          "Demonstrate, through mapping, how each attribute of the Knowledge Profile (WK1 – WK9) is addressed in the curriculum.",
          "Provide a list of courses where complex engineering problems are included in the teaching-learning and assessment processes. Justify how the problems meet the requirements of complex engineering problems.",
          "Demonstrate how Complex Engineering Activities are incorporated into teaching-learning and assessment.",
          "Demonstrate how various United Nations Sustainable Development Goals (UN-SDGs) are considered in the teaching, learning and assessment.",
        ]} />
      </Section>

      <Section eyebrow="3.8" title="Teaching-learning and Assessment">
        <BulletList items={[
          "Describe the teaching-learning methods and assessment tools used to address complex engineering problems and program outcomes. Indicate how the teaching-learning methods and assessment tools are effective and appropriate.",
          "Describe the process of designing and selecting appropriate assessment tools in different courses. Mention if there is any process (e.g., question moderation) to ensure the effectiveness and appropriateness of the assessment tools.",
        ]} />
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <InfoCard title="3.8.1 · Laboratory Activities">
            <p>State how the program uses lab activities to support the attainment of program outcomes. Provide the list of experiments conducted in each lab course. Justify the appropriateness of the assessment tools used for lab activities.</p>
          </InfoCard>
          <InfoCard title="3.8.1 · Culminating Course(s)">
            <p><em>(Numbered 3.8.1 again in the source template.)</em> Describe the process followed in the culminating course (e.g., final-year design project, capstone project) through which the program prepares its students for engineering practice through a major design experience based on the knowledge and attitudes acquired in earlier coursework and incorporating appropriate engineering standards and design constraints.</p>
          </InfoCard>
        </div>
        <div className="mt-5">
          <InfoCard title="3.8.2 · Alternative Approach">
            <p>If the program plans to prepare the students for engineering practice through any approach other than the final year design or capstone project courses, describe the process in detail, highlighting the appropriateness of the process.</p>
          </InfoCard>
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <InfoCard tone="accent" title="Annexure F">
          <p>Provide the documentation supporting the claims under Criterion 3 in <strong>Annexure F</strong>.</p>
        </InfoCard>
      </div>

      <RelatedPages items={[
        { to: "/framework", label: "Framework · WK/WP/EA tables", desc: "Reference definitions for the §3.7 mapping requirement." },
        { to: "/module-5", label: "Module 5 · CEP & CEA", desc: "Worked examples of embedding WP/EA attributes in coursework." },
      ]} />
    </>
  );
}
