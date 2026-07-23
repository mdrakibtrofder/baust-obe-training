import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/layout";
import { InfoCard, BulletList, StepList } from "@/components/site/data-blocks";

export const Route = createFileRoute("/module-4")({
  head: () => ({
    meta: [
      { title: "Module 4 · Continuous Quality Improvement — OBE Training" },
      { name: "description", content: "CQI as an integral component of OBE — stakeholders, feedback, analysis, records of evidence and closing the loop." },
      { property: "og:title", content: "Module 4 · Continuous Quality Improvement" },
      { property: "og:description", content: "Feedback, analysis and action across CO, PO and PEO." },
    ],
  }),
  component: Module4,
});

function Module4() {
  return (
    <>
      <PageHeader
        eyebrow="Module 4"
        title="Continuous Quality Improvement"
        lead="An ongoing process where achievements are evaluated based on data and stakeholders' feedback to initiate an action plan for improvement."
      />

      <Section eyebrow="Session outcomes" title="What you will gain">
        <BulletList items={[
          "Familiarity with CQI process",
          "Informed knowledge on CQI components",
          "Better preparation for CQI implementation",
          "Better understanding on the action items and planning requirements to close CQI loops",
          "Identification of the key stakeholders involved in the CQI process",
          "Identification of the supporting resources required to make CQI process effective to contribute to OBE implementation",
        ]} />
      </Section>

      <Section eyebrow="Stakeholders" title="Who feeds the CQI loop">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {["Students","Alumni","Faculty members","Employers","Industry Advisory Panel (IAP)","Professional organizations"].map((s) => (
            <div key={s} className="card-elev p-4 text-center">
              <div className="font-display text-lg text-ink">{s}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Components" title="Three components of CQI">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="1. Feedback"><p>Feedback from stakeholders to collect assessment data.</p></InfoCard>
          <InfoCard title="2. Analysis"><p>Analysis of assessment data.</p></InfoCard>
          <InfoCard title="3. Action"><p>Improvement / action plan.</p></InfoCard>
        </div>
      </Section>

      <Section eyebrow="Feedback loops" title="Inputs and feedback across the levels">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="COs">
            <BulletList items={["Feedback from students", "Feedback from course instructors"]} />
          </InfoCard>
          <InfoCard title="POs">
            <BulletList items={["Feedback from graduates", "Feedback from course instructors"]} />
          </InfoCard>
          <InfoCard title="PEOs">
            <BulletList items={["Feedback from graduates", "Feedback from employers, IAP"]} />
          </InfoCard>
          <InfoCard title="Curriculum and Teaching Quality">
            <BulletList items={["Feedback from students, graduates", "Feedback from faculty members, IAP"]} />
          </InfoCard>
        </div>
        <div className="mt-6">
          <InfoCard tone="accent"><p><strong>CQI loops should be a regular practice — not done occasionally just before the accreditation visit.</strong></p></InfoCard>
        </div>
      </Section>

      <Section eyebrow="Assessment of feedback" title="Where feedback comes from">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Student Feedback">
            <BulletList items={[
              "In every course, students must give feedback on the course including COs and constructive alignment.",
              "Meeting with Student Advisory Board / Student Council.",
              "Exit interviews / surveys with graduating students.",
              "Student evaluation survey and individual faculty-student interaction.",
            ]} />
          </InfoCard>
          <InfoCard title="Faculty Feedback">
            <BulletList items={[
              "Feedback on course outcome using course embedded assessment, constructive alignment etc.",
              "Departmental / Curriculum committee meetings.",
              "Regular faculty meetings and interactions.",
            ]} />
          </InfoCard>
          <InfoCard title="IAP / IAB Feedback">
            <BulletList items={[
              "Industry Advisory Panel/Board (IAP/IAB) meeting.",
              "Surveys with industry.",
              "Employer surveys.",
            ]} />
          </InfoCard>
          <InfoCard title="Alumni Feedback">
            <BulletList items={[
              "Alumni Advisory Board.",
              "Surveys with alumni.",
            ]} />
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Analysis & action" title="From data to improvement">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Analysis — analyze data carefully to">
            <BulletList items={[
              "Evaluate achievements of PEO, PO and CO",
              "Identify strengths and weaknesses",
              "Identify opportunities and threats",
              "Gather the big picture, trends and patterns",
            ]} />
          </InfoCard>
          <InfoCard title="Improvement — prepare an action plan based on analysis">
            <BulletList items={[
              "Update objectives, outcomes, contents, delivery and assessment",
              "Update policies",
              "Update infrastructural and other facilities",
            ]} />
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Records of evidence" title="What auditors will look for">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="Curriculum Design Evidence">
            <BulletList items={[
              "Articulation of COs in core program courses",
              "Mapping of COs into POs",
              "Mapping of POs into PEOs",
              "Alignment of PEOs with mission statement",
              "Involvement of industry and alumni in curriculum design",
            ]} />
          </InfoCard>
          <InfoCard title="Course File Evidence">
            <BulletList items={[
              "Practice of appropriate pedagogical methods",
              "Assessment of CO attainment in core program courses using appropriate assessment tools",
              "Assessment of PO attainment from CO assessment",
              "Completion of culminating Capstone / Final Year Design project",
            ]} />
          </InfoCard>
          <InfoCard title="CQI Evidence">
            <BulletList items={[
              "Use data and feedback to improve processes, policies and facilities.",
            ]} />
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="CQI cycle" title="Establishing your cycle">
        <StepList items={[
          { title: "Fix the improvement period", text: "Fixing a period after which actions will be taken for improvement. For CO, PO and PEO, different duration is possible." },
          { title: "Take feedback from stakeholders", text: "Collect assessment and survey data from students, faculty, alumni, employers, and industry advisory panels." },
          { title: "Analyze feedback", text: "Identify strengths, weaknesses, opportunities, and threats." },
          { title: "Decide actions", text: "Prepare an action plan grounded in evidence." },
          { title: "Make the necessary changes", text: "Update objectives, outcomes, contents, delivery, assessment, policies and facilities." },
        ]} />
      </Section>

      <Section eyebrow="Course-level example" title="CQI at course level">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {["CO and PO Mapping","Course Plan","Level of Taxonomy (Bloom's)","Delivery & Assessment Method","Course Evaluation","CQI Form"].map((s) => (
            <div key={s} className="card-elev p-4 text-center text-sm font-medium text-ink">{s}</div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Exercise" title="CQI exercise">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Current State"><p>People · Process · Technology</p></InfoCard>
          <InfoCard title="Future State">
            <BulletList items={[
              "Improved Understanding",
              "Improved Practice",
              "Improved Implementation",
              "Improved Attainment",
            ]} />
          </InfoCard>
        </div>
        <div className="mt-6"><InfoCard tone="accent">
          <BulletList items={[
            "Evaluate your current state",
            "Identify the bottlenecks / challenges",
            "Propose how to fulfill the gaps to close CQI loop",
          ]} />
        </InfoCard></div>
      </Section>
    </>
  );
}
