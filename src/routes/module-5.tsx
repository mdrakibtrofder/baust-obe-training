import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, RelatedPages } from "@/components/site/layout";
import { InfoCard, DataTable, BulletList, AttributeTable, MappingMatrix, WorkedExampleCard } from "@/components/site/data-blocks";
import { complexProblems, complexActivities, knowledgeProfile } from "@/lib/obe-data";
import { complicatedVsComplexPrompts, ceaGroupWorkPrompt, mappingMatrixCourses, mappingMatrix, workedExamples } from "@/lib/module-extras";

export const Route = createFileRoute("/module-5")({
  head: () => ({
    meta: [
      { title: "Module 5 · Complex Engineering Problems & Activities — OBE Training" },
      { name: "description", content: "Attributes of Complex Engineering Problems (WP) and Complex Engineering Activities (EA) with worked examples." },
      { property: "og:title", content: "Module 5 · Complex Engineering Problems & Activities" },
      { property: "og:description", content: "CEP, CEA and how to embed them in courses, labs, and final year design projects." },
    ],
  }),
  component: Module5,
});

function Module5() {
  return (
    <>
      <PageHeader
        eyebrow="Module 5"
        title="Complex Engineering Problems & Activities"
        lead="Foundational knowledge must equip students to solve complex engineering problems and execute professional projects involving complex engineering activities."
      />

      <Section eyebrow="Who does what?" title="Engineers, technologists, technicians">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="Engineers — Solve Complex Problems">
            <p>No obvious solution; require abstract thinking and originality in analysis to formulate suitable models.</p>
          </InfoCard>
          <InfoCard title="Technologists — Solve Broadly-defined Problems">
            <p>Can be solved by well-proven analysis techniques.</p>
          </InfoCard>
          <InfoCard title="Technicians — Solve Well-defined Problems">
            <p>Can be solved in standardized ways.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="The three layers" title="How the framework connects">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="Knowledge Profile (9)">
            <p>Math, science, engineering principles, social sciences, and other foundations a student must master.</p>
          </InfoCard>
          <InfoCard title="Complex Engineering Problem Solving (7)">
            <p>Students use the knowledge profile to analyze abstract, open-ended, and non-standard engineering problems.</p>
          </InfoCard>
          <InfoCard title="Complex Engineering Activities (5)">
            <p>Practical, project-based application requiring management of resources, team dynamics, and diverse stakeholders.</p>
          </InfoCard>
        </div>
        <p className="mt-4 text-sm text-muted-foreground italic">Ability to execute both CEP and CEA feeds the twelve Program Outcomes.</p>
      </Section>

      <Section eyebrow="Table (WK)" title="Knowledge Profile — attributes referenced by CEP">
        <AttributeTable headers={["Code","Attribute"]} rows={knowledgeProfile} accent="primary" />
      </Section>

      <Section eyebrow="Table (WP)" title="Range of Complex Engineering Problem Solving">
        <AttributeTable headers={["Code","Attribute"]} rows={complexProblems} accent="chart-3" />
        <div className="mt-6"><InfoCard tone="accent"><p><strong>Complex Engineering Problem = WP1 + at least two from WP2 to WP7.</strong></p></InfoCard></div>
      </Section>

      <Section eyebrow="Knowledge attributes for CEP" title="WP1 requires one or more Knowledge Attributes">
        <DataTable
          headers={["Code", "Knowledge Area"]}
          rows={[
            ["WK3", "Engineering fundamentals required in the engineering discipline."],
            ["WK4", "Engineering specialist knowledge for accepted practice areas."],
            ["WK5", "Resource use, environmental impacts, whole-life cost, re-use and net zero carbon."],
            ["WK6", "Engineering practice/technology in the discipline."],
            ["WK8", "Current research literature and emerging issues."],
          ]}
        />
      </Section>

      <Section eyebrow="Discussion" title="Complicated vs Complex Engineering Problems">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Complicated Engineering Problem">
            <BulletList items={[
              "Predictable; follows strict rules, even with thousands of moving parts.",
            ]} />
          </InfoCard>
          <InfoCard title="Complex Engineering Problem">
            <BulletList items={[
              "Integrate renewable energy sources into a national smart power grid.",
            ]} />
          </InfoCard>
        </div>
        <div className="mt-6">
          <h3 className="font-display text-lg text-ink mb-3">Discussion prompts — which of these are complex, complicated, or both?</h3>
          <DataTable
            headers={["Scenario", "Complicated?", "Complex?"]}
            rows={complicatedVsComplexPrompts.map((p) => [p.title, p.complicated, p.complex])}
          />
        </div>
        <div className="mt-5">
          <InfoCard tone="accent" title="Discuss">
            <p>{ceaGroupWorkPrompt}</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Table (EA)" title="Range of Complex Engineering Activities">
        <AttributeTable headers={["Code","Attribute"]} rows={complexActivities} accent="accent" />
      </Section>

      <Section eyebrow="Mapping example" title="Course × PO × WK × WP × EA mapping matrix">
        <p className="text-sm text-foreground/80 mb-4">A worked example of how a program maps its courses (including the FYDP) against all 12 POs, 9 Knowledge Profile attributes, 7 Complex Engineering Problem-solving attributes, and 5 Complex Engineering Activities.</p>
        <MappingMatrix courses={mappingMatrixCourses} data={mappingMatrix} />
      </Section>

      <Section eyebrow="Worked examples" title="Four worked examples from practice">
        <p className="text-sm text-foreground/80 mb-4">Click each example to see the full brief and which WP/EA attributes it addresses, with justification.</p>
        <div className="space-y-3">
          {workedExamples.map((ex, i) => (
            <WorkedExampleCard
              key={ex.id}
              title={ex.title}
              brief={ex.brief}
              wps={ex.wps}
              eas={ex.eas}
              thinkingList={ex.thinkingList}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Implementation" title="How and when to implement CEP and CEA">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Evidence places">
            <BulletList items={["Theory courses", "Laboratory courses", "Design projects", "Final Year Design Project"]} />
          </InfoCard>
          <InfoCard title="Guidance">
            <p>Accreditation bodies like BAETE do not provide a single prescription. Programs demonstrate CEP/CEA coverage across theory, lab, project and FYDP work.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Aspects to consider" title="Complex problem-solving balances many aspects">
        <div className="flex flex-wrap gap-2">
          {["Economics","Social","Environment","Ethics","Management","Technology","Analysis","Evaluation"].map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <p className="mt-4 text-sm text-foreground/80 leading-relaxed max-w-3xl">
          A feasible solution must be technically sound, locally implementable, socially acceptable, environmentally aware, and economically realistic.
        </p>
      </Section>

      <Section eyebrow="Summary" title="Key takeaways">
        <InfoCard tone="warn">
          <p>If CEP and CEA are not addressed appropriately in a program, it may produce technologists and technicians — not 'ENGINEERS'.</p>
        </InfoCard>
        <div className="mt-5">
          <BulletList items={[
            "Complex Engineering Problem (CEP) solving and Complex Engineering Activities (CEA) are at the core of modern engineering education.",
            "CEP is defined by WP1 plus at least two other WP attributes; CEA is defined by EA attributes across resources, interactions, innovation, consequences and familiarity.",
            "Programs should map how each attribute is addressed and provide evidence through course work, labs, projects and the FYDP.",
          ]} />
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/module-3", label: "Module 3 · FYDP & PO assessment", desc: "Why the Final Year Design Project is central to OBE, and worked PO write-ups." },
        { to: "/module-6", label: "Module 6 · Outcome Attainment", desc: "How CEP/CEA-embedded POs are measured and calculated." },
        { to: "/framework", label: "Framework · WK/WP/EA tables", desc: "The full reference definitions this module builds on." },
      ]} />
    </>
  );
}
