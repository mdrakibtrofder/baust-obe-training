import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeader, Section } from "@/components/site/layout";
import { InfoCard, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/criteria")({
  head: () => ({
    meta: [
      { title: "BAETE Accreditation Criteria v3.0 — OBE Training" },
      { name: "description", content: "The nine BAETE accreditation criteria used to evaluate undergraduate engineering programs in Bangladesh." },
      { property: "og:title", content: "BAETE Accreditation Criteria v3.0" },
      { property: "og:description", content: "PEOs, POs & assessment, curriculum, industry, CQI, students, faculty, governance and facilities." },
    ],
  }),
  component: CriteriaPage,
});

const criteria = [
  {
    n: "5.1", title: "Program Educational Objectives",
    intro: "Program Educational Objectives (PEOs) are broad statements describing the career and professional accomplishments the program prepares graduates to achieve. PEOs are assessable based on the attributes and accomplishments of graduates, preferably those who have worked for 3 to 5 years after graduation.",
    items: [
      "Published PEOs must be clear, concise, assessable, and realistic within the context of the available resources.",
      "PEOs must be consistent with the vision and mission of the institution or the department offering the program.",
      "The program must demonstrate an established system for compiling the level of attainment of PEOs, including a mechanism for tracking and obtaining feedback from graduates and their employers.",
    ],
  },
  {
    n: "5.2", title: "Program Outcomes and Assessment",
    intro: "Program Outcomes (POs) or graduate attributes are narrower statements describing what students are expected to know and be able to do by graduation. By graduation, the program must demonstrate that students have achieved an acceptable minimum level of specific knowledge, skills, and behavioral traits.",
    items: [
      "The process involved in defining the POs must be described. POs specified by the program must be significantly equivalent to the twelve graduate attributes or POs of BAETE.",
      "Each course must have clear quality requirements and facilitate the achievement of course outcomes (COs) through teaching-learning and assessment methods.",
      "The program must demonstrate the availability of the lecture plan, including COs, course content, books, grading policy, assessment tools and samples of corresponding student works, and assessment of CO attainment.",
      "Students' academic performance must be continuously monitored to ensure the achievement of outcomes.",
      "The program must demonstrate, using direct methods, that the students attain all POs by graduation.",
    ],
  },
  {
    n: "5.3", title: "Curriculum and Teaching-Learning Processes",
    items: [
      "The curriculum must satisfy the relevant program-specific criteria.",
      "The breadth and depth of the curriculum must be appropriate for solving complex engineering problems.",
      "The curriculum must contain adequate courses on mathematics, natural sciences, computing, humanities, social sciences, and other non-engineering subjects.",
      "Curriculum and teaching-learning processes must support the attainment of PEOs.",
      "The correlation between the course outcomes (COs) and POs must be appropriate.",
      "How each attribute of the Knowledge Profile (WK1 – WK9) is addressed in the curriculum must be demonstrated through mapping. The program must also demonstrate how the attributes of the Range of Complex Engineering Problems (WP1 – WP7) and Complex Engineering Activities (EA1 – EA5) are incorporated into the teaching, learning, and assessment. Additionally, the program must demonstrate how various United Nations Sustainable Development Goals are considered in teaching, learning, and assessment.",
      "The teaching-learning processes and assessment tools selected for each course must be effective and appropriate for achieving the relevant outcomes, including those pertaining to complex engineering problems and activities, if applicable.",
    ],
  },
  {
    n: "5.4", title: "Interactions with the Industry",
    intro: "A communication channel between the educational institution and the industry should exist. The industry should be encouraged to provide feedback concerning the quality of the teaching-learning process.",
    items: [
      "The industry must participate in developing the curriculum to ensure that it is relevant, regularly updated, and meets the needs of the industry, particularly in areas experiencing rapid changes.",
      "The program must provide students with the opportunity to obtain industrial experience.",
    ],
  },
  {
    n: "5.5", title: "Continuous Quality Improvement",
    items: [
      "The program must have a functional quality assurance system under an institutional framework.",
      "The program must address the concerns, weaknesses, and deficiencies the BAETE evaluation team identified in the last review.",
      "The students receive periodic feedback on their academic performance from the course teachers.",
      "The findings of the CQI exercises for PEOs must be evaluated, and the identified shortcomings and limitations must be used regularly to refine and improve the program.",
      "POs must be assessed on a regular cycle. The program must undertake regular appropriate review of POs, considering feedback from relevant stakeholders.",
      "The program must evaluate the curriculum and teaching quality regularly while considering feedback from faculty members, students and other stakeholders, and use the results of these evaluations for continuous improvements.",
    ],
  },
  {
    n: "5.6", title: "Students",
    items: [
      "The program must have and practice published policies for the admission and transfer of students into the program.",
      "The admission requirements must be appropriate for selecting students with the potential to achieve the program outcomes, including good grades in mathematics and natural sciences.",
      "Every student must be assigned an advisor. The advisor must counsel, guide, and mentor the student on all academic and professional matters.",
      "Students' workload must enable them to participate in extra- and co-curricular activities and the activities of relevant professional societies.",
    ],
  },
  {
    n: "5.7", title: "Faculty",
    items: [
      "The department must have a sufficient number of full-time faculty members to ensure that they are not overloaded with courses and that the program does not become overly dependent on part-time faculty members.",
      "The department must have a good blend of senior and junior faculty members with adequate academic qualifications and specializations in areas closely related to the program.",
      "The teacher-student ratio, class size, and teaching load must not compromise opportunities for interactions between the students and faculty members.",
      "Faculty members must be responsible for designing and updating the curriculum, establishing course and program outcomes, and selecting and using appropriate assessment tools for evaluating student performance in classes and the achievement of outcomes.",
      "Faculty members must be engaged in research, development and/or professional activities.",
      "All the faculty members must be adequately trained to establish course outcomes, conduct teaching-learning activities that are appropriate for the outcomes and assess the level of outcome achievement.",
    ],
  },
  {
    n: "5.8", title: "Governance, Finance and Safety",
    items: [
      "The officers and statutory committees of the institution must function effectively as per their roles defined in the institutional act/statute.",
      "The administrative and academic policies must be put into practice.",
      "The financial resources committed to the program must be adequate for the appropriate functioning of the program, including recruiting and retaining qualified faculty members and procuring the necessary lab equipment and tools to support teaching and learning.",
      "A safety plan must exist and be practiced to address the risk from manmade or natural hazards, including fire detection and suppression, as well as incidents and accidents in the laboratories.",
    ],
  },
  {
    n: "5.9", title: "Academic Facilities and Technical Support",
    items: [
      "The institution must have a well-stocked library with adequate books, e-books, journals, and other relevant resources for the program.",
      "The learning environment must be adequate and conducive.",
      "Every student must have the opportunity to work in the laboratories.",
      "Students and faculty members must have access to adequate computing and Internet facilities, including hardware, software tools, and support.",
    ],
  },
];

const revisions = [
  ["23 March 2017", "1.0", "Initial Release"],
  ["05 March 2019", "2.0", "Year-long Final Year Design Project or Capstone Project is no longer obligatory in the curriculum. Demonstration of culminated POs in solving complex engineering problems remains required, and the year-long Final Year Design Project or Capstone Project is the preferred method. The descriptions of POs have been updated following IEA Version 3.21, June 2013. Requirements of the Knowledge Profiles (K1-K8) have been explicitly mentioned in the description of each PO. The tables describing the Range of Complex Engineering Problem-Solving and Range of Complex Engineering Activities have been updated following IEA Version 3.21, June 2013. Results of evaluation of PO attainment should be reported."],
  ["16 May 2022", "2.1", "The required and desired attributes of each of the ten criteria have been listed in terms of sub-criteria. The required attributes are indicated through the word must, while the desired attributes are indicated through the word should. Titles for the POs have been removed."],
  ["23 April 2024", "2.2", "The purpose and scope of the document were added; roles and responsibilities were added; definitions and acronyms were added; there were no changes in the previous content."],
  ["23 April 2024", "3.0", "Released as a standalone document; desired attributes are removed from the criteria; criteria are rearranged, and criteria relating to outcomes are brought forward; Organization and Governance (criterion 1 in v2.1) and Financial and Physical Resources (criterion 2 in v2.1) were merged as \"Governance, Finance and Safety\"; sub-criteria under each criterion were reviewed and revised."],
];

function CriterionAccordion({ c, defaultOpen }: { c: (typeof criteria)[number]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="card-elev overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-secondary/40 transition-colors"
      >
        <span className="font-display text-lg text-accent w-14 shrink-0">{c.n}</span>
        <span className="flex-1 font-display text-lg text-ink">{c.title}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-border">
          {c.intro && <p className="text-sm text-foreground/80 leading-relaxed mb-4">{c.intro}</p>}
          <ol className="space-y-2.5">
            {c.items.map((it, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                <span className="font-mono text-xs text-accent mt-0.5">{["i.","ii.","iii.","iv.","v.","vi.","vii."][i]}</span>
                <span>{it}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function CriteriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="BAETE · ACC-MAN-02-v3-F"
        title="Accreditation Criteria (Version 3.0)"
        lead="The nine accreditation criteria used by the Board of Accreditation for Engineering and Technical Education (BAETE) of the Institution of Engineers, Bangladesh (IEB) to evaluate a program."
      />

      <Section eyebrow="Overview" title="Purpose & scope">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Purpose">
            <p>The purpose of this document is to describe the nine accreditation criteria that are the basis for evaluating a program by the Board of Accreditation for Engineering and Technical Education (BAETE) of the Institution of Engineers, Bangladesh (IEB).</p>
          </InfoCard>
          <InfoCard title="Scope">
            <p>The accreditation criteria presented here apply to the Higher Educational Institutions (HEI) offering undergraduate engineering programs in Bangladesh.</p>
          </InfoCard>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <InfoCard title="Engineering programs applying for BAETE Accreditation" tone="muted">
            <p>Prepare a Self-assessment report (SAR) based on the ten accreditation criteria. The Self-assessment report template for the programs must be prepared as per ACC-TMP-04-04 (V2.1 – effective till 30 June 2026; V3.0 – effective from 1 July 2025; programs may apply using template V2.1 or V3.0 between 1 July 2025 and 30 June 2026).</p>
          </InfoCard>
          <InfoCard title="BAETE" tone="muted">
            <p>Conducts the program evaluation based on the accreditation criteria presented in this document.</p>
          </InfoCard>
        </div>
        <p className="mt-6 text-sm text-foreground/75 leading-relaxed max-w-4xl">
          This section does not provide any quantitative benchmark requirement to satisfy a criterion or sub-criterion adequately or appropriately. Adequacy or appropriateness is to be decided qualitatively, considering what is necessary for the students to attain the outcomes. It should be noted that no sub-criterion is assigned any weight. Each criterion must be holistically evaluated in terms of the qualitative benchmark requirements.
        </p>
      </Section>

      <Section eyebrow="§ 5" title="The nine accreditation criteria">
        <div className="space-y-3">
          {criteria.map((c, i) => (
            <CriterionAccordion key={c.n} c={c} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      <Section eyebrow="§ 8" title="Revision history">
        <DataTable
          headers={["Date", "Version", "Description of Change"]}
          rows={revisions}
        />
      </Section>
    </>
  );
}
