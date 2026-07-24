import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeader, Section, RelatedPages } from "@/components/site/layout";
import { InfoCard, DataTable, BulletList, StepList, PsychomotorGrid, CognitiveVerbGrid, LearningPyramid } from "@/components/site/data-blocks";
import {
  psychomotorDomainGrid, cognitiveActionVerbsGrid, learningPyramidLevels,
  changesRequired, poCategory, cepCeaClassification, affectiveWorkedExamples,
  embeddedControllerMapping, questionCoMapping, questionMappingGoodPractices,
  digitalElectronicsLab, fydp, rubricWhy, rubricHow, poAssessmentWriteups,
} from "@/lib/module-extras";

export const Route = createFileRoute("/module-3")({
  head: () => ({
    meta: [
      { title: "Module 3 · Outcome-Based Teaching, Learning & Assessment — OBE Training" },
      { name: "description", content: "Constructive alignment, Bloom's taxonomy, SMART course outcomes, and CO assessment for theory and lab courses." },
      { property: "og:title", content: "Module 3 · Outcome-Based Teaching, Learning & Assessment" },
      { property: "og:description", content: "Constructive alignment, Bloom's taxonomy, SMART course outcomes, learning domains, and CO assessment." },
    ],
  }),
  component: Module3,
});

const learners = [
  { title: "Visual", items: ["See and visualize", "Use words to evoke a visual image", "Prefer diagrams and pictures"] },
  { title: "Aural", items: ["Natural listeners", "Prefer explanations", "Listen and verbalize"] },
  { title: "Read / Write", items: ["Prefer written text", "Emphasize text-based input and output", "Enjoy reading and writing"] },
  { title: "Kinesthetic", items: ["Use all senses to engage in learning", "Learn through trial and error", "Slow to decide; do and solve"] },
];

const bloomLevels = [
  ["Remember", "Recalling relevant terminology, facts or procedures."],
  ["Understand", "Grasping the meaning of information that has been presented."],
  ["Apply", "Using learned information in different situations or problem solving."],
  ["Analyze", "Breaking information down into parts and examining relationships."],
  ["Evaluate", "Judging value based on criteria."],
  ["Create", "Producing new and original thoughts, ideas, processes or products."],
];

const cognitiveTLA = [
  { level: "Remember", co: "Recall the laws associated with probability and various discrete and continuous distributions.", act: "Lectures introducing different statistical distributions and probability axioms.", asm: "MCQ/True-false questions addressing differences in statistical distributions and problem solving." },
  { level: "Understand", co: "Recognize that mechanical engineering solutions need to take into account other considerations, such as societal and environmental impacts.", act: "Small presentations or speeches after a lecture, followed by student pairing and peer feedback.", asm: "Case study report on a significant mechanical engineering milestone highlighting social and environmental impacts." },
  { level: "Apply", co: "Apply programming fundamentals and elementary numerical methods within engineering computation.", act: "Computer lab activities with instant feedback on the code that is developed.", asm: "Students use programming software developed at the lab, followed by in-class quizzes on using the software." },
  { level: "Analyze", co: "Analyze the performances of different cloud architecture for large-scale application deployment.", act: "Term-long projects with multiple components deployed separately in a cloud setting.", asm: "Report showing performance analysis through graphs and tables, including throughput, latency and compute." },
  { level: "Evaluate", co: "Interpret data collected using hydrological field method techniques.", act: "Hands-on demonstrations of field exercises with detailed manuals on basic field techniques.", asm: "Tutorial field exercises requiring students to collect and interpret water quality data." },
  { level: "Create", co: "Design a site plan for a small-scale development including terrain, microclimates and infrastructure.", act: "Students visit prospective sites for their site plan project and collect pertinent data.", asm: "Group site plan with diagrams/photos and justification for design choices." },
];

const cogActivities = [
  ["Remember", "Flashcards, Highlight key words list, Memory activities, Reading materials", "Fill-in-the blanks, Label, Match, MCQ, Quizzes, True and false questions"],
  ["Understand", "Case studies, Demonstrations, Diagrams, Flowcharts", "One-minute paper, Presentation, Provide examples, Quizzes, Short answers"],
  ["Apply", "Calculate, Case studies, Creating examples, Demonstrations, Lab experiments", "Discussion board post, Lab reports, One-minute paper, Presentation, Problem-solving tasks, Short answers"],
  ["Analyze", "Case studies, Compare and contrast, Concept map, Discussions, Group investigation", "Analysis paper, Case studies, Evaluation criteria, Critique hypothesis, procedures etc."],
  ["Evaluate", "Compare and contrast, Journal, Pros and cons list, Mind map, Review paper", "Discussions, Presentation, Provide alternative solutions, Report"],
  ["Create", "Decision-making tasks, Develop new solutions or plans, Presentations, Research projects, Assignment", "Develop criteria to evaluate product or solution, Outline alternative solutions, Research proposal"],
];

const affective = [
  ["Receiving", "Being willing to listen and receive knowledge", "ask, choose, follow, listen"],
  ["Responding", "Actively participating and giving a response", "answer, assist, discuss, perform"],
  ["Valuing", "Attaching value and showing motivation", "accept, commit, prefer, justify"],
  ["Organization", "Integrating and organizing values", "arrange, compare, defend, prioritize"],
  ["Characterization", "Acting consistently with a value system", "display, influence, practice, revise"],
];

const psychomotor = [
  ["Set", "Observe, prepare, handle instruments", "Self-criteria, oral summary"],
  ["Guided Response", "Copy, follow, try, practice", "Evaluate accuracy against standard"],
  ["Mechanism", "Demonstrate and refine procedures", "Performance test"],
  ["Complex Overt Response", "Operate or perform complex tasks", "Checklist, report, practical exam"],
  ["Adaptation", "Modify procedures or approach", "Assess outcome and self-criteria"],
  ["Origination", "Design or construct a new product", "Assess public/private criteria"],
];

const smart = [
  { letter: "S", word: "Specific", note: "Balance between too generic and overly specific." },
  { letter: "M", word: "Measurable", note: "Know whether a requirement has been fulfilled and how well." },
  { letter: "A", word: "Achievable", note: "Realistic expectation of students." },
  { letter: "R", word: "Relevant", note: "Align with program objectives or industry needs." },
  { letter: "T", word: "Time-bound", note: "Achievable within the course timeframe." },
];

function WriteupAccordion({ item, defaultOpen }: { item: { po: string; body: string[] }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="card-elev overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-secondary/40 transition-colors">
        <span className="flex-1 font-display text-lg text-ink">{item.po}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-border">
          <BulletList items={item.body} />
        </div>
      )}
    </div>
  );
}

function Module3() {
  return (
    <>
      <PageHeader
        eyebrow="Module 3"
        title="Outcome-Based Teaching, Learning, and Assessment"
        lead="Hands-on Training on Outcome-Based Education (OBE) — presented at BAETE Training on OBE and Accreditation, 26–27 June 2026."
      />

      <Section eyebrow="Session outcomes" title="What you'll be able to do">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="1. Constructive alignment"><p>Understand constructive alignment between outcome, teaching-learning activities, and assessment.</p></InfoCard>
          <InfoCard title="2. Method selection"><p>Identify and select proper teaching-learning activities and assessment methods for the courses.</p></InfoCard>
          <InfoCard title="3. Assessment rubrics"><p>Design rubrics for assessment of outcomes.</p></InfoCard>
        </div>
      </Section>

      <Section eyebrow="Rationale" title="Why OBE">
        <BulletList items={[
          "Curriculum should be outcome-based and consistent with the qualifications framework for higher education (BAC).",
          "Defined learning outcomes state what learners will be able to do whether learned in a classroom, practical or industrial training, or less formal examination contexts.",
          "Accreditation expects outcome-based education and evidence of outcomes assessment processes and results (BAETE).",
          "OBE creates a clear link between curriculum, teaching-learning, assessment and continuous improvement.",
        ]} />
        <div className="mt-6"><InfoCard tone="accent"><p><em>OBE shifts emphasis from content delivery to demonstrable learner achievement.</em></p></InfoCard></div>
      </Section>

      <Section eyebrow="Changes required" title="What has to change to move to OBE">
        <div className="grid md:grid-cols-5 gap-4">
          {changesRequired.map((c, i) => (
            <div key={c.title} className="card-elev p-5">
              <div className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-semibold text-ink mt-1">{c.title}</div>
              <p className="text-xs text-foreground/75 mt-2 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Components" title="PEO · PO · CO — an aligned outcome system">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="Program Educational Objectives (PEO)"><p>Attainment in about 5 years after graduation. Long-term graduate achievements.</p></InfoCard>
          <InfoCard title="Program Outcomes (PO)"><p>Attainment by the time of graduation. Graduate attributes required by the program.</p></InfoCard>
          <InfoCard title="Course Outcomes (CO)"><p>Upon completion of a course. Measurable knowledge, skills and attitudes.</p></InfoCard>
        </div>
      </Section>

      <Section eyebrow="Program Outcomes" title="How the 12 POs group together">
        <p className="text-sm text-foreground/80 mb-4">Every PO falls into one of three groups, each tied to a different part of the knowledge/complexity framework.</p>
        <div className="space-y-5">
          {poCategory.map((g) => (
            <InfoCard key={g.group} title={g.group}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{g.cep}</p>
              <DataTable headers={["PO", "Label", "Knowledge Profile"]} rows={g.pos.map((p) => [p.code, p.label, p.wk])} />
            </InfoCard>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="font-display text-lg text-ink mb-3">PO classification: CEP · CEA · Neither</h3>
          <DataTable headers={["PO", "Label", "Classification"]} rows={cepCeaClassification.map((p) => [p.code, p.label, p.tag])} />
        </div>
      </Section>

      <Section eyebrow="Traditional vs OBE" title="Traditional Education Process vs OBE">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Traditional Educational Process">
            <BulletList items={[
              "Input and process driven.",
              "Assessment mainly checks exams, quiz, and completion.",
              "Quality control relies largely on teaching evaluation and process monitoring.",
            ]} />
          </InfoCard>
          <InfoCard title="Outcome-Based Education">
            <BulletList items={[
              "Input, process, output and stakeholder feedback are connected.",
              "Focuses on what students can know, do and demonstrate at graduation.",
              "Assessment is aligned with outcomes and improvement is evidence-based.",
            ]} />
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Constructive alignment" title="The four stages">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { stage: "Planning", q: "What do I want students to be able to do?", note: "Learning Outcomes (LO)" },
            { stage: "Implementation", q: "What teaching-learning activities achieve the intended LO?", note: "Instruction / Activities" },
            { stage: "Assessment", q: "Can students do what I want them to do?", note: "Assessment" },
            { stage: "Feedback", q: "How do I record feedback?", note: "Feedback and CQI" },
          ].map((s, i) => (
            <div key={s.stage} className="card-elev p-5 relative">
              <div className="font-display text-3xl text-accent">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display text-lg text-ink mt-1">{s.stage} Stage</div>
              <p className="text-sm text-foreground/80 mt-2">{s.q}</p>
              <div className="chip mt-3">{s.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-6"><InfoCard tone="muted"><p><strong>Alignment means outcomes, activities and assessment support each other.</strong></p></InfoCard></div>
      </Section>

      <Section eyebrow="Pitfalls" title="Constructive alignment — what can go wrong">
        <InfoCard tone="warn">
          <BulletList items={[
            "No activities or formative assessments are provided to prepare students for the summative assessments.",
            "Outcome targets a performance level, but assessments or instructional strategies focus on a different level.",
            "Target level is high on Bloom's taxonomy, such as analysis, while activity/assessment remains at a low level, such as remember.",
            "A weak alignment makes evidence of attainment difficult to defend.",
          ]} />
        </InfoCard>
      </Section>

      <Section eyebrow="Learners" title="Different types of learners">
        <div className="grid md:grid-cols-4 gap-4">
          {learners.map((l) => (
            <InfoCard key={l.title} title={l.title}><BulletList items={l.items} /></InfoCard>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground italic">Use a mix of activities so that learning does not depend on only one delivery mode.</p>
      </Section>

      <Section eyebrow="Bloom's — Cognitive" title="Cognitive domain: levels & meanings">
        <DataTable headers={["Level", "Meaning"]} rows={bloomLevels} />
        <div className="mt-4 text-sm text-muted-foreground">COs and assessments should indicate the desired level clearly.</div>
      </Section>

      <Section eyebrow="CO cycle" title="Course Outcomes: wording matters">
        <p className="text-sm text-foreground/80 mb-5 max-w-3xl">
          Action verbs such as write, summarize and appraise connect to clear learning behavior more than understand or know. Specific learning outcomes help students understand the kind of learning they need to demonstrate. The instructor should ask: <em>what assessment or learning activity will help students reach the intended learning outcome?</em> Teaching, learning and assessment must be connected in a cycle.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Teaching", "Learning", "Students", "Assessment"].map((s, i, arr) => (
            <div key={s} className="flex items-center gap-3">
              <div className="card-elev px-5 py-3 font-semibold text-ink">{s}</div>
              {i < arr.length - 1 && <span className="text-accent text-xl">→</span>}
            </div>
          ))}
          <span className="text-accent text-xl">↺</span>
        </div>
      </Section>

      <Section eyebrow="SMART" title="How to write COs">
        <div className="grid md:grid-cols-5 gap-3">
          {smart.map((s) => (
            <div key={s.letter} className="card-elev p-5 text-center">
              <div className="font-display text-5xl text-accent">{s.letter}</div>
              <div className="font-semibold text-ink mt-1">{s.word}</div>
              <p className="text-xs text-foreground/75 mt-2 leading-relaxed">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-display text-xl text-ink mb-3">CO structure: Action Verb · Subject Content · Level of Achievement · Condition</h3>
          <InfoCard tone="accent">
            <p className="font-semibold">CO example:</p>
            <p>Design an optimized finite-state machine for a given digital control problem that satisfies the specified state transitions while minimizing the number of logic ICs used.</p>
            <ul className="text-sm mt-2 space-y-1">
              <li><strong>Action verb:</strong> Design</li>
              <li><strong>Subject content:</strong> Finite-state machine</li>
              <li><strong>Level of achievement:</strong> Optimized by minimizing the number of logic ICs</li>
              <li><strong>Condition:</strong> Specified state transitions</li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Worked examples" title="Teaching–Learning–Assessment across Bloom levels">
        <DataTable
          headers={["Level", "Course Outcome", "Learning Activities", "Assessment"]}
          rows={cognitiveTLA.map((r) => [r.level, r.co, r.act, r.asm])}
        />
      </Section>

      <Section eyebrow="Worked example" title="CO-PO mapping — Embedded Controller Technology">
        <DataTable
          headers={["CO", "Course Outcome", "Domain"]}
          rows={embeddedControllerMapping.cos.map((c) => [c.code, c.text, c.domain])}
        />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm card-elev">
            <thead>
              <tr className="bg-surface-2 border-b border-border">
                <th className="text-left px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground">CO</th>
                {Array.from({ length: 12 }, (_, i) => (
                  <th key={i} className="px-2 py-2 text-xs text-muted-foreground">PO{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {embeddedControllerMapping.matrix.map((row) => (
                <tr key={row[0] as string} className="border-b border-border last:border-b-0">
                  <td className="px-3 py-2 font-semibold text-ink">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="px-2 py-2 text-center text-accent font-bold">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Cognitive" title="Learning activities and assessments">
        <DataTable headers={["Level", "Typical Learning Activities", "Assessment Examples"]} rows={cogActivities} />
      </Section>

      <Section eyebrow="Bloom's — Affective" title="Affective domain">
        <DataTable headers={["Level", "Core Meaning", "Example Verbs"]} rows={affective} />
      </Section>

      <Section eyebrow="Worked examples" title="Affective domain: CO, activity and assessment by level">
        <DataTable
          headers={["Level", "Course Outcome", "Learning Activity", "Assessment"]}
          rows={affectiveWorkedExamples.map((r) => [r.level, r.co, r.activity, r.assessment])}
        />
      </Section>

      <Section eyebrow="Bloom's — Psychomotor" title="Psychomotor domain: activities and assessments">
        <DataTable headers={["Level", "Learning Activities", "Assessment"]} rows={psychomotor} />
      </Section>

      <Section eyebrow="Psychomotor domain" title="Full definitions and action verbs (P1–P7)">
        <p className="text-sm text-foreground/80 mb-4">Perception through Origination — the complete seven-category psychomotor scale with each category's description and its associated action verbs.</p>
        <PsychomotorGrid rows={psychomotorDomainGrid} />
      </Section>

      <Section eyebrow="Cognitive domain" title="Action verbs by Bloom's level">
        <p className="text-sm text-foreground/80 mb-4">A quick-reference verb bank for writing Course Outcomes and exam questions at the intended cognitive level.</p>
        <CognitiveVerbGrid rows={cognitiveActionVerbsGrid} />
      </Section>

      <Section eyebrow="CO assessment" title="Assessment in theory and lab courses">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Theory courses">
            <BulletList items={[
              "Class tests/quizzes may be excluded — most of the time not all CTs are counted (e.g. 3 out of 4).",
              "Midterm and final examinations usually cover the whole syllabus.",
              "No need to include the same question/content twice.",
              "Too many assessments will make the process difficult.",
              "Assignments are useful for open-ended, individual problems.",
              "Course syllabus must have COs, CO assessment methods, and CO-PO mapping.",
            ]} />
          </InfoCard>
          <InfoCard title="Lab courses">
            <BulletList items={[
              "Not as simple as theory courses.",
              "Assessment components may vary — reports, viva, project, weekly programming or hardware assignments.",
              "No need to bring everything into CO assessment.",
              "CO assessment and course assessment/grades are different.",
            ]} />
          </InfoCard>
        </div>

        <div className="mt-6">
          <h3 className="font-display text-xl text-ink mb-3">Example: CO Assessment — Algorithms</h3>
          <DataTable
            headers={["CO(s)", "Assessment", "Marks"]}
            rows={[
              ["CO1", "Assignment", "20"],
              ["CO1, CO2", "Class Test", "20"],
              ["CO1, CO2, CO3", "Mid Exam", "20"],
              ["CO2, CO3, CO4", "Final Exam", "40"],
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Question mapping" title="Mapping questions to COs">
        <p className="text-sm text-foreground/80 mb-4">All assessments (CT, assignments, mid, final) that are considered for attainment must map to the COs. For mid/final examinations, mapping can be included with the question paper or question moderation form.</p>
        <DataTable headers={["CO", "Mid", "Final", "Assignment"]} rows={questionCoMapping} />
        <div className="mt-6">
          <h3 className="font-display text-lg text-ink mb-3">Good practice</h3>
          <BulletList items={questionMappingGoodPractices} />
        </div>
      </Section>

      <Section eyebrow="Worked example" title="CO assessment — Digital Electronics Lab">
        <DataTable
          headers={["CO", "Course Outcome", "Weight"]}
          rows={digitalElectronicsLab.cos.map((c) => [c.code, c.text, c.pct])}
        />
        <div className="mt-6">
          <h3 className="font-display text-lg text-ink mb-3">Assessment breakdown</h3>
          <DataTable headers={["Assessment Item", "Weight"]} rows={digitalElectronicsLab.breakdown} />
        </div>
      </Section>

      <Section eyebrow="Culminating course" title="Final Year Design Project (FYDP) / Capstone">
        <BulletList items={fydp.why} />
        <div className="mt-5">
          <InfoCard title="Primary POs evidenced through the FYDP">
            <div className="flex flex-wrap gap-2 mt-1">
              {fydp.primaryPOs.map((po) => (
                <span key={po} className="chip">{po}</span>
              ))}
            </div>
          </InfoCard>
        </div>
        <div className="mt-5">
          <InfoCard tone="warn"><p>{fydp.warning}</p></InfoCard>
        </div>
      </Section>

      <Section eyebrow="Rubrics" title="Why and how to design a rubric">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="Signs you need a rubric">
            <BulletList items={rubricWhy} />
          </InfoCard>
          <div>
            <h3 className="font-display text-lg text-ink mb-3">How to make a rubric</h3>
            <StepList items={rubricHow} />
          </div>
        </div>
      </Section>

      <Section eyebrow="PO assessment" title="Worked write-ups: PO1, PO8, PO9">
        <p className="text-sm text-foreground/80 mb-4">How a program should describe PO attainment in its SAR — one example with CEP embedded, one without, and one with CEA embedded.</p>
        <div className="space-y-3">
          {poAssessmentWriteups.map((item, i) => (
            <WriteupAccordion key={item.po} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Learning pyramid" title="People generally remember...">
        <LearningPyramid levels={learningPyramidLevels} />
      </Section>

      <RelatedPages items={[
        { to: "/module-5", label: "Module 5 · CEP & CEA", desc: "Worked examples embedding WP/EA attributes, including a full FYDP example." },
        { to: "/module-6", label: "Module 6 · Outcome Attainment", desc: "Numeric worked examples for CO and PO attainment calculation." },
        { to: "/framework", label: "Framework · WK/WP/EA tables & POs", desc: "The reference definitions this module's PO categorization builds on." },
        { to: "/sar/criterion-2", label: "SAR · Criterion 2 attainment prompts", desc: "The exact PO1–PO12 write-up prompts a SAR must answer." },
      ]} />
    </>
  );
}
