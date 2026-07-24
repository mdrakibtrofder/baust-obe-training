// Appendix A (Version 2.2 → 3.0 comparison) + Appendix B (Bloom's Taxonomy) — verbatim
// from BAETE Accreditation Criteria (Version 3.0), ACC-TMP-04-04-V3.0.

export const appendixIntro =
  "Version 2.2 (July 2024) to Version 3.0 (July 2025). Knowledge Profiles changed from K to WK, Complex Problem Solving from P to WP, and Complex Activities from A to EA.";

export const poVersionChanges = [
  { label: "PO1: Engineering Knowledge",
    v22: "Apply knowledge of mathematics, natural science, engineering fundamentals and an engineering specialization as specified in K1 to K4 respectively to the solution of complex engineering problems.",
    v30: "Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in WK1 to WK4 respectively to develop solutions of complex engineering problems." },
  { label: "PO2: Problem Analysis",
    v22: "Identify, formulate, research literature and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences (K1 to K4).",
    v30: "Identify, formulate, research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences with holistic considerations for sustainable development (WK1 to WK4)." },
  { label: "PO3: Design/Development of Solutions",
    v22: "Design solutions for complex engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations (K5).",
    v30: "Design creative solutions for complex engineering problems and design systems, components or processes to meet identified needs with appropriate consideration for public health and safety, whole-life cost, net zero carbon as well as resource, cultural, societal, and environmental considerations as required (WK5)." },
  { label: "PO4: Investigation",
    v22: "Conduct investigations of complex problems using research-based knowledge (K8) and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.",
    v30: "Conduct investigations of complex engineering problems using research methods including research-based knowledge, design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions (WK8)." },
  { label: "PO5: Modern Tool Usage",
    v22: "Create, select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling, to complex engineering problems, with an understanding of the limitations (K6).",
    v30: "Create, select and apply and recognize limitations of appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, to complex engineering problems (WK2, WK6)." },
  { label: "PO6: The Engineer and Society",
    v22: "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice and solutions to complex engineering problems (K7).",
    v30: "When solving complex engineering problems, analyze and evaluate sustainable development impacts to: society, the economy, sustainability, health and safety, legal frameworks, and the environment (WK1, WK5, and WK7)." },
  { label: "PO7: Environment and Sustainability / Ethics (V2.2 PO7 focused on Sustainability; V3 PO7 shifts to Ethics)",
    v22: "Understand and evaluate the sustainability and impact of professional engineering work in the solution of complex engineering problems in societal and environmental contexts (K7).",
    v30: "Apply ethical principles and commit to professional ethics and norms of engineering practice and adhere to relevant national and international laws. Demonstrate an understanding of the need for diversity and inclusion (WK9)." },
  { label: "PO8: Ethics / Individual and Teamwork (V2.2 PO8 focused on Ethics, V3 PO8 shifts to Individual and Teamwork)",
    v22: "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice (K7).",
    v30: "Function effectively as an individual, and as a member or leader in diverse and inclusive teams and in multi-disciplinary, face-to-face, remote and distributed settings (WK9)." },
  { label: "PO9: Individual and Teamwork / Communication (V2.2 PO9 focused on Teamwork, V3 PO9 shifts to Communication)",
    v22: "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings.",
    v30: "Communicate effectively and inclusively on complex engineering activities with the engineering community and with society at large… taking into account cultural, language, and learning differences." },
  { label: "PO10: Communication / Management & Finance (V2.2 PO10 focused on Communication, V3 PO10 shifts to Communication Management & Finance)",
    v22: "Communicate effectively on complex engineering activities… make effective presentations, and give and receive clear instructions.",
    v30: "Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one's own work, as a member and leader in a team and to manage projects and in multidisciplinary environments." },
  { label: "PO11: Management & Finance / Lifelong Learning (V2.2 PO11 focused on Management, V3 PO11 shifts to Lifelong Learning)",
    v22: "Demonstrate knowledge and understanding of engineering management principles and economic decision-making…",
    v30: "Recognize the need for, and have the preparation and ability for i) independent and life-long learning ii) adaptability to new and emerging technologies and iii) critical thinking in the broadest context of technological change (WK8)." },
  { label: "PO12: Lifelong Learning / ideas, opportunities and business (V2.2 PO12 focused on Lifelong Learning, V3 PO12 shifts to ideas, opportunities and business)",
    v22: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    v30: "Demonstrate knowledge and understanding of the competences necessary to transform opportunities and ideas into a new business." },
];

export const wkVersionChanges = [
  { code: "WK1",
    v22: "A systematic, theory-based understanding of the natural sciences applicable to the discipline.",
    v30: "A systematic, theory-based understanding of the natural sciences applicable to the discipline and awareness of relevant social sciences" },
  { code: "WK2",
    v22: "Conceptually based mathematics, numerical analysis, statistics and the formal aspects of computer and information science to support analysis and modeling applicable to the discipline.",
    v30: "Conceptually based mathematics, numerical analysis, data analysis, statistics and the formal aspects of computer and information science to support detailed analysis and modeling applicable to the discipline" },
  { code: "WK3",
    v22: "A systematic, theory-based formulation of engineering fundamentals required in the engineering discipline.",
    v30: "A systematic, theory-based formulation of engineering fundamentals required in the engineering discipline" },
  { code: "WK4",
    v22: "Engineering specialist knowledge that provides theoretical frameworks and bodies of knowledge for the accepted practice areas in the engineering discipline; much is at the forefront of the discipline.",
    v30: "Engineering specialist knowledge that provides theoretical frameworks and bodies of knowledge for the accepted practice areas in the engineering discipline; much is at the forefront of the discipline" },
  { code: "WK5",
    v22: "Knowledge that supports engineering design in a practice area.",
    v30: "Knowledge, including efficient resource use, environmental impacts, whole-life cost, re-use of resources, net zero carbon, and similar concepts, that supports engineering design and operations in a practice area" },
  { code: "WK6",
    v22: "Knowledge of engineering practice (technology) in the practice areas in the engineering discipline",
    v30: "Knowledge of engineering practice (technology) in the practice areas in the engineering discipline" },
  { code: "WK7",
    v22: "Comprehension of the role of engineering in society and identified issues in engineering practice in the discipline: ethics and the engineer's professional responsibility to public safety; the impacts of engineering activity; economic, social, cultural, environmental and sustainability",
    v30: "Knowledge of the role of engineering in society and identified issues in engineering practice in the discipline, such as professional responsibility of an engineer to public safety and sustainable development" },
  { code: "WK8",
    v22: "Engagement with selected knowledge in the research literature of the discipline",
    v30: "Engagement with selected knowledge in the current research literature of the discipline, awareness of the power of critical thinking and creative approaches to evaluate emerging issues" },
  { code: "WK9",
    v22: "(not present in V2.2)",
    v30: "Ethics, inclusive behavior and conduct. Knowledge of professional ethics, responsibilities, and norms of engineering practice. Awareness of the need for diversity by reason of ethnicity, gender, age, physical ability etc. with mutual understanding and respect, and of inclusive attitudes" },
];

export const wpVersionChanges = [
  { attribute: "Depth of Knowledge", v22: "P1: Cannot be resolved without in-depth engineering knowledge at the level of K3, K4, K5, K6 or K8.", v30: "WP1: Cannot be resolved without in-depth engineering knowledge at the level of WK3, WK4, WK5, WK6 or WK8…" },
  { attribute: "Conflicting Requirements", v22: "P2: Involve wide-ranging or conflicting technical, engineering and other issues.", v30: "WP2: Involve wide-ranging or conflicting technical, non-technical issues (such as ethical, sustainability, legal, political, economic, societal) and consideration of future requirements." },
  { attribute: "Depth of Analysis", v22: "P3: Have no obvious solution and require abstract thinking, originality in analysis to formulate suitable models.", v30: "WP3: Have no obvious solution and require abstract thinking, creativity and originality in analysis to formulate suitable models." },
  { attribute: "Familiarity of Issues", v22: "P4: Involve infrequently encountered issues.", v30: "WP4: Involve infrequently encountered issues or novel problems." },
  { attribute: "Applicable Codes", v22: "P5: Are outside problems encompassed by standards and codes of practice.", v30: "WP5: Address problems not encompassed by standards and codes of practice." },
  { attribute: "Stakeholder Involvement", v22: "P6: Involve diverse groups of stakeholders with widely varying needs.", v30: "WP6: Involve collaboration across engineering disciplines, other fields, and/or diverse groups of stakeholders with widely varying needs." },
  { attribute: "Interdependence", v22: "P7: Are high-level problems including many component parts or sub-problems.", v30: "WP7: Address high level problems including many components or sub-problems that may require a systems approach." },
];

export const eaVersionChanges = [
  { attribute: "Range of Resources", v22: "A1: Involve the use of diverse resources (people, money, equipment, materials, information and technologies).", v30: "EA1: Involve the use of diverse resources including people, data and information, natural, financial and physical resources and appropriate technologies including analytical and/or design software." },
  { attribute: "Level of Interactions", v22: "A2: Require resolution of significant problems arising from interactions between wide-ranging or conflicting technical, engineering or other issues.", v30: "EA2: Require optimal resolution of interactions between wide-ranging and/or conflicting technical, non-technical, and engineering issues." },
  { attribute: "Innovation", v22: "A3: Involve creative use of engineering principles and research-based knowledge in novel ways.", v30: "EA3: Involve creative use of engineering principles, innovative solutions for a conscious purpose, and research-based knowledge." },
  { attribute: "Consequences", v22: "A4: Have significant consequences in a range of contexts… difficulty of prediction and mitigation.", v30: "EA4: Have significant consequences in a range of contexts… difficulty of prediction and mitigation." },
  { attribute: "Familiarity", v22: "A5: Can extend beyond previous experiences by applying principles-based approaches.", v30: "EA5: Can extend beyond previous experiences by applying principles-based approaches." },
];

// ─── Appendix B: Bloom's Taxonomy ────────────────────────────────────────────

export const bloomIntro =
  "Bloom's Taxonomy was created in 1956 under the leadership of educational psychologist Dr Benjamin Bloom in order to promote higher forms of thinking in education, such as analyzing and evaluating concepts, processes, procedures, and principles rather than just remembering facts (rote learning). It is most often used when designing educational, training, and learning processes. Bloom identified three domains of educational activities or learning (Bloom, et al. 1956):";

export const bloomDomains = [
  { name: "Cognitive", desc: "mental skills (knowledge)" },
  { name: "Affective", desc: "growth in feelings or emotional areas (attitude or self)" },
  { name: "Psychomotor", desc: "manual or physical skills (skills)" },
];

export const cognitiveTable = [
  { cat: "C1: Remembering — Recall or retrieve previous learned information.",
    examples: "Recite a policy. Quote prices from memory to a customer. Recite the safety rules.",
    keyWords: "defines, describes, identifies, knows, labels, lists, matches, names, outlines, recalls, recognizes, reproduces, selects, states",
    technologies: "book marking, flash cards, rote learning based on repetition, reading" },
  { cat: "C2: Understanding — Comprehending the meaning, translation, interpolation, and interpretation of instructions and problems. State a problem in one's own words.",
    examples: "Rewrite the principles of test writing. Explain in one's own words the steps for performing a complex task. Translate an equation into a computer spreadsheet.",
    keyWords: "comprehends, converts, defends, distinguishes, estimates, explains, extends, generalizes, gives an example, infers, interprets, paraphrases, predicts, rewrites, summarizes, translates",
    technologies: "create an analogy, participating in cooperative learning, taking notes, storytelling, Internet Search" },
  { cat: "C3: Applying — Use a concept in a new situation or unprompted use of an abstraction. Applies what was learned in the classroom into novel situations in the workplace.",
    examples: "Use a manual to calculate an employee's vacation time. Apply laws of statistics to evaluate the reliability of a written test.",
    keyWords: "applies, changes, computes, constructs, demonstrates, discovers, manipulates, modifies, operates, predicts, prepares, produces, relates, shows, solves, uses",
    technologies: "collaborative learning, create a process, blog, practice" },
  { cat: "C4: Analyzing — Separates material or concepts into component parts so that its organizational structure may be understood. Distinguishes between facts and inferences.",
    examples: "Troubleshoot a piece of equipment by using logical deduction. Recognize logical fallacies in reasoning. Gathers information from a department and selects the required tasks for training.",
    keyWords: "analyzes, breaks down, compares, contrasts, diagrams, deconstructs, differentiates, discriminates, distinguishes, identifies, illustrates, infers, outlines, relates, selects, separates",
    technologies: "Fishbowls, debating, questioning what happened, run a test" },
  { cat: "C5: Evaluating — Make judgments about the value of ideas or materials.",
    examples: "Select the most effective solution. Hire the most qualified candidate. Explain and justify a new budget.",
    keyWords: "appraises, compares, concludes, contrasts, criticizes, critiques, defends, describes, discriminates, evaluates, explains, interprets, justifies, relates, summarizes, supports",
    technologies: "survey, blogging" },
  { cat: "C6: Creating — Builds a structure or pattern from diverse elements. Put parts together to form a whole, with emphasis on creating a new meaning or structure.",
    examples: "Write a company operations or process manual. Design a machine to perform a specific task. Integrates training from several sources to solve a problem. Revises and process to improve the outcome.",
    keyWords: "categorizes, combines, compiles, composes, creates, devises, designs, explains, generates, modifies, organizes, plans, rearranges, reconstructs, relates, reorganizes, revises, rewrites, summarizes, tells, writes",
    technologies: "Create a new model, write an essay, network with others" },
];

export const affectiveTable = [
  { cat: "A1: Receiving Phenomena — Awareness, willingness to hear, selected attention.",
    examples: "Listen to others with respect. Listen for and remember the name of newly introduced people.",
    keyWords: "acknowledge, asks, attentive, courteous, dutiful, follows, gives, listens, understands" },
  { cat: "A2: Responds to Phenomena — Active participation on the part of the learners. Attend and react to a particular phenomenon. Learning outcomes may emphasize compliance in responding, willingness to respond, or satisfaction in responding (motivation).",
    examples: "Participates in class discussions. Gives a presentation. Questions new ideals, concepts, models, etc. in order to fully understand them. Know the safety rules and practice them.",
    keyWords: "answers, assists, aids, complies, conforms, discusses, greets, helps, labels, performs, presents, tells" },
  { cat: "A3: Valuing — The worth or value a person attaches to a particular object, phenomenon, or behavior. This ranges from simple acceptance to the more complex state of commitment. Valuing is based on the internalization of a set of specified values, while clues to these values are expressed in the learner's overt behavior and are often identifiable.",
    examples: "Demonstrates belief in the democratic process. Is sensitive towards individual and cultural differences (value diversity). Shows the ability to solve problems. Proposes a plan to social improvement and follows through with commitment. Informs management on matters that one feels strongly about.",
    keyWords: "appreciates, cherish, treasure, demonstrates, initiates, invites, joins, justifies, proposes, respect, shares" },
  { cat: "A4: Organization — Organizes values into priorities by contrasting different values, resolving conflicts between them, and creating a unique value system. The emphasis is on comparing, relating, and synthesizing values.",
    examples: "Recognizes the need for balance between freedom and responsible behavior. Explains the role of systematic planning in solving problems. Accepts professional ethical standards. Creates a life plan in harmony with abilities, interests, and beliefs. Prioritizes time effectively to meet the needs of the organization, family, and self.",
    keyWords: "compares, relates, synthesizes" },
  { cat: "A5: Internalizes Values (characterization) — Has a value system that controls their behavior. The behavior is pervasive, consistent, predictable, and most important characteristic of the learner. Instructional objectives are concerned with the student's general patterns of adjustment (personal, social, emotional).",
    examples: "Shows self-reliance when working independently. Cooperates in group activities (displays teamwork). Uses an objective approach in problem solving. Displays a professional commitment to ethical practice on a daily basis. Revises judgments and changes behavior in light of new evidence. Values people for what they are, not how they look.",
    keyWords: "acts, discriminates, displays, influences, modifies, performs, qualifies, questions, revises, serves, solves, verifies" },
];

export const psychomotorTable = [
  { cat: "P1: Perception (awareness) — The ability to use sensory cues to guide motor activity. This ranges from sensory stimulation, through cue selection, to translation.",
    examples: "Detects non-verbal communication cues. Estimate where a ball will land after it is thrown and then moving to the correct location to catch the ball. Adjusts heat of stove to correct temperature by smell and taste of food. Adjusts the height of the forks on a forklift by comparing where the forks are in relation to the pallet.",
    keyWords: "chooses, describes, detects, differentiates, distinguishes, identifies, isolates, relates, selects" },
  { cat: "P2: Set — Readiness to act. It includes mental, physical, and emotional sets. These three sets are dispositions that predetermine a person's response to different situations (sometimes called mindsets).",
    examples: "Knows and acts upon a sequence of steps in a manufacturing process. Recognize one's abilities and limitations. Shows desire to learn a new process (motivation). NOTE: This subdivision of Psychomotor is closely related with the \"Responding to phenomena\" subdivision of the Affective domain.",
    keyWords: "begins, displays, explains, moves, proceeds, reacts, shows, states, volunteers" },
  { cat: "P3: Guided Response — The early stages in learning a complex skill that includes imitation and trial and error. Adequacy of performance is achieved by practicing.",
    examples: "Performs a mathematical equation as demonstrated. Follows instructions to build a model. Responds hand-signals of instructor while learning to operate a forklift.",
    keyWords: "copies, traces, follows, react, reproduce, responds" },
  { cat: "P4: Mechanism (basic proficiency) — This is the intermediate stage in learning a complex skill. Learned responses have become habitual and the movements can be performed with some confidence and proficiency.",
    examples: "Use a personal computer. Repair a leaking faucet. Drive a car.",
    keyWords: "assembles, calibrates, constructs, dismantles, displays, fastens, fixes, grinds, heats, manipulates, measures, mends, mixes, organizes, sketches" },
  { cat: "P5: Complex Overt Response (Expert) — The skillful performance of motor acts that involve complex movement patterns. Proficiency is indicated by a quick, accurate, and highly coordinated performance, requiring a minimum of energy. This category includes performing without hesitation, and automatic performance.",
    examples: "Maneuvers a car into a tight parallel parking spot. Operates a computer quickly and accurately. Displays competence while playing the piano.",
    keyWords: "assembles, builds, calibrates, constructs, dismantles, displays, fastens, fixes, grinds, heats, manipulates, measures, mends, mixes, and organizes, sketches. (NOTE: Key Words same as Mechanism, but with adverbs/adjectives indicating quicker, better, more accurate performance.)" },
  { cat: "P6: Adaptation — Skills are well developed and the individual can modify movement patterns to fit special requirements.",
    examples: "Responds effectively to unexpected experiences. Modifies instruction to meet the needs of the learners. Perform a task with a machine that it was not originally intended to do (machine is not damaged and there is no danger in performing the new task).",
    keyWords: "adapts, alters, changes, rearranges, reorganizes, revises, varies" },
  { cat: "P7: Origination — Creating new movement patterns to fit a particular situation or specific problem. Learning outcomes emphasize creativity based upon highly developed skills.",
    examples: "Constructs a new theory. Develops a new and comprehensive training programming. Creates a new gymnastic routine.",
    keyWords: "arranges, builds, combines, composes, constructs, creates, designs, initiate, makes, originates" },
];

export const cognitiveIntro =
  "The cognitive domain involves knowledge and the development of intellectual skills (Bloom, et al, 1956). This includes the recall or recognition of specific facts, procedural patterns, and concepts that serve in the development of intellectual abilities and skills. There are six major categories of cognitive processes, listed below from simplest to most complex.";

export const affectiveIntro =
  "The affective domain (Krathwohl, Bloom, Masia, 1973) includes the manner in which we deal with things emotionally, such as feelings, values, appreciation, enthusiasms, motivations, and attitudes. The five major categories are listed from the simplest behavior to the most complex.";

export const psychomotorIntro =
  "The psychomotor domain (Simpson, 1972) includes physical movement, coordination, and use of the motor-skill areas. Development of these skills requires practice and is measured in terms of speed, precision, distance, procedures, or techniques in execution. Thus, psychomotor skills range from manual tasks, such as digging a ditch or washing a car, to more complex tasks, such as operating a complex piece of machinery or dancing. The seven major categories are listed from the simplest behavior to the most complex.";

export const referencesList = [
  "https://www.baetebangladesh.org/acc-man-02-v3-f.html",
  "http://www.nwlink.com/~donclark/hrd/bloom.html",
  "Anderson, L. W., & Krathwohl, D. R. (2001). A taxonomy for learning, teaching, and assessing, Abridged Edition. Boston, MA: Allyn and Bacon.",
];
