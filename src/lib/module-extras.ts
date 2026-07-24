// Additional verbatim content extracted from BAETE Module 3, 5, 6 decks.

// ─── Module 3 extras ─────────────────────────────────────────────────────────

export const changesRequired = [
  { title: "Course content review", text: "Course content review — align content with course outcomes and level of Bloom's taxonomy." },
  { title: "Teaching-learning methods", text: "Teaching-learning methods — appropriate for the intended outcome and learner." },
  { title: "Assessment/evaluation tools", text: "Assessment / evaluation tools — must be able to assess CO attainment reliably." },
  { title: "Data / evidence collection", text: "Data / evidence collection — systematic collection to allow CO, PO and PEO attainment analysis." },
  { title: "Effective OBE management system", text: "Effective OBE management system — the process, roles, and records that sustain OBE." },
];

export const poCategory = [
  { group: "Analysis of problems / Synthesis of solution", cep: "Complex Engineering Problem Solving", pos: [
    { code: "PO1", label: "Engineering Knowledge", wk: "WK1–WK4" },
    { code: "PO2", label: "Problem Analysis", wk: "WK1–WK4" },
    { code: "PO3", label: "Design/Development of Solutions", wk: "WK5" },
    { code: "PO4", label: "Investigation", wk: "WK8" },
    { code: "PO5", label: "Modern Tool Usage", wk: "WK2, WK6" },
    { code: "PO6", label: "The Engineer and Society (Sustainability)", wk: "WK1, WK5, WK7" },
  ]},
  { group: "Responsibility", cep: "—", pos: [
    { code: "PO7", label: "Ethics", wk: "WK9" },
    { code: "PO8", label: "Individual and Teamwork", wk: "WK9" },
  ]},
  { group: "Required in the workplace", cep: "Complex Engineering Activities (mapped with PO9)", pos: [
    { code: "PO9", label: "Communication", wk: "—" },
    { code: "PO10", label: "Project Management and Finance", wk: "—" },
    { code: "PO11", label: "Life-long Learning", wk: "WK8" },
    { code: "PO12", label: "Entrepreneurship", wk: "—" },
  ]},
];

export const cepCeaClassification = [
  { code: "PO1", label: "Engineering Knowledge", tag: "CEP" },
  { code: "PO2", label: "Problem Analysis", tag: "CEP" },
  { code: "PO3", label: "Design/Development of Solutions", tag: "CEP" },
  { code: "PO4", label: "Investigation", tag: "CEP" },
  { code: "PO5", label: "Modern Tool Usage", tag: "CEP" },
  { code: "PO6", label: "The Engineer and Society (Sustainability)", tag: "CEP" },
  { code: "PO7", label: "Ethics", tag: "Neither" },
  { code: "PO8", label: "Individual and Teamwork", tag: "Neither" },
  { code: "PO9", label: "Communication", tag: "CEA" },
  { code: "PO10", label: "Project Management and Finance", tag: "Neither" },
  { code: "PO11", label: "Lifelong Learning", tag: "Neither" },
  { code: "PO12", label: "Entrepreneurship", tag: "Neither" },
];

export const affectiveWorkedExamples = [
  { level: "Receiving (A1)",
    co: "Listen to safety instructions during a laboratory demonstration.",
    activity: "Instructor gives a demonstration; students observe and note key safety points.",
    assessment: "Short quiz or checklist of safety points identified by the student." },
  { level: "Responding (A2)",
    co: "Participate actively in group discussions on engineering ethics case studies.",
    activity: "Small-group discussion on a documented ethics case.",
    assessment: "Rubric based on participation, quality of contribution, and reflection note." },
  { level: "Valuing (A3)",
    co: "Demonstrate commitment to sustainable engineering practices in a design project.",
    activity: "Design project with explicit sustainability constraints.",
    assessment: "Design report + rubric that weighs sustainability considerations." },
  { level: "Organization (A4)",
    co: "Balance economic, technical and social requirements while proposing an engineering solution.",
    activity: "Multi-criteria design exercise; students justify trade-offs.",
    assessment: "Structured critique and defence; rubric on prioritization and coherence." },
  { level: "Characterization (A5)",
    co: "Consistently practise professional ethics in individual and team work throughout the course.",
    activity: "Long-running team project with peer evaluation.",
    assessment: "Peer evaluation + instructor observation across the semester." },
];

export const embeddedControllerMapping = {
  cos: [
    { code: "CO1", text: "Explain the architecture and instruction set of an embedded controller.", domain: "C" },
    { code: "CO2", text: "Develop C/assembly programs for interfacing sensors and actuators.", domain: "C/P" },
    { code: "CO3", text: "Design and simulate an embedded controller-based system for a stated requirement.", domain: "C/P" },
    { code: "CO4", text: "Work effectively in a team on the laboratory / mini-project component.", domain: "A" },
  ],
  matrix: [
    // rows are COs, columns PO1..PO12
    ["CO1", "✓","","","","","","","","","","",""],
    ["CO2", "✓","","","","✓","","","","","","",""],
    ["CO3", "","","✓","","✓","","","","","","",""],
    ["CO4", "","","","","","","","✓","✓","","",""],
  ] as (string | "" | "✓")[][],
};

export const questionCoMapping = [
  ["CO1", "Q1, Q3", "Q1", "Assignment 1"],
  ["CO2", "Q2", "Q1", "Assignment 2"],
  ["CO3", "Q4, Q5 ✓", "Q2", "Assignment 3"],
  ["CO4", "Q3", "Q5, Q6", "—"],
];

export const questionMappingGoodPractices = [
  "Keep it simple.",
  "Not all questions need to be mapped to a CO.",
  "Questions mapped to COs must be compulsory (not optional).",
  "One question should not be mapped to multiple COs.",
  "Avoid excessive breakdown — a question can be one whole assessment item.",
];

export const digitalElectronicsLab = {
  cos: [
    { code: "CO1", text: "Design combinational logic circuits for a stated function.", pct: "20%" },
    { code: "CO2", text: "Design sequential logic circuits (flip-flops, counters, registers).", pct: "20%" },
    { code: "CO3", text: "Implement and test digital circuits on breadboard / trainer.", pct: "40%" },
    { code: "CO4", text: "Work effectively in a team, present results and write a lab report.", pct: "20%" },
  ],
  breakdown: [
    ["Attendance & class performance", "10%"],
    ["Lab report", "20%"],
    ["Lab test / viva", "20%"],
    ["Project (design + demo)", "40%"],
    ["Presentation", "10%"],
  ],
};

export const fydp = {
  why: [
    "The Final Year Design Project (FYDP) / Capstone is central to OBE because it is the single course where students demonstrate a culminating application of everything learned earlier.",
    "It is the place where Complex Engineering Problem Solving (CEP) and Complex Engineering Activities (CEA) are most naturally demonstrated.",
    "It integrates knowledge, design, teamwork, ethics, project management and communication in one artefact.",
  ],
  primaryPOs: ["PO4 Investigation", "PO6 Sustainability", "PO8 Teamwork", "PO10 Project Management & Finance", "PO11 Lifelong Learning", "PO12 Entrepreneurship"],
  warning: "Thesis / projects typically done by 4th-year students in our country do not satisfy the requirements of the Capstone Project. A capstone must be a substantial, integrative design experience with explicit engineering standards and constraints — not a research thesis alone.",
};

export const rubricWhy = [
  "You keep rewriting the same comments on students' work.",
  "The marking load has become unmanageable.",
  "Students keep asking, \"what exactly did you want?\"",
  "Different graders give the same work very different marks.",
  "You can't defend a grade in a discussion with a student.",
  "You cannot show how a mark relates to the CO / PO being assessed.",
];

export const rubricHow = [
  { title: "Identify the criteria", text: "Decide what you are actually looking for — the observable qualities in the student's work that map to the CO / PO being assessed." },
  { title: "Define levels of performance", text: "For each criterion, define what excellent / good / adequate / poor looks like using concrete, observable descriptors." },
  { title: "Assign weights and mark bands", text: "Weight each criterion according to its importance to the outcome and turn each performance level into a mark band." },
];

export const poAssessmentWriteups = [
  { po: "PO1 · Engineering Knowledge (CEP embedded)",
    body: [
      "Methods / Tools: written examinations (mid & final), assignments, quizzes in core engineering-knowledge courses; problems chosen so that WP1 (in-depth engineering knowledge) is required.",
      "Criteria / Scale: 55% of the marks in the mapped questions = individual attainment; 50% of the students attaining = course-level attainment (both thresholds set by the program).",
      "Expected level of attainment: 50%.",
      "WK mapping: WK1, WK2, WK3, WK4 addressed through the mapped courses.",
      "WP mapping: WP1 (depth of knowledge) is embedded by construction of the assessment items.",
      "Results summary: report the % of students attaining PO1 for the cohort and the trend over the last CQI cycle.",
    ]},
  { po: "PO8 · Individual and Teamwork (no CEP)",
    body: [
      "Methods / Tools: rubric-based peer and instructor evaluation on team-based lab, project or FYDP work.",
      "Criteria / Scale: rubric with 4 levels; a student attains PO8 if the weighted score is ≥ the program-defined threshold (e.g. 55%).",
      "Expected level of attainment: 50% of the cohort attaining.",
      "WK mapping: WK9 (ethics, inclusive behaviour, professional norms) is the primary knowledge attribute.",
      "WP / EA mapping: none required — PO8 is not classified as CEP or CEA.",
      "Results summary: report % of students attaining, plus qualitative reflection from peer evaluations.",
    ]},
  { po: "PO9 · Communication (CEA embedded)",
    body: [
      "Methods / Tools: presentations, written reports, poster sessions in project-based courses and the FYDP.",
      "Criteria / Scale: separate rubrics for written and oral communication; threshold set by the program (e.g. 55% weighted score).",
      "Expected level of attainment: 50% of the cohort attaining.",
      "WK mapping: not directly required.",
      "EA mapping: EA1 (diverse resources), EA2 (interactions), EA3 (creative use) as demonstrated through the FYDP / project artefacts.",
      "Results summary: report % attaining plus rubric-level breakdown (e.g. clarity, structure, evidence, delivery).",
    ]},
];

// ─── Module 5 extras ─────────────────────────────────────────────────────────

export const complicatedVsComplexPrompts = [
  { title: "5-axis CNC machining center", complicated: "Yes — thousands of moving parts but a well-defined kinematic model.", complex: "No — solutions follow strict rules." },
  { title: "Coastal storm-surge defense for a low-lying city", complicated: "Some — many components.", complex: "Yes — no obvious solution, wide-ranging stakeholders, uncertain climate future." },
  { title: "Campus fiber network upgrade", complicated: "Yes — many devices, standards, subnets.", complex: "No — largely standardized." },
  { title: "Decentralized microgrid for a rural community", complicated: "Yes.", complex: "Yes — conflicting technical/economic/social requirements, novel deployment context." },
  { title: "Turbocharger design for a small diesel engine", complicated: "Yes — high-precision thermofluid + mechanical design.", complex: "Partly — depends on how novel the operating envelope is." },
  { title: "Edge-computing network for a smart city district", complicated: "Yes.", complex: "Yes — many stakeholders, evolving standards, security and privacy trade-offs." },
];

export const ceaGroupWorkPrompt = "Can a group work solving a problem of mechanics be considered as a Complex Engineering Activity? Why? Why not?";

export const mappingMatrixCourses = ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5", "Course 6", "Course 7", "FYDP"];

// Rows: course; columns: PO1..PO12 | WK1..WK9 | WP1..WP7 | EA1..EA5.
// Values illustrative from the source deck (Module 5, mapping example slides 25–26).
export const mappingMatrix: Record<string, { pos: string[]; wks: string[]; wps: string[]; eas: string[] }> = {
  "Course 1": { pos: ["✓","","","","","","","","","","",""], wks: ["✓","","","","","","","",""], wps: ["","","","","","",""], eas: ["","","","",""] },
  "Course 2": { pos: ["✓","✓","","","","","","","","","",""], wks: ["","✓","","","","","","",""], wps: ["✓","","","","","",""], eas: ["","","","",""] },
  "Course 3": { pos: ["","","✓","","","","","","","","",""], wks: ["","","✓","✓","","","","",""], wps: ["✓","","✓","","","",""], eas: ["","","","",""] },
  "Course 4": { pos: ["","","","✓","✓","","","","","","",""], wks: ["","","","","","✓","","✓",""], wps: ["✓","","","","","",""], eas: ["✓","","","",""] },
  "Course 5": { pos: ["","","","","","✓","","","","","",""], wks: ["✓","","","","✓","","✓","",""], wps: ["","✓","","","","",""], eas: ["","✓","","",""] },
  "Course 6": { pos: ["","","","","","","✓","✓","","","",""], wks: ["","","","","","","","","✓"], wps: ["","","","","","",""], eas: ["","","","",""] },
  "Course 7": { pos: ["","","","","","","","","✓","✓","",""], wks: ["","","","","","","","",""], wps: ["","","","","","",""], eas: ["","","","✓",""] },
  "FYDP": { pos: ["✓","✓","✓","✓","✓","✓","","✓","✓","✓","✓","✓"], wks: ["✓","✓","✓","✓","✓","✓","✓","✓","✓"], wps: ["✓","✓","✓","✓","","","✓"], eas: ["✓","✓","✓","","✓"] },
};

export const workedExamples = [
  {
    id: "we1",
    title: "Worked Example 1 — In-class Assignment: Apartment Electrical Design",
    brief: "Design the complete electrical distribution system for a proposed six-storey residential apartment building. Estimate the connected load and demand load, size the sub-main and feeders, select protection, prepare a single-line diagram and a bill of quantities. Justify the design against the Bangladesh National Building Code, the BPDB service rules, and safety / cost considerations.",
    wps: [
      { code: "WP1", justification: "Requires in-depth engineering knowledge (WK3 fundamentals + WK4 specialization in electrical machines / distribution) to size loads and protection correctly." },
      { code: "WP2", justification: "Wide-ranging technical, economic, and safety requirements — cost of copper vs aluminum, ampacity, voltage drop, code compliance." },
      { code: "WP3", justification: "No single obvious solution — students must formulate their own load model and defend it." },
    ],
    eas: [
      { code: "EA1", justification: "Requires diverse resources — cable data, code books, cost data, drawing tools." },
      { code: "EA2", justification: "Resolves interactions between technical (voltage drop, protection selectivity) and non-technical (cost, aesthetics) issues." },
    ],
  },
  {
    id: "we2",
    title: "Worked Example 2 — Open-ended Design Lab: Bangla Speech Recognition System",
    brief: "Design and implement a small Bangla speech recognition system for a limited vocabulary (e.g. digits 0–9 or a menu of 20 words). Choose the feature representation, model architecture, and evaluation metric. Report accuracy, confusion analysis, and limitations.",
    wps: [
      { code: "WP1", justification: "Requires in-depth knowledge of DSP, ML/statistics (WK2, WK3, WK4)." },
      { code: "WP3", justification: "No obvious solution — feature choice, model choice, dataset construction all require abstract thinking." },
      { code: "WP5", justification: "Bangla speech recognition is not covered by any standard workflow — falls outside prescriptive codes." },
    ],
    eas: [],
  },
  {
    id: "we3",
    title: "Worked Example 3 — FYDP: Depression Prediction using Machine Learning",
    brief: "Motivation: mental-health screening in low-resource settings is limited by trained clinicians. Objective: build a ML classifier that predicts likelihood of clinical depression from a short questionnaire and passive smartphone signals. Challenges: sensitive data / ethics; class imbalance; culturally-appropriate features; interpretability for clinicians; deployment on low-end devices.",
    wps: [
      { code: "WP1", justification: "Requires in-depth ML, statistics, and signal-processing knowledge (WK2, WK3, WK4, WK8)." },
      { code: "WP2", justification: "Balances technical (accuracy, latency) with ethical, legal, societal (privacy, consent, cultural context)." },
      { code: "WP3", justification: "No obvious solution — feature engineering, model choice, evaluation strategy all open." },
      { code: "WP4", justification: "Bangla-context mental-health ML is a novel / infrequently-encountered problem." },
      { code: "WP7", justification: "System-level problem — data pipeline, model, mobile app, clinician interface all interacting." },
    ],
    eas: [
      { code: "EA1", justification: "Diverse resources — human subjects, clinical guidance, cloud compute, mobile device." },
      { code: "EA2", justification: "Optimal resolution of interactions between accuracy, privacy, latency, interpretability." },
      { code: "EA3", justification: "Creative use of ML principles for a socially-consequential purpose." },
      { code: "EA5", justification: "Extends beyond typical undergraduate coursework by applying principles-based approaches to a novel context." },
    ],
  },
  {
    id: "we4",
    title: "Worked Example 4 — Complex Problem Solving: Timbuktu Replacement Bridge",
    brief: "The single bridge connecting a small Sahelian town to the highway has been destroyed by flooding for the second time in five years. Design a replacement bridge. Consider the site, weather, materials available locally, design alternatives, costing and construction schedule under the region's constraints.",
    thinkingList: [
      "Site — soil, river hydrology, flood level, seismicity.",
      "Weather — extreme heat, seasonal flooding, sandstorms.",
      "Materials — what is available locally? What must be imported?",
      "Design alternatives — beam / arch / truss / suspension; cost vs span vs constructability.",
      "Costing — capex, maintenance over life, tariff to users.",
      "Scheduling — dry season only? phased construction?",
    ],
    wps: [], eas: [],
  },
];

// ─── Module 6 extras ─────────────────────────────────────────────────────────

export const module6QuestionCoMapping = [
  ["CO1", "Q1, Q3", "Q1", "Assignment 1"],
  ["CO2", "Q2", "Q1", "Assignment 2"],
  ["CO3", "Q4, Q5 ✓", "Q2", "Assignment 3"],
  ["CO4", "Q3", "Q5, Q6", "—"],
];

export const module6LabExample = {
  cos: [
    { code: "CO1", desc: "Explain the operation of the digital circuits studied in class through breadboard implementation.", po: "PO2", kpa: "K3", delivery: "Lab briefing + guided experiments", tools: "Lab notebook · Viva" },
    { code: "CO2", desc: "Design and construct combinational and sequential circuits for a stated function.", po: "PO3", kpa: "P1, P2", delivery: "Design assignments + open-ended tasks", tools: "Breadboard demo · Design report" },
    { code: "CO3", desc: "Work effectively as a team member on the lab project.", po: "PO9", kpa: "A1, A2", delivery: "Team-based mini-project", tools: "Peer evaluation · Instructor observation" },
    { code: "CO4", desc: "Present the project results in a written report and oral presentation.", po: "PO8", kpa: "A2, A3", delivery: "Presentation session at end of term", tools: "Presentation rubric · Report rubric" },
  ],
  breakdown: [
    ["Active class participation", "30%", "CO1"],
    ["Lab report", "10%", "CO1, CO2"],
    ["Mid-term", "20%", "CO1, CO2"],
    ["Project", "40%", "CO2, CO3, CO4"],
  ],
};

export const module6LabRubric = [
  { item: "Abstract submission", marks: 10, criteria: "Clear problem statement, objective, method summary.", coPo: "CO2 · PO3", kpa: "K3" },
  { item: "Breadboard demo", marks: 20, criteria: "Working prototype on breadboard; correct behaviour observed by instructor.", coPo: "CO2 · PO3", kpa: "P1, P2" },
  { item: "Veroboard demo", marks: 20, criteria: "Soldered prototype on veroboard; robust connections, correct functionality.", coPo: "CO2 · PO3", kpa: "P3" },
  { item: "Individual viva", marks: 10, criteria: "Understanding of design choices and trade-offs.", coPo: "CO1, CO2 · PO2", kpa: "K3" },
  { item: "Presentation", marks: 10, criteria: "Clarity, structure, response to questions.", coPo: "CO4 · PO8", kpa: "A2" },
  { item: "Report", marks: 10, criteria: "Structure, technical accuracy, references.", coPo: "CO4 · PO8", kpa: "A3" },
];

// CO attainment worked numeric example: 10 students × 4 COs. Threshold 55 %.
export const coAttainmentRoster = {
  students: [
    { id: "S01", scores: [70, 45, 55, 80] },
    { id: "S02", scores: [65, 30, 45, 72] },
    { id: "S03", scores: [80, 55, 60, 78] },
    { id: "S04", scores: [58, 50, 40, 68] },
    { id: "S05", scores: [72, 35, 52, 82] },
    { id: "S06", scores: [66, 60, 58, 70] },
    { id: "S07", scores: [55, 40, 65, 60] },
    { id: "S08", scores: [78, 42, 50, 74] },
    { id: "S09", scores: [62, 38, 48, 66] },
    { id: "S10", scores: [70, 55, 60, 75] },
  ],
  // % attained (students crossing 55 % threshold on that CO) / 10
  attained: [70, 40, 50, 70],
};

export const poCalcEqualLevel = [
  { course: "CSE 4501", co: "CO1", domain: "Cognitive / Apply", level: 3, weight: 1 },
  { course: "CSE 4501", co: "CO2", domain: "Cognitive / Analyze", level: 4, weight: 1 },
  { course: "CSE 4501", co: "CO3", domain: "Cognitive / Create", level: 6, weight: 1 },
];

export const poCalcCourseMap = [
  ["Course A", "CO1 → PO1", "CO2 → PO2", "CO3 → PO3"],
  ["Course B", "CO1 → PO1", "CO2 → PO4", "CO3 → PO5"],
  ["Course C", "CO1 → PO1", "CO2 → PO2", "CO3 → PO6"],
];

export const poResult = [
  { po: "PO1", pct: 49 },
  { po: "PO2", pct: 60 },
  { po: "PO3", pct: 66 },
  { po: "PO4", pct: 100 },
  { po: "PO5", pct: 57 },
  { po: "PO6", pct: 52 },
  { po: "PO7", pct: 100 },
  { po: "PO8", pct: 65 },
  { po: "PO9", pct: 65 },
  { po: "PO10", pct: 95 },
  { po: "PO11", pct: 90 },
  { po: "PO12", pct: 70 },
];

export const cqiFeedbackTable: [string, string][] = [
  ["COs", "Course instructors · Students"],
  ["POs", "Stakeholders — including graduates"],
  ["PEOs", "Graduates · Employers"],
  ["Curriculum / Teaching quality", "Faculty · Students"],
];

// ─── Bloom action verbs (from BAETE Accreditation Criteria, Appendix B) ────

export const bloomActionVerbs = {
  headers: ["", "I. Remembering", "II. Understanding", "III. Applying", "IV. Analyzing", "V. Evaluating", "VI. Creating"],
  definition: [
    "Definition",
    "Exhibit memory of previously learned material by recalling facts, terms, basic concepts, and answers.",
    "Demonstrate understanding of facts and ideas by organizing, comparing, translating, interpreting, giving descriptions, and stating main ideas.",
    "Solve problems to new situations by applying acquired knowledge, facts, techniques and rules in a different way.",
    "Examine and break information into parts by identifying motives or causes. Make inferences and find evidence to support generalizations.",
    "Present and defend opinions by making judgments about information, validity of ideas, or quality of work based on a set of criteria.",
    "Compile information together in a different way by combining elements in a new pattern or proposing alternative solutions.",
  ],
  verbs: [
    "Verbs",
    "Choose, Define, Find, How, Label, List, Match, Name, Omit, Recall, Relate, Select, Show, Spell, Tell, What, When, Where, Which, Who, Why",
    "Classify, Compare, Contrast, Demonstrate, Explain, Extend, Illustrate, Infer, Interpret, Outline, Relate, Rephrase, Show, Summarize, Translate",
    "Apply, Build, Choose, Construct, Develop, Experiment with, Identify, Interview, Make use of, Model, Organize, Plan, Select, Solve, Utilize",
    "Analyze, Assume, Categorize, Classify, Compare, Conclusion, Contrast, Discover, Dissect, Distinguish, Divide, Examine, Function, Inference, Inspect, List, Motive, Relationships, Simplify, Survey, Take part in, Test for, Theme",
    "Agree, Appraise, Assess, Award, Choose, Compare, Conclude, Criteria, Criticize, Decide, Deduct, Defend, Determine, Disprove, Estimate, Evaluate, Explain, Importance, Influence, Interpret, Judge, Justify, Mark, Measure, Opinion, Perceive, Prioritize, Prove, Rate, Recommend, Rule on, Select, Support, Value",
    "Adapt, Build, Change, Choose, Combine, Compile, Compose, Construct, Create, Delete, Design, Develop, Discuss, Elaborate, Estimate, Formulate, Happen, Imagine, Improve, Invent, Make up, Maximize, Minimize, Modify, Original, Originate, Plan, Predict, Propose, Solution, Solve, Suppose, Test, Theory",
  ],
};
