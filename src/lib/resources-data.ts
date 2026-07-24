export type ResourceType = "pdf" | "image";

export type Resource = {
  /** File name inside /public/resources */
  file: string;
  title: string;
  description: string;
  category: string;
  type: ResourceType;
};

const asset = (file: string) => `/resources/${file}`;

export const resourceCategories = [
  "Training Modules",
  "BAETE Modules",
  "Criteria & Standards",
  "SAR & Templates",
  "Diagrams",
] as const;

export const resources: Resource[] = [
  // Training Modules (1-8)
  { file: "Module-1.pdf", title: "Module 1", description: "Introduction to Outcome-Based Education (OBE) concepts and terminology.", category: "Training Modules", type: "pdf" },
  { file: "Module-2.pdf", title: "Module 2", description: "Program Educational Objectives (PEOs) and Program Outcomes (POs).", category: "Training Modules", type: "pdf" },
  { file: "Module-3.pdf", title: "Module 3", description: "Teaching & Assessment strategies aligned with course outcomes.", category: "Training Modules", type: "pdf" },
  { file: "Module-4.pdf", title: "Module 4", description: "Continuous Quality Improvement (CQI) processes and feedback loops.", category: "Training Modules", type: "pdf" },
  { file: "Module-5.pdf", title: "Module 5", description: "Complex Engineering Problems (CEP) and Complex Engineering Activities (CEA).", category: "Training Modules", type: "pdf" },
  { file: "Module-6.pdf", title: "Module 6", description: "Measuring and reporting Program Outcome attainment.", category: "Training Modules", type: "pdf" },
  { file: "Module-7.pdf", title: "Module 7", description: "Faculty, facilities, and institutional support for OBE.", category: "Training Modules", type: "pdf" },
  { file: "Module-8.pdf", title: "Module 8", description: "Self-Assessment Report (SAR) preparation guidance.", category: "Training Modules", type: "pdf" },

  // BAETE Modules
  { file: "BAETE-Module-3.pdf", title: "BAETE Module 3", description: "BAETE-specific guidance for teaching & assessment mapping.", category: "BAETE Modules", type: "pdf" },
  { file: "BAETE-Module-4.pdf", title: "BAETE Module 4", description: "BAETE-specific guidance for Continuous Quality Improvement.", category: "BAETE Modules", type: "pdf" },
  { file: "BAETE-Module-5.pdf", title: "BAETE Module 5", description: "BAETE-specific guidance for CEP & CEA classification.", category: "BAETE Modules", type: "pdf" },
  { file: "BAETE-Module-6.pdf", title: "BAETE Module 6", description: "BAETE-specific guidance for outcome attainment reporting.", category: "BAETE Modules", type: "pdf" },

  // Criteria & Standards
  { file: "BAETE-Accreditation-Criteria-Version-3.pdf", title: "BAETE Accreditation Criteria (v3.0)", description: "The full set of nine BAETE accreditation criteria, version 3.0.", category: "Criteria & Standards", type: "pdf" },
  { file: "BAC-Criteria.pdf", title: "BAC Criteria", description: "Bangladesh Accreditation Council criteria reference document.", category: "Criteria & Standards", type: "pdf" },
  { file: "ACC-MAN-02-v3-F.pdf", title: "ACC-MAN-02 (v3, Final)", description: "Accreditation manual — procedures and evaluation guidelines.", category: "Criteria & Standards", type: "pdf" },
  { file: "ACC-TMP-04-04-V3-F.pdf", title: "ACC-TMP-04-04 (v3, Final)", description: "Accreditation template covering Appendix A/B reference material.", category: "Criteria & Standards", type: "pdf" },
  { file: "QAC-ET-Report-BAETE-Version-3.pdf", title: "QAC-ET Report (BAETE v3.0)", description: "Quality Assurance Committee evaluation team report template.", category: "Criteria & Standards", type: "pdf" },

  // SAR & Templates
  { file: "SAR-Version-3.pdf", title: "SAR — Version 3", description: "Self-Assessment Report template, version 3.0, covering all nine criteria.", category: "SAR & Templates", type: "pdf" },
  { file: "OBE-Template-UGC.pdf", title: "OBE Template (UGC)", description: "University Grants Commission OBE curriculum template.", category: "SAR & Templates", type: "pdf" },
  { file: "PO-Indicators.pdf", title: "PO Indicators", description: "Sample performance indicators for each Program Outcome.", category: "SAR & Templates", type: "pdf" },

  // Diagrams
  { file: "Program-Outcomes.jpeg", title: "Program Outcomes", description: "Visual summary chart of the twelve Program Outcomes (POs).", category: "Diagrams", type: "image" },
  { file: "Knowledge-and-Attitude-Profile.jpeg", title: "Knowledge and Attitude Profile", description: "Diagram of the Knowledge & Attitude Profile (WK) taxonomy.", category: "Diagrams", type: "image" },
  { file: "Range-of-Complex-Engineering-Problem-Solving.jpeg", title: "Range of Complex Engineering Problem Solving", description: "Diagram illustrating the range of Complex Engineering Problems (WP).", category: "Diagrams", type: "image" },
  { file: "Range-of-Complex-Engineering-Activities.jpeg", title: "Range of Complex Engineering Activities", description: "Diagram illustrating the range of Complex Engineering Activities (EA).", category: "Diagrams", type: "image" },
].map((r) => ({ ...r, file: asset(r.file) }));
