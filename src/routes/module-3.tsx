import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/layout";
import { InfoCard, DataTable, BulletList } from "@/components/site/data-blocks";

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

      <Section eyebrow="Components" title="PEO · PO · CO — an aligned outcome system">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard title="Program Educational Objectives (PEO)"><p>Attainment in about 5 years after graduation. Long-term graduate achievements.</p></InfoCard>
          <InfoCard title="Program Outcomes (PO)"><p>Attainment by the time of graduation. Graduate attributes required by the program.</p></InfoCard>
          <InfoCard title="Course Outcomes (CO)"><p>Upon completion of a course. Measurable knowledge, skills and attitudes.</p></InfoCard>
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

      <Section eyebrow="Cognitive" title="Learning activities and assessments">
        <DataTable headers={["Level", "Typical Learning Activities", "Assessment Examples"]} rows={cogActivities} />
      </Section>

      <Section eyebrow="Bloom's — Affective" title="Affective domain">
        <DataTable headers={["Level", "Core Meaning", "Example Verbs"]} rows={affective} />
      </Section>

      <Section eyebrow="Bloom's — Psychomotor" title="Psychomotor domain: activities and assessments">
        <DataTable headers={["Level", "Learning Activities", "Assessment"]} rows={psychomotor} />
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

      <Section eyebrow="Learning pyramid" title="People generally remember...">
        <DataTable
          headers={["Learning Activity", "Percentage Recalled", "Outcomes Enabled"]}
          rows={[
            ["Read", "10% of what they read", "Define, List, Describe, Explain"],
            ["Hear", "20% of what they hear", ""],
            ["View Images", "30% of what they see", ""],
            ["Watch Videos, Attend Exhibits/Sites", "50% of what they see and hear", "Demonstrate, Apply, Practice"],
            ["Watch a Demonstration", "70% of what they say and write", ""],
            ["Participate in Hands-On Workshops, Design Collaborative Lessons", "90% of what they do", "Analyze, Define, Create, Evaluate"],
            ["Simulate, Model, or Experience a Lesson, Design/Perform a Presentation — \"Do the Real Thing\"", "", ""],
          ]}
        />
      </Section>
    </>
  );
}
