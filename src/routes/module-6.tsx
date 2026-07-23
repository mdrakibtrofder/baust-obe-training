import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/layout";
import { InfoCard, DataTable, BulletList } from "@/components/site/data-blocks";

export const Route = createFileRoute("/module-6")({
  head: () => ({
    meta: [
      { title: "Module 6 · Outcome Attainment — OBE Training" },
      { name: "description", content: "Measuring CO, PO and PEO attainment and closing the CQI loop per the BAETE Manual and SAR Template." },
      { property: "og:title", content: "Module 6 · Outcome Attainment" },
      { property: "og:description", content: "Direct and indirect assessment methods, CO/PO/PEO attainment thresholds, and CQI." },
    ],
  }),
  component: Module6,
});

function Module6() {
  return (
    <>
      <PageHeader
        eyebrow="Module 6"
        title="Outcome Attainment"
        lead="Hands-on Training on Outcome-Based Education (OBE) — measuring attainment of Course Outcomes, Program Outcomes and Program Educational Objectives, and closing the CQI loop."
      />

      <Section eyebrow="Main components of OBE" title="CO · PO · PEO">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="Course Outcomes (CO)"><p>COs address the abilities to be attained by students upon completion of a course.</p></InfoCard>
          <InfoCard title="Program Outcomes (PO)"><p>POs describe what students are expected to know and be able to perform by the time of graduation.</p></InfoCard>
          <InfoCard title="Program Educational Objectives (PEO)"><p>PEOs address graduates' attainment around 3–5 years after graduation.</p></InfoCard>
        </div>
      </Section>

      <Section eyebrow="Where attainment is measured" title="Attainment of outcomes">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="CO Attainment"><p>Measured at course level using direct assessment and, where useful, surveys.</p></InfoCard>
          <InfoCard title="PO Attainment"><p>Measured at program level by aggregating CO/assessment evidence across selected courses.</p></InfoCard>
          <InfoCard title="PEO Attainment"><p>Measured through graduate and employer feedback after graduation.</p></InfoCard>
        </div>
      </Section>

      <Section eyebrow="From the manual / SAR template" title="Directives on outcome attainment">
        <div className="grid gap-4">
          <InfoCard tone="muted">
            <p><strong>SAR Template, ACC-TMP-04-04-V3-F, 2.4 Assessment of Course Outcomes:</strong> Describe how the attainment of COs is assessed in each course, including rubrics where applicable. Assessment processes, attainment criteria, scale, and expected attainment level should be clearly stated.</p>
          </InfoCard>
          <InfoCard tone="muted">
            <p><strong>Accreditation Criteria, ACC-MAN-02-v3-F, 5.2 Program Outcomes and Assessment:</strong> The program must demonstrate, using direct methods, that students attain all POs by graduation.</p>
          </InfoCard>
          <InfoCard tone="muted">
            <p><strong>Accreditation Criteria, ACC-MAN-02-v3-F, 5.1 Program Educational Objectives:</strong> The program must demonstrate an established system to compile PEO attainment including a mechanism for tracking and to obtain feedback from graduates and their employers.</p>
          </InfoCard>
          <InfoCard tone="muted">
            <p><strong>SAR Template, ACC-TMP-04-04-V3-F, 5.4.2 CQI Loop for PO:</strong> Describe the CQI processes for POs. Discuss how direct and indirect assessment results, including feedback from stakeholders, are systematically used. Evidence should show that PO attainment is continuously improved.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Assessment methods" title="Direct and indirect">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Direct methods"><p>Direct assessment methods in courses.</p></InfoCard>
          <InfoCard title="Indirect methods"><p>Indirect assessment methods through surveys and feedback.</p></InfoCard>
        </div>
        <div className="mt-6">
          <h3 className="font-display text-xl text-ink mb-3">Assessment through surveys</h3>
          <DataTable
            headers={["Assessment Area", "Typical Survey/Feedback", "Purpose"]}
            rows={[
              ["CO assessment", "End-of-course student surveys · Need to update course evaluation questionnaire", "Find gaps in course delivery and assessment"],
              ["PO assessment", "Exit survey for all graduating students · Questions to address all 12 POs", "Support program-level attainment evidence"],
              ["PEO assessment", "Graduate and employer surveys · Questions must address all PEO statements · Graduates 3-5 years after graduation", "Assess long-term graduate outcomes"],
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="CO assessment" title="Which courses should be considered?">
        <BulletList items={[
          "Assessment of CO attainment and assessment of grades in a course are different.",
          "CO assessment in all courses? May be for selective section in case of multiple sections.",
          "May be in selective semester/trimester? Assessment in selective core courses?",
          "Even in case of sampling, CO attainment in all courses is required for course-level CQI.",
        ]} />
        <div className="mt-5">
          <InfoCard tone="muted">
            <p><strong>SAR Template, ACC-TMP-04-04-V3-F, 5.4.3 CQI Loop for Courses and Curriculum:</strong> Describe the CQI processes for courses and curriculum. Discuss how different stakeholders' assessment results and feedback are used to continuously improve COs, attainments, and curriculum.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Theory course example" title="Example CO-PO mapping (Electronics)">
        <DataTable
          headers={["CO", "Description", "PO", "K/P/A", "Bloom Domain & level", "Delivery Methods", "Assessment Tools"]}
          rows={[
            ["CO1", "Explain behavior and functionality of basic electronic devices and circuits with those devices.", "PO1", "K3", "Cognitive / Understand", "Lecture · Problem solving · Group activities", "Quiz · Class Test · Exam · Assignment"],
            ["CO2", "Determine parameters for electronic circuits indicative of performance.", "PO2", "K3, P1", "Cognitive / Apply", "—", "—"],
            ["CO3", "Apply concepts of electronic devices and Op-Amps to design/construct circuits.", "PO3", "K5, P1, P2, P3", "Cognitive / Apply", "—", "—"],
            ["CO4", "Interpret frequency response of a circuit with Bode plots.", "PO1", "K3", "Cognitive / Apply", "—", "—"],
          ]}
        />
        <div className="mt-6">
          <h3 className="font-display text-xl text-ink mb-3">Example of assessments in a theory course</h3>
          <DataTable
            headers={["#", "Assessment Item", "Marks", "CO Coverage"]}
            rows={[
              ["1", "Attendance", "5%", "—"],
              ["2", "Class test", "15%", "—"],
              ["3", "Assignment", "15%", "CO3"],
              ["4", "Mid-term exam", "30%", "CO1, CO2, CO3, CO4"],
              ["5", "Final exam", "35%", "CO1, CO2, CO3, CO4"],
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Rubrics" title="Use of rubrics">
        <p className="text-sm text-foreground/85 mb-4">Rubrics are required for the following assessments:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["Report","Viva","Individual / group project","Project report","Weekly programming / hardware assignments"].map((r) => (
            <div key={r} className="card-elev p-4 text-sm font-medium text-ink text-center">{r}</div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Attainment thresholds" title="Assessment of CO attainments">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Criterion 1: Student Level">
            <p>Attainment criteria and scale must be defined. Example: a CO is attained for an individual student when they score above the defined threshold on the assessment items mapped to that CO.</p>
          </InfoCard>
          <InfoCard title="Criterion 2: Course Level">
            <p>If 50% (set by Program) of students in a course attain a CO, that CO is attained for the course.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="PO attainment" title="Demonstrating CEP & CEA">
        <BulletList items={[
          "CEP is already embedded in the definition of some POs.",
          "For POs with CEP/CEA in their definition, assessment tools used must be demonstrated as CEP/CEA through proper mappings.",
          "Present a summary of results obtained after the assessment and analysis to demonstrate the extent to which each PO is being attained.",
        ]} />
        <div className="mt-6">
          <h3 className="font-display text-xl text-ink mb-3">Before assessing PO attainment</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <InfoCard title="Cohort & courses">
              <BulletList items={[
                "Fix the definition of cohort.",
                "Third-year and final-year courses are usually more suitable.",
              ]} />
            </InfoCard>
            <InfoCard title="Mapping & rubrics">
              <BulletList items={[
                "CO-PO mapping must be clear.",
                "Rubrics are very important, especially if a single assessment tool is used for multiple POs (e.g., a report used to assess multiple POs).",
              ]} />
            </InfoCard>
          </div>
        </div>
      </Section>

      <Section eyebrow="Example" title="PO attainment threshold">
        <InfoCard tone="accent">
          <p>PO attainment threshold must be defined. % of marks obtained in different COs is calculated considering different levels — a higher level contributes more to calculating %.</p>
          <p className="mt-2">If the PO assessment score is greater than 50%, the PO is attained. The actual criterion should be set by the program.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="PEO attainment" title="Assessing PEO">
        <BulletList items={[
          "PEOs address graduates' attainment around 3–5 years after graduation.",
          "Use graduate and employer surveys addressing all PEO statements.",
          "If there is no OBE-based graduating batch, PEO can be assessed with a non-OBE batch following BAETE guidance.",
        ]} />
      </Section>

      <Section eyebrow="Continuous Quality Improvement" title="Close the loop">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Establish a CQI cycle">
            <BulletList items={[
              "Take feedback from stakeholders.",
              "Analyze feedback.",
              "Decide actions to be taken.",
              "Make necessary changes.",
            ]} />
          </InfoCard>
          <InfoCard tone="accent" title="Regular practice">
            <p>The program must complete the CQI loops periodically. CQI loops should be a regular practice — not something done only before an accreditation visit.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Summary" title="What matters most">
        <BulletList items={[
          "The program needs to assess attainment of COs in each course.",
          "PO attainment is aggregated from CO evidence across selected courses.",
          "PEO attainment relies on longitudinal graduate and employer feedback.",
          "Assessment of outcome attainment is vital for CQI.",
        ]} />
      </Section>
    </>
  );
}
