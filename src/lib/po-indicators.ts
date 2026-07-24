// Verbatim from PO Indicators (ACC-MAN-02-01, Version 1.0)
// "List of a Suggested Sample PO Indicator"

export type PoIndicator = { po: string; text: string; indicators: string[] };

export const poIndicators: PoIndicator[] = [
  {
    po: "a)",
    text: "Apply knowledge of mathematics, natural science, computing and engineering fundamentals, and an engineering specialization as specified in K1 to K4 respectively to develop solutions to complex engineering problems",
    indicators: [
      "a1. Apply the knowledge of mathematics and computing to solve complex engineering problems (K2)",
      "a2. Apply the knowledge of natural science to solve complex engineering problems (K1)",
      "a3. Apply knowledge of engineering fundamentals to solve complex engineering problems (K3)",
      "a4. Apply knowledge of engineering specialization to solve complex engineering problems (K4)",
    ],
  },
  {
    po: "b)",
    text: "Identify, formulate, research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences with holistic considerations for sustainable development* (K1 to K4)",
    indicators: [
      "b1. Identify the complex engineering problem including identification of relevant attributes of complex engineering problems",
      "b2. Formulate a complex engineering problem",
      "b3. Research literature to gather required knowledge related to the complex engineering problem",
      "b4. Analyze complex engineering problem using first principles of mathematics, natural sciences and engineering sciences to reach substantiated conclusion",
      "b5. Consider sustainable development holistically in the identification, formulation, research of literature, analysis and conclusion of complex engineering problems",
    ],
  },
  {
    po: "c)",
    text: "Design creative solutions for complex engineering problems and design systems, components or processes to meet identified needs with appropriate consideration for public health and safety, whole-life cost, net zero carbon as well as resource, cultural, societal, and environmental considerations as required (K5)",
    indicators: [
      "c1. Design creative solutions of complex engineering problems",
      "c2. Design systems, components or processes to meet identified needs",
      "c3. Appropriately consider public health and safety in the design",
      "c4. Appropriately consider whole-life cost, net zero carbon and resources in the design",
      "c5. Appropriately consider cultural, societal, and environmental issues as required",
    ],
  },
  {
    po: "d)",
    text: "Conduct investigations of complex engineering problems using research methods including research-based knowledge, design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions (K8)",
    indicators: [
      "d1. Conduct investigation of complex engineering problems using research methods including research-based knowledge",
      "d2. Conduct investigation of complex engineering problems using design of experiments",
      "d3. Analyze and interpret data and synthesize information to provide valid conclusions to complex engineering problems",
    ],
  },
  {
    po: "e)",
    text: "Create, select and apply, and recognize limitations of appropriate techniques, resources, and modern engineering and IT tools, including prediction and modelling, to complex engineering problems (K2 and K6)",
    indicators: [
      "e1. Create modern engineering and IT tools, including prediction and modeling, to solve complex engineering problems",
      "e2. Select modern engineering and IT tools, including prediction and modeling, to solve complex engineering problems",
      "e3. Apply modern engineering and IT tools, including prediction and modeling, to solve complex engineering problems",
      "e4. Recognize limitations of appropriate techniques, resources and modern engineering and IT tools",
    ],
  },
  {
    po: "f)",
    text: "When solving complex engineering problems, analyze and evaluate sustainable development impacts* to: society, the economy, sustainability, health and safety, legal frameworks, and the environment (K1, K5, and K7)",
    indicators: [
      "f1. When solving complex engineering problems, analyze and evaluate sustainable development impacts to society",
      "f2. When solving complex engineering problems, analyze and evaluate sustainable development impacts to the economy",
      "f3. When solving complex engineering problems, analyze and evaluate sustainable development impacts to sustainability",
      "f4. When solving complex engineering problems, analyze and evaluate sustainable development impacts to health and safety",
      "f5. When solving complex engineering problems, analyze and evaluate sustainable development impacts to legal frameworks",
      "f6. When solving complex engineering problems, analyze and evaluate sustainable development impacts to the environment",
    ],
  },
  {
    po: "g)",
    text: "Apply ethical principles and commit to professional ethics and norms of engineering practice and adhere to relevant national and international laws. Demonstrate an understanding of the need for diversity and inclusion (K9)",
    indicators: [
      "g1. Apply ethical principles to engineering practice",
      "g2. Commit to professional ethics and norms of engineering practice",
      "g3. Adhere to relevant national and international laws",
      "g4. Demonstrate an understanding of the need for diversity and inclusion",
    ],
  },
  {
    po: "h)",
    text: "Function effectively as an individual, and as a member or leader in diverse and inclusive teams and in multi-disciplinary, face-to-face, remote and distributed settings (K9)",
    indicators: [
      "h1. Function effectively as an individual in diverse and inclusive teams and in multi-disciplinary, face-to-face, remote and distributed settings",
      "h2. Function effectively as a member in diverse and inclusive teams and in multi-disciplinary, face-to-face, remote and distributed settings",
      "h3. Function effectively as a leader in diverse and inclusive teams and in multi-disciplinary, face-to-face, remote and distributed settings",
    ],
  },
  {
    po: "i)",
    text: "Communicate effectively and inclusively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, taking into account cultural, language, and learning differences",
    indicators: [
      "i1. Communicate effectively and inclusively on complex engineering activities with the engineering community through comprehending and writing effective reports and design documentation taking into account cultural, language, and learning differences",
      "i2. Communicate effectively and inclusively on complex engineering activities with the engineering community through making effective presentations taking into account cultural, language, and learning differences",
      "i3. Communicate effectively and inclusively on complex engineering activities with society at large through comprehending and writing effective reports and design documentation taking into account cultural, language, and learning differences",
      "i4. Communicate effectively and inclusively on complex engineering activities with society at large through making effective presentations taking into account cultural, language, and learning differences",
    ],
  },
  {
    po: "j)",
    text: "Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one's own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments",
    indicators: [
      "j1. Apply knowledge and understanding of engineering management principles and economic decision-making to one's own work as a member and leader in a team",
      "j2. Apply knowledge and understanding of engineering management principles and economic decision-making to manage projects",
      "j3. Apply knowledge and understanding of engineering management principles and economic decision-making in multidisciplinary environments",
    ],
  },
  {
    po: "k)",
    text: "Recognize the need for, and have the preparation and ability for i) independent and life-long learning ii) adaptability to new and emerging technologies and iii) critical thinking in the broadest context of technological change (K8)",
    indicators: [
      "k1. Recognize the need for and have the preparation and ability for independent and life-long learning in the broadest context of technological change",
      "k2. Recognize the need for and have the preparation and ability for adaptability to new and emerging technologies in the broadest context of technological change",
      "k3. Recognize the need for and have the preparation and ability for critical thinking in the broadest context of technological change",
    ],
  },
  {
    po: "l)",
    text: "Demonstrate understanding of the skills required to be an entrepreneur and ability to apply entrepreneurial skills",
    indicators: [
      "l1. Demonstrate understanding of the skills required to be an entrepreneur",
      "l2. Demonstrate ability to apply entrepreneurial skills",
    ],
  },
];

export const poIndicatorsReference = "Document reference: ACC-MAN-02-01 (Version 1.0)";
