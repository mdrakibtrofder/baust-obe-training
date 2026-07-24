import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-2")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 2 — Program Outcomes and Assessment — OBE Training" },
      { name: "description", content: "SAR template Criterion 2: PO definition, equivalence, COs, CO assessment, monitoring, and PO1–PO12 attainment write-up prompts." },
    ],
  }),
  component: Criterion2,
});

const poAttainmentPrompts: { po: string; text: string }[] = [
  { po: "PO1", text: "Describe how the attainment of PO1 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attributes (WK1 – WK4) are incorporated in PO1. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO1 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO1 is being attained." },
  { po: "PO2", text: "Describe how the attainment of PO2 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attributes (WK1 – WK4) and UN sustainable development goals are incorporated in PO2. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO2 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO2 is being attained." },
  { po: "PO3", text: "Describe how the attainment of PO3 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attribute WK5 is incorporated in PO3. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO3 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO3 is being attained." },
  { po: "PO4", text: "Describe how the attainment of PO4 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attribute WK8 is incorporated in PO4. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO4 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO4 is being attained." },
  { po: "PO5", text: "Describe how the attainment of PO5 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attributes WK2 and WK6 are incorporated in PO5. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO5 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO5 is being attained." },
  { po: "PO6", text: "Describe how the attainment of PO6 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attributes WK1, WK5 and WK7 are incorporated in PO6. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO6 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO6 is being attained." },
  { po: "PO7", text: "Describe how the attainment of PO7 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attribute WK9 is incorporated in PO7. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO7 is being attained." },
  { po: "PO8", text: "Describe how the attainment of PO8 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attribute WK9 is incorporated in PO8. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO8 is being attained." },
  { po: "PO9", text: "Describe how the attainment of PO9 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. Identify the expected level of attainment. Identify which attributes of the Range of Complex Engineering Activities (EA1 – EA5) are addressed through the attainment of PO9 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO9 is being attained." },
  { po: "PO10", text: "Describe how the attainment of PO10 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO10 is being attained." },
  { po: "PO11", text: "Describe how the attainment of PO11 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State how Knowledge Profile attribute WK8 is incorporated in PO11. State the expected level of attainment. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO11 is being attained." },
  { po: "PO12", text: "Describe how the attainment of PO12 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO12 is being attained." },
  { po: "Additional POs (2.6.13)", text: "Describe how the attainment of each additional PO (if any) is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment for each of the additional POs. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which each additional PO is being attained." },
];

function PoAccordionRow({ item, defaultOpen }: { item: { po: string; text: string }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="card-elev overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-secondary/40 transition-colors">
        <span className="font-display text-lg text-accent w-32 shrink-0">{item.po}</span>
        <span className="flex-1 text-sm text-foreground/70">Attainment write-up prompt</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-border">
          <p className="text-sm text-foreground/85 leading-relaxed">{item.text}</p>
        </div>
      )}
    </div>
  );
}

function Criterion2() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-2" />
      <PageHeader eyebrow="SAR · Criterion 2" title="Program Outcomes and Assessment" lead="ACC-TMP-04-04-V3.0 — the largest SAR chapter: PO definition, equivalence, course outcomes, CO assessment, monitoring, and PO1–PO12 attainment." />

      <Section eyebrow="2.1" title="Program Outcomes (PO)">
        <BulletList items={[
          "State the Program Outcomes.",
          "Describe the process of defining the Program Outcome. Provide evidence and supporting documents.",
        ]} />
      </Section>

      <Section eyebrow="2.2" title="Equivalence of the Program Outcomes">
        <InfoCard>
          <p>Indicate how the Outcomes set by the Program are substantially equivalent to the twelve graduate attributes or Program Outcomes of BAETE. If the program outcomes are stated differently, map program outcomes with the outcomes provided in the BAETE accreditation criteria.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="2.3" title="Course Outcomes (CO)">
        <p className="text-sm text-foreground/80 mb-4">State the course outcomes for each course the program uses to demonstrate the attainment of program outcomes.</p>
        <h3 className="font-display text-lg text-ink mb-3">Table 2.2.1 · Course outcomes, teaching-learning and assessment methods</h3>
        <DataTable headers={["CO No.", "CO statement", "Corresponding PO", "Teaching-learning methods", "Assessment methods"]} rows={[["—", "—", "—", "—", "—"]]} />
      </Section>

      <Section eyebrow="2.4" title="Assessment of Course Outcomes">
        <InfoCard>
          <p>Describe how the attainment of COs is assessed in each course, including the rubrics, where applicable. The assessment processes, attainment criteria and scale, and expected level of attainment should be clearly stated. Present a summarized assessment of the COs of the courses listed in Table 2.2.1. Evidence of CO assessments for the other courses offered by the department for the program should be included in the Annexure.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="2.5" title="Documentation on Teaching-learning and Assessment and CO Attainment">
        <InfoCard>
          <p>Describe how the program keeps documentation, including lecture plans, COs, course content, books, grading policy, assessment tools and samples of corresponding student works, and assessment of CO attainment.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="2.6" title="Monitoring of Students' Academic Performance">
        <InfoCard>
          <p>Describe the process for monitoring students' academic performance and indicate how the process is supporting the achievement of outcomes.</p>
        </InfoCard>
      </Section>

      <Section eyebrow="2.7" title="Attainment of Program Outcomes">
        <BulletList items={[
          "Provide a summary of the results of attainment of program outcomes for the most recent graduating cohort, whose attainment of program outcomes was measured.",
          "If transfer students are in the program, the attainment of their program outcomes must be demonstrated separately.",
          "If the program uses final-year design projects, capstone projects, or other courses with substantial design components, list those projects' titles, including the supervisor's name(s) and group sizes.",
        ]} />
        <p className="mt-6 text-sm text-muted-foreground">Click each PO below to expand its full attainment write-up prompt (§2.7.1–2.7.12, plus additional POs under §2.6.13).</p>
        <div className="mt-4 space-y-3">
          {poAttainmentPrompts.map((item, i) => (
            <PoAccordionRow key={item.po} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <InfoCard tone="accent" title="Annexure D">
          <p>Provide the documentation supporting the claims under Criterion 2 in <strong>Annexure D</strong>.</p>
        </InfoCard>
      </div>

      <RelatedPages items={[
        { to: "/framework", label: "Framework · PO1–PO12, WK1–WK9, WP1–WP7, EA1–EA5", desc: "The definitions every PO attainment prompt above references." },
        { to: "/module-6", label: "Module 6 · Outcome Attainment", desc: "Worked PO calculation examples (equal-level vs. weighted-level)." },
        { to: "/criteria", label: "Criterion 5.2 in the Accreditation Criteria", desc: "The five required sub-criteria this SAR chapter must evidence." },
      ]} />
    </>
  );
}
