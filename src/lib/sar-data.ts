// SAR — Self-Assessment Report Template (Version 3.0), ACC-TMP-04-04-V3.0
// Verbatim reproduction of Criteria 1–9, Certificate of Compliance, and Volume 2 Annexures.

export type SarBlock =
  | { kind: "para"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "heading"; text: string; level?: 3 | 4 }
  | { kind: "note"; text: string }
  | { kind: "viz"; text: string }
  | { kind: "table"; headers: string[]; rows: string[][]; caption?: string };

export type SarSection = { id: string; title: string; blocks: SarBlock[] };

export type SarCriterion = {
  slug: string;
  num: number;
  title: string;
  sections: SarSection[];
};

export const sarFrontMatter: SarBlock[] = [
  { kind: "heading", text: "Guidelines for preparing the SAR", level: 3 },
  { kind: "para", text: "The completed SAR must describe how the institution and the program comply with the BAETE benchmark in each criterion." },
  { kind: "para", text: "The following points should be noted while preparing the SAR:" },
  { kind: "bullets", items: [
    "The data and the information provided in the SAR must be adequate and supplemented by comments and discussions that will allow the evaluation team to perform a preliminary evaluation of the program based on the SAR.",
    "For any criteria and sub-criteria, the SAR is generally expected to address the following three questions with data, examples of cases and other supporting information to justify the assertions: (a) Is there a policy/process in place? (b) If 'yes', is the policy/process in practice? (c) Does any improvement mechanism exist for the policy/process? The challenges faced and how these were overcome during the enactment, implementation and improvement of each policy and process should also be described.",
    "The SAR must proactively and unambiguously identify the deviation from its policies where and when one exists.",
  ]},
  { kind: "heading", text: "Supplemental Documents", level: 3 },
  { kind: "para", text: "The following must be provided in the Annexure:" },
  { kind: "bullets", items: [
    "Latest copy of the prospectus and a copy of the latest academic calendar followed by the program under evaluation.",
    "A copy of the approval letter from the appropriate authority to establish the institution.",
    "Copy of the approval letter from the appropriate authority to establish the program.",
    "Copy of statutes/academic ordinances or equivalent documents.",
  ]},
  { kind: "para", text: "All other documents requested in the SAR template must be provided as annexures. The SAR should not exceed 150 pages, excluding annexures. The SAR must be submitted through the Online Accreditation Management System of BAETE (https://ams.baetebangladesh.org/). No hard copies are required." },
  { kind: "para", text: "The SAR document is organized as Volume 1 (General Information, Eligibility, Criteria 1–9, Certificate of Compliance) and Volume 2: Annexures." },
  { kind: "viz", text: "A single \"SAR completeness tracker\" dashboard — one row per Criterion (1–9) plus Annexures A–M, each with a status pill (Not started / In progress / Evidence attached / Complete)." },
];

export const sarCriteria: SarCriterion[] = [
  {
    slug: "criterion-1", num: 1, title: "Program Educational Objectives",
    sections: [
      { id: "1.1", title: "1.1 Mission and Vision Statement", blocks: [
        { kind: "bullets", items: [
          "State the institution's vision and mission.",
          "State the vision and mission of the department/faculty/school offering the program.",
          "Indicate how the mission statements of the institution and the department are aligned.",
        ]},
      ]},
      { id: "1.2", title: "1.2 Program Educational Objectives", blocks: [
        { kind: "bullets", items: [
          "State the program educational objectives.",
          "Describe the process of establishing the program educational objectives and stakeholders consulted, including industry, during the development of PEOs.",
          "List the program stakeholders. Describe how the program educational objectives meet the needs of the program stakeholders (e.g., faculty members, alumni, and employers of the program's graduates).",
          "Indicate how the program educational objectives are published and disseminated to various stakeholders.",
          "Indicate how the program educational objectives are realistic within the context of available resources.",
        ]},
      ]},
      { id: "1.3", title: "1.3 Consistency of the Program Educational Objectives with the Mission", blocks: [
        { kind: "para", text: "Describe how the program educational objectives are consistent with the Mission of the Institution or Department offering the program." },
      ]},
      { id: "1.4", title: "1.4 Process for Measurement of Attainment of the Program Educational Objectives", blocks: [
        { kind: "bullets", items: [
          "Describe the process of tracking the stakeholders (e.g., graduates and employers) and measuring the attainment of program educational objectives.",
          "Describe the assessment methods and tools, attainment criteria, etc., for each objective.",
          "Provide a summary of PEO attainment results. Include evidence and documents in the Annexure.",
        ]},
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 1 in Annexure C." },
        { kind: "viz", text: "A \"PEO Alignment Map\" — Sankey/flow diagram linking Institution Mission → Department Mission → each PEO → Stakeholder groups consulted. A separate horizontal bar chart for \"PEO attainment %\" per PEO, trended year-over-year." },
      ]},
    ],
  },
  {
    slug: "criterion-2", num: 2, title: "Program Outcomes and Assessment",
    sections: [
      { id: "2.1", title: "2.1 Program Outcomes (PO)", blocks: [
        { kind: "bullets", items: [
          "State the Program Outcomes.",
          "Describe the process of defining the Program Outcome. Provide evidence and supporting documents.",
        ]},
      ]},
      { id: "2.2", title: "2.2 Equivalence of the Program Outcomes", blocks: [
        { kind: "para", text: "Indicate how the Outcomes set by the Program are substantially equivalent to the twelve graduate attributes or Program Outcomes of BAETE. If the program outcomes are stated differently, map program outcomes with the outcomes provided in the BAETE accreditation criteria." },
      ]},
      { id: "2.3", title: "2.3 Course Outcomes (CO)", blocks: [
        { kind: "para", text: "State the course outcomes for each course the program uses to demonstrate the attainment of program outcomes." },
        { kind: "table",
          caption: "Table 2.2.1. Course outcomes, teaching-learning and assessment methods",
          headers: ["CO No.", "CO statement", "Corresponding PO", "Teaching-learning methods", "Assessment methods"],
          rows: [["(to be filled by program)","","","",""]] },
      ]},
      { id: "2.4", title: "2.4 Assessment of Course Outcomes", blocks: [
        { kind: "para", text: "Describe how the attainment of COs is assessed in each course, including the rubrics, where applicable. The assessment processes, attainment criteria and scale, and expected level of attainment should be clearly stated. Present a summarized assessment of the COs of the courses listed in Table 2.2.1. Evidence of CO assessments for the other courses offered by the department for the program should be included in the Annexure." },
      ]},
      { id: "2.5", title: "2.5 Documentation on Teaching-learning and Assessment and CO Attainment", blocks: [
        { kind: "para", text: "Describe how the program keeps documentation, including lecture plans, COs, course content, books, grading policy, assessment tools and samples of corresponding student works, and assessment of CO attainment." },
      ]},
      { id: "2.6", title: "2.6 Monitoring of Students' Academic Performance", blocks: [
        { kind: "para", text: "Describe the process for monitoring students' academic performance and indicate how the process is supporting the achievement of outcomes." },
      ]},
      { id: "2.7", title: "2.7 Attainment of Program Outcomes", blocks: [
        { kind: "para", text: "Provide a summary of the results of attainment of program outcomes for the most recent graduating cohort, whose attainment of program outcomes was measured. If transfer students are in the program, the attainment of their program outcomes must be demonstrated separately." },
        { kind: "para", text: "If the program uses final-year design projects, capstone projects, or other courses with substantial design components, list those projects' titles, including the supervisor's name(s) and group sizes." },
        { kind: "heading", text: "2.7.1 Attainment of PO1 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO1 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attributes (WK1 – WK4) are incorporated in PO1. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO1 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO1 is being attained." },
        { kind: "heading", text: "2.7.2 Attainment of PO2 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO2 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attributes (WK1 – WK4) and UN sustainable development goals are incorporated in PO2. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO2 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO2 is being attained." },
        { kind: "heading", text: "2.7.3 Attainment of PO3 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO3 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attribute WK5 is incorporated in PO3. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO3 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO3 is being attained." },
        { kind: "heading", text: "2.7.4 Attainment of PO4 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO4 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attribute WK8 is incorporated in PO4. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO4 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO4 is being attained." },
        { kind: "heading", text: "2.7.5 Attainment of PO5 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO5 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attributes WK2 and WK6 are incorporated in PO5. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO5 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO5 is being attained." },
        { kind: "heading", text: "2.7.6 Attainment of PO6 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO6 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attributes WK1, WK5 and WK7 are incorporated in PO6. Identify which attributes of the Range of Complex Engineering Problems (WP1 – WP7) are addressed through the attainment of PO6 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO6 is being attained." },
        { kind: "heading", text: "2.7.7 Attainment of PO7 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO7 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attribute WK9 is incorporated in PO7. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO7 is being attained." },
        { kind: "heading", text: "2.7.8 Attainment of PO8 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO8 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. State how Knowledge Profile attribute WK9 is incorporated in PO8. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO8 is being attained." },
        { kind: "heading", text: "2.7.9 Attainment of PO9 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO9 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. Identify the expected level of attainment. Identify which attributes of the Range of Complex Engineering Activities (EA1 – EA5) are addressed through the attainment of PO9 and provide evidence to support the assertion. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO9 is being attained." },
        { kind: "heading", text: "2.7.10 Attainment of PO10 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO10 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO10 is being attained." },
        { kind: "heading", text: "2.7.11 Attainment of PO11 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO11 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State how Knowledge Profile attribute WK8 is incorporated in PO11. State the expected level of attainment. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO11 is being attained." },
        { kind: "heading", text: "2.7.12 Attainment of PO12 or its equivalent", level: 4 },
        { kind: "para", text: "Describe how the attainment of PO12 is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which PO12 is being attained." },
        { kind: "heading", text: "2.6.13 Achievement of additional POs", level: 4 },
        { kind: "para", text: "(numbered 2.6.13 in the source template) Describe how the attainment of each additional PO (if any) is assessed and evaluated. State and justify the methods, tools, criteria and scale used in the assessment process. State the expected level of attainment for each of the additional POs. Present a summary of the results obtained after the assessment and analysis to demonstrate the extent to which each additional PO is being attained." },
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 2 in Annexure D." },
        { kind: "viz", text: "A 12-spoke radar/spider chart of PO attainment % (PO1–PO12) with a threshold ring at the program's defined attainment cut-off (e.g., 50%) — instantly shows which POs are weak. Pair with a CO→PO mapping heatmap (courses as rows, PO1–PO12 as columns, cell shaded by mapping strength C/P/A)." },
      ]},
    ],
  },
  {
    slug: "criterion-3", num: 3, title: "Curriculum and Teaching-Learning Processes",
    sections: [
      { id: "3.1", title: "3.1 Program-specific Criteria", blocks: [
        { kind: "para", text: "Describe how the program satisfies any applicable program criteria." },
      ]},
      { id: "3.2", title: "3.2 Breadth and Depth of the Curriculum", blocks: [
        { kind: "para", text: "Indicate how the breadth and depth of the curriculum are appropriate for solving complex engineering problems." },
      ]},
      { id: "3.3", title: "3.3 Course Content", blocks: [
        { kind: "para", text: "List all courses by subject categories. Subject categories may include engineering, mathematics, natural sciences, computing, humanities, social sciences and other non-engineering courses. Indicate whether these courses are Compulsory or Optional." },
        { kind: "table",
          headers: ["Course no. and title","Credit hours","Contact hours","The last three terms where the course was offered","No. of students registered","Compulsory/Optional"],
          rows: [
            ["Subject category 1","","","","",""],
            ["Course 1","","","","",""],
            ["Course 2","","","","",""],
            ["…","","","","",""],
            ["Subcategory total","","","","",""],
            ["Subject category 2","","","","",""],
            ["…","","","","",""],
          ]},
        { kind: "para", text: "Justify the adequacy of the courses of each category and their contents for attaining program outcomes." },
        { kind: "para", text: "Also, submit the detailed content of each course the program offers, including credit hours, contact hours, prerequisites and a list of the textbooks and reference books in the Annexure. The format of the detailed course content is in Annexure E of this template." },
      ]},
      { id: "3.4", title: "3.4 Flow Chart", blocks: [
        { kind: "para", text: "Submit a semester-by-semester flow chart or worksheet that depicts the prerequisite structure of the program's required courses." },
      ]},
      { id: "3.5", title: "3.5 Relation between Program Educational Objectives and Curriculum", blocks: [
        { kind: "para", text: "Describe how the curriculum and teaching-learning process support the attainment of program educational objectives." },
      ]},
      { id: "3.6", title: "3.6 Relation between Course Outcomes and Program Outcomes", blocks: [
        { kind: "para", text: "For each course, present a map of COs and POs. Alternatively, the following information may be presented graphically." },
      ]},
      { id: "3.7", title: "3.7 Knowledge Profile, Complex Engineering Problems, Complex Engineering Activities and UN-SDGs", blocks: [
        { kind: "para", text: "Demonstrate, through mapping, how each attribute of the Knowledge Profile (WK1 – WK9) is addressed in the curriculum. Provide a list of courses where complex engineering problems are included in the teaching-learning and assessment processes. Justify how the problems meet the requirements of complex engineering problems. Additionally, demonstrate how Complex Engineering Activities are incorporated into teaching-learning and assessment. Also, demonstrate how various United Nations Sustainable Development Goals (UN-SDGs) are considered in the teaching, learning and assessment." },
      ]},
      { id: "3.8", title: "3.8 Teaching-learning and Assessment", blocks: [
        { kind: "para", text: "Describe the teaching-learning methods and assessment tools used to address complex engineering problems and program outcomes. Indicate how the teaching-learning methods and assessment tools are effective and appropriate. Describe the process of designing and selecting appropriate assessment tools in different courses. Mention if there is any process (e.g., question moderation) to ensure the effectiveness and appropriateness of the assessment tools." },
        { kind: "heading", text: "3.8.1 Laboratory Activities", level: 4 },
        { kind: "para", text: "State how the program uses lab activities to support the attainment of program outcomes. Provide the list of experiments conducted in each lab course. Justify the appropriateness of the assessment tools used for lab activities." },
        { kind: "heading", text: "3.8.1 Culminating Course(s)", level: 4 },
        { kind: "para", text: "(numbered 3.8.1 again in the source template — a duplicate section number) Describe the process followed in the culminating course (e.g., final-year design project, capstone project) through which the program prepares its students for engineering practice through a major design experience based on the knowledge and attitudes acquired in earlier coursework and incorporating appropriate engineering standards and design constraints." },
        { kind: "heading", text: "3.8.2 Alternative Approach", level: 4 },
        { kind: "para", text: "If the program plans to prepare the students for engineering practice through any approach other than the final year design or capstone project courses, describe the process in detail, highlighting the appropriateness of the process." },
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 3 in Annexure F." },
        { kind: "viz", text: "A curriculum prerequisite flow diagram (Mermaid graph LR, semester-by-semester) satisfies §3.4 directly. A WK1–WK9 × course matrix heatmap and a stacked bar chart of credit-hour distribution by subject category (Engineering / Math / Natural Science / Computing / Humanities / Social Science) visualize §3.3 and §3.7 at a glance." },
      ]},
    ],
  },
  {
    slug: "criterion-4", num: 4, title: "Interactions with the Industry",
    sections: [
      { id: "4.1", title: "4.1 Process for Industry Participation in Curriculum Design and Review", blocks: [
        { kind: "para", text: "Explain how industrial participation is ensured in establishing, updating, and improving the objectives, outcomes, and curriculum to make these relevant to the industry's needs." },
        { kind: "para", text: "If there is an industrial advisory panel, list the names, designations and professional qualifications of the members of the program/department's industrial advisory panel. Indicate how the IAP broadly covers all relevant industry representatives. Describe the IAP's role in the curriculum design and review." },
        { kind: "para", text: "If the alumni association exists, describe its role in the curriculum design and review." },
        { kind: "para", text: "Comment on the effectiveness and sustainability of the entire process." },
      ]},
      { id: "4.2", title: "4.2 Students' Opportunities to Gain Industrial Experience", blocks: [
        { kind: "bullets", items: [
          "State whether the students in the program are required to perform an industrial internship. If yes, describe the nature and the duration of the internship. Explain how student performance during the internship is assessed.",
          "State whether the industry is engaged in final-year design projects or other design projects. If yes, provide details regarding the industry's involvement in selecting the project topic, supporting activities, and providing an assessment. Provide relevant evidence.",
          "State whether the students in the program are required to visit relevant industries. If yes, provide details regarding the nature of such visits. Explain how the industrial visit supports students gaining industrial exposure.",
          "State any other activities the program uses to provide students with the opportunity to obtain industrial experience. Provide relevant evidence.",
        ]},
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 4 in Annexure G." },
        { kind: "viz", text: "A timeline/Gantt view of industry-touchpoints across the 4-year program (internship window, IAP meeting cadence, industrial visits, FYDP industry co-supervision) makes §4.2 easy to audit at a glance." },
      ]},
    ],
  },
  {
    slug: "criterion-5", num: 5, title: "Continuous Quality Improvement",
    sections: [
      { id: "5.1", title: "5.1 Quality Assurance System", blocks: [
        { kind: "para", text: "Describe the quality assurance system that the program has under an institutional framework. Mention its organogram, the name and qualifications of the person occupying each position, the terms of reference of the system, the budget, and the activities conducted. Describe how the quality assurance system's activities support the program in continuous improvement." },
      ]},
      { id: "5.2", title: "5.2 Feedback on Student's Academic Performance", blocks: [
        { kind: "para", text: "Describe the process of providing continuous feedback to students regarding their academic performance. Describe measures that are in place to help academically weaker students." },
      ]},
      { id: "5.3", title: "5.3 Stakeholders' Feedback", blocks: [
        { kind: "heading", text: "5.3.1 Feedback from Students", level: 4 },
        { kind: "para", text: "Describe the process of collecting feedback from students. Indicate how the gathered feedback is used in continuous improvement." },
        { kind: "heading", text: "5.3.2 Feedback from Faculty Members", level: 4 },
        { kind: "para", text: "Describe the process of collecting feedback from Faculty Members. Indicate how the gathered feedback is used in continuous improvement." },
        { kind: "heading", text: "5.3.3 Feedback from Alumni", level: 4 },
        { kind: "para", text: "Describe the process of collecting feedback from program Alumni. Indicate how the gathered feedback is used in continuous improvement." },
        { kind: "heading", text: "5.3.4 Feedback from Employers", level: 4 },
        { kind: "para", text: "Describe the process of collecting feedback from the employers of the program graduates. Indicate how the gathered feedback is used in continuous improvement." },
      ]},
      { id: "5.4", title: "5.4 CQI Loops", blocks: [
        { kind: "heading", text: "5.4.1 CQI Loop for PEO", level: 4 },
        { kind: "bullets", items: [
          "Describe the CQI processes for PEOs.",
          "Discuss how various stakeholders' evaluation results and feedback are systematically utilized to improve the PEOs continuously.",
          "Provide copies of documents (survey results, analysis reports, meeting minutes) to justify each statement.",
        ]},
        { kind: "heading", text: "5.4.2 CQI Loop for PO", level: 4 },
        { kind: "bullets", items: [
          "Describe the CQI processes for POs. Discuss how the results of direct and indirect assessments, including feedback from various stakeholders, are systematically utilized to improve the PO attainments continuously.",
          "Provide copies of documents (survey results, assessment and analysis reports, meeting minutes, etc.) to justify each statement.",
        ]},
        { kind: "heading", text: "5.4.3 CQI Loop for Courses and Curriculum", level: 4 },
        { kind: "para", text: "Describe the CQI processes for courses and curriculum. Discuss how various stakeholders' assessment results and feedback are systematically utilized to continuously improve the COs, their attainments, and the curriculum. To justify each statement, provide copies of documents (survey results, assessment and analysis reports, meeting minutes)." },
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 5 in Annexure H." },
        { kind: "viz", text: "A closed-loop CQI cycle diagram (Feedback → Analysis → Action → Change → back to Feedback) for each of PEO / PO / Course-Curriculum, annotated with the actual cadence (e.g., \"PEO: every 3 yrs\", \"PO: annually\", \"Course: every semester\") turns this into an audit-ready visual." },
      ]},
    ],
  },
  {
    slug: "criterion-6", num: 6, title: "Students",
    sections: [
      { id: "6.1", title: "6.1 Policy for Student Admission", blocks: [
        { kind: "para", text: "Describe the admission policy and process for admitting new students into the program (attach published brochures/guidelines and website address). Discuss if any exceptions are made to the admission policy in admitting students. Mention how the policy is disseminated publicly. State any preferences/priorities in admissions/quotas. In tabular form, provide the number of students admitted into the program for each semester/term of the last three academic years. Explain how the admission requirements ensure the selection of students who have the potential to attain the POs." },
        { kind: "table",
          headers: ["Academic year","Calendar span (from–to)","Semester/Term I","Semester/Term II","Semester/Term III"],
          rows: [["","","","",""]] },
      ]},
      { id: "6.2", title: "6.2 Policy for Transfer Students", blocks: [
        { kind: "para", text: "Describe the policy and process for accepting transfer students into the program (attach published brochures/guidelines and website address). Mention the process of determining the equivalence of transfer credits. Provide information on the transfer of students as in the following table for the last three academic years." },
        { kind: "table",
          headers: ["Name and ID of the student","Year and Semester/Term of transfer","Number of transferred credits","Course titles","Name and location of the institution and name of the program from where credits were earned"],
          rows: [["","","","",""]] },
      ]},
      { id: "6.3", title: "6.3 Advising and Counseling", blocks: [
        { kind: "para", text: "Describe the process of providing academic advising to the students. If each student is assigned a faculty member as a designated advisor, provide advisor information for the three most recent semesters/terms, as per the following table." },
        { kind: "table",
          headers: ["Name of the faculty member","Designation","No. of advisees assigned"],
          rows: [["","",""]] },
        { kind: "para", text: "Discuss the nature of the advising activities with examples. State whether the advisors maintain advising files or any other records of advising. Describe in detail whether the department/institution provides professional and mental health counseling support to students in need. Describe in detail whether the department/institution provides career counseling and placement support to students. If international students are studying in the institution, discuss the nature of the designated support facility for the international students." },
      ]},
      { id: "6.4", title: "6.4 Extra- and Co-curricular Activities", blocks: [
        { kind: "para", text: "State the policy of the institution/department, if any exists, regarding students' extra- and co-curricular activities. State how these activities are encouraged/supported institutionally and by the department. List students under the program who have participated in various extra- and co-curricular activities at the institutional level or higher in the past three academic years. Additionally, list notable achievements involving students from the program, if any. State the opportunities for the student to get involved in the activities of the relevant professional societies. Justify whether the students' workload enables them to participate in extra and co-curricular activities." },
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 6 in Annexure I." },
        { kind: "viz", text: "A stacked column chart of admissions by semester/term across three academic years (§6.1), plus a simple bar chart of student-to-advisor ratio per faculty advisor (§6.3) to flag overload." },
      ]},
    ],
  },
  {
    slug: "criterion-7", num: 7, title: "Faculty",
    sections: [
      { id: "7.1", title: "7.1 Full-time Faculty Members", blocks: [
        { kind: "para", text: "Provide a list of full-time faculty members teaching in the program for each semester of the last academic year, as per the following table. Please include similar lists for the previous two academic years in the Annexure. State whether the program has sufficient qualified faculty members with relevant areas of specialization to teach all the courses offered." },
        { kind: "table",
          headers: ["Name","Designation","Area of specialization","Highest academic degree","Years of experience – Teaching","Years of experience – Industrial (if any)","Date of joining this institution","Total weekly teaching load (in hours)"],
          rows: [["","","","","","","",""]] },
        { kind: "para", text: "Additionally, provide detailed curriculum vitae for each faculty member in the Annexure. The format of the faculty curriculum vitae is given in Annexure J of this template." },
      ]},
      { id: "7.2", title: "7.2 Part-time Faculty Members", blocks: [
        { kind: "para", text: "Provide a list of part-time faculty members teaching in the program for each semester during the last academic year, as per the following table. Please include similar lists for the previous two years in the Annexure." },
        { kind: "table",
          headers: ["Name","Designation","Area of specialization","Highest academic degree","Years of experience – Teaching","Years of experience – Industrial (if any)","Total weekly teaching load (in hours)"],
          rows: [["","","","","","",""]] },
        { kind: "para", text: "Additionally, provide detailed curriculum vitae in the Annexure for each faculty member. The format of the faculty curriculum vitae is given in Annexure J of this template." },
      ]},
      { id: "7.3", title: "7.3 Class Size", blocks: [
        { kind: "para", text: "State the minimum class size (number of students), the maximum class size and the average class size of all the courses/sections offered by the program for each semester during the last three academic years. State whether the class size suits teaching-learning and assessment activities to achieve all the course outcomes. In the Annexure, provide a list of all the courses/sections offered by the program, including the class size and the instructor's name, for each semester during the last three academic years." },
      ]},
      { id: "7.4", title: "7.4 Student-teacher Ratio", blocks: [
        { kind: "para", text: "Calculate the student-teacher ratio of the program for each semester during the last three academic years. Describe in detail the calculation procedure and justify the appropriateness of the adopted calculation model. State whether the student-teacher ratio is suitable for conducting the teaching-learning and assessment activities to achieve all the course outcomes and for adequate interactions between teachers and students outside of class." },
      ]},
      { id: "7.5", title: "7.5 Role of Faculty Members in Coordinating and Improving the Courses", blocks: [
        { kind: "para", text: "Describe in detail the role of the faculty members in establishing course outcomes, selecting appropriate pedagogical and assessment tools, updating course content, and making decisions regarding quality improvements to the program. Attach copies of the minutes of relevant meetings held during the last three academic years in the Annexure to support this assertion." },
      ]},
      { id: "7.6", title: "7.6 Professional Development", blocks: [
        { kind: "para", text: "Summarize to what extent the faculty members are engaged in research, development, and professional activities that promote the attainment of the institutional mission and vision and how students benefit from these activities. The institutional support provided to the faculty members to further enhance academic and professional development should also be mentioned." },
        { kind: "para", text: "Complete the following table for the full-time faculty members in service in the current semester." },
        { kind: "table",
          headers: ["Name","Designation","No. of journal/conference papers published in the last three years","No. of consulting positions during the last three years","List of professional society activities in the last one year"],
          rows: [["","","","",""]] },
      ]},
      { id: "7.7", title: "7.7 Training of Faculty Members on Outcome-based Education", blocks: [
        { kind: "para", text: "Provide data on faculty members' training on outcome-based education. Justify how the activities conducted by the program/institutions are adequate for the faculty members to train them in establishing appropriate course outcomes, conducting effective teaching-learning activities, conducting suitable assessments, and measuring outcome achievement." },
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 7 in Annexure K (the source template's footer for this section says \"Criterion 5\" — likely a template typo; the annexure letter K is explicitly assigned to Criterion 7 in the Table of Annexures)." },
        { kind: "viz", text: "A trend line of student-teacher ratio across the last 6 semesters (§7.4) against a BAETE-acceptable band; a pyramid/age-distribution chart of senior vs. junior faculty (§ full-time roster) to visualize the \"good blend of senior and junior faculty\" requirement referenced in Criterion 5.7 of the Accreditation Criteria." },
      ]},
    ],
  },
  {
    slug: "criterion-8", num: 8, title: "Governance, Finance and Safety",
    sections: [
      { id: "8.1", title: "8.1 Background Information", blocks: [
        { kind: "para", text: "Describe in no more than 300 words the institution's background and the program under evaluation." },
      ]},
      { id: "8.2", title: "8.2 Organizational Structure", blocks: [
        { kind: "para", text: "Provide an up-to-date organogram of the institution." },
      ]},
      { id: "8.3", title: "8.3 Statutory Positions and Bodies of the Institution", blocks: [
        { kind: "heading", text: "8.3.1 Appointment of Statutory Positions", level: 4 },
        { kind: "para", text: "State the process for appointing the following key statutory positions or equivalent as per the applicable Act/Ordinance/Statute/Rule of the institution:" },
        { kind: "table",
          headers: ["Appointment of","Appointing/approving authority","Date and period of appointment","Reference to clause/section/article of Act/Statute/Rule*"],
          rows: [
            ["Vice Chancellor","","",""],
            ["Pro-Vice Chancellor","","",""],
            ["Treasurer","","",""],
            ["…","","",""],
          ]},
        { kind: "para", text: "*Refer to any published documents other than acts/statutes/rules if necessary.*" },
        { kind: "heading", text: "8.3.2 Formation and Function of the Statutory Bodies", level: 4 },
        { kind: "para", text: "For the syndicate, the academic council, the finance committee, the faculty selection committee, the disciplinary committee, and any other statutory committee, state the committee's assigned responsibility (as per act/ordinance/statutes). Prepare a table for each committee as follows." },
        { kind: "table", headers: ["Name and affiliation of member","Membership capacity","From – to"], rows: [["","",""]] },
        { kind: "para", text: "Comment briefly on the alignment of the actual activities of each committee with the assigned responsibilities." },
        { kind: "para", text: "List the meeting date(s) of each statutory body during the last calendar year. Attach a copy of each committee's most recent meeting notice in the Annexure. Also, please fill out the following table." },
        { kind: "table", headers: ["Committee name","Reference to meeting notices in Annexure"], rows: [["",""]] },
        { kind: "heading", text: "8.3.3 Formation and Function of the Management Committees", level: 4 },
        { kind: "para", text: "Institutions often form committees in addition to statutory bodies for the smoother running of academic and administrative activities. For each such committee, state the committee's assigned responsibility. Prepare a table for each committee as follows." },
        { kind: "table", headers: ["Name and affiliation of member","Membership capacity","From – to"], rows: [["","",""]] },
        { kind: "para", text: "Comment briefly on the alignment of the actual activities of each committee with the assigned responsibilities." },
        { kind: "para", text: "List the meeting date(s) of each management committee during the last calendar year. Attach a copy of each management committee's most recent meeting notice in the Annexure. Also, please fill out the following table." },
        { kind: "table", headers: ["Committee Name","Reference to meeting notices in Annexure"], rows: [["",""]] },
      ]},
      { id: "8.4", title: "8.4 Existence of and Adherence to Policies", blocks: [
        { kind: "heading", text: "8.4.1 Documented Policies", level: 4 },
        { kind: "para", text: "Provide a list of policies in practice in the Institution. Provide copies of the statutes, the ordinances and any other relevant policies such as service rules, academic rules, codes of conduct, disciplinary rules, recruitment and promotion policies, salary structure, leave rules, grievance redressal, and scholarship and financial aid policies for students and employees in the Annexure. Describe how each of these policies is disseminated to the stakeholders. Also, discuss how these policies foster social responsibility, diversity and inclusivity." },
        { kind: "heading", text: "8.4.2 Adherence to Policies", level: 4 },
        { kind: "para", text: "Describe the extent to which the policies are adhered to when making academic and administrative decisions. The process for making exceptions, if any exist, should be outlined. Additionally, list the cases of exception requests received in the last academic years and indicate the instances in which exceptions were made. Discuss how the effectiveness of the policies is evaluated and the processes followed to update a policy. Give relevant examples, where applicable, to justify assertions." },
      ]},
      { id: "8.5", title: "8.5 Finance and Budget", blocks: [
        { kind: "heading", text: "8.5.1 Assets Commensurate with Revenue", level: 4 },
        { kind: "para", text: "Complete the following table for the last three calendar years." },
        { kind: "table",
          headers: ["Information about the Institution","Year 1","Year 2","Year 3"],
          rows: [
            ["Total income (BDT)","","",""],
            ["Total capital investment (BDT)","","",""],
            ["Total operational expenditure (BDT)","","",""],
            ["Total asset (BDT)","","",""],
          ]},
        { kind: "heading", text: "8.5.2 Adequacy of Budget", level: 4 },
        { kind: "para", text: "State the amount budgeted, the actual expenditure in BDT, and the percentage of the total amount for the following sectors for the last three calendar years. In case of shared budgetary allocation and expenditure, identify that sector(s) from the following:" },
        { kind: "bullets", items: [
          "Salary of the faculty members of the institution and the program under evaluation",
          "Salary of the non-teaching staff of the institution and the program under evaluation",
          "Scholarships and financial aid disbursed to students of the institution of the program under evaluation, including the number of students receiving the support",
          "Laboratories of the institution and the program under evaluation",
          "Physical infrastructure (space, furniture, air conditioners)",
          "Information Technology (IT)",
          "Maintenance",
          "Medical center",
          "Co-curricular and extra-curricular activities",
          "Student affairs support and placement facilities",
          "Library",
        ]},
        { kind: "para", text: "Briefly discuss whether the budgeted amounts are adequate for the proper running of the program under evaluation. If they are not, indicate the sectors where inadequacy exists. Identify what measures are being taken to address the inadequacies." },
        { kind: "heading", text: "8.5.3 Appropriateness of Budgetary Allocation", level: 4 },
        { kind: "para", text: "Describe the budgetary planning process, identifying priority areas and resource allocation. Additionally, describe the general process of preparing and approving the budget, including feedback from the stakeholders." },
      ]},
      { id: "8.6", title: "8.6 Safety Plan and its Implementation", blocks: [
        { kind: "heading", text: "8.6.1 Safety Plan", level: 4 },
        { kind: "para", text: "Describe the institution's safety plan that addresses risk from manmade or natural hazards, including fire detection and suppression and incident and accident management in the laboratories. Indicate whether the institution has considered any other hazard in its safety plan (e.g., earthquake, injury, personal safety, specific needs (disability), etc.). For the emergency procedure and services, provide the following information:" },
        { kind: "bullets", items: [
          "A list of emergency contacts: whom to call for support (e.g., fire/police/ambulance, campus security, first-aider)",
          "Information on emergency management team: who plays what role during an emergency",
          "Evacuation procedure: includes floor plans with detailed locations of emergency exits, evacuation routes, and safety equipment",
          "Emergency procedure: includes who should be contacted, at what stages, and the best means of contact; where to find emergency kits, first aid officers and supplies and instructions; if possible, scenario-based solution for emergencies",
          "After emergency procedure: steps to be taken immediately after an emergency has occurred — whom to notify, how to notify and when to notify",
          "Test procedure for emergency plan: evacuation drills, fire drills, etc.",
        ]},
        { kind: "para", text: "Provide details on what measures the institution is taking to make the campus safe, including training on mandatory safety requirements, risk management procedures, safe work instructions, etc." },
        { kind: "heading", text: "8.6.2 Fire Detection and Suppression Systems", level: 4 },
        { kind: "para", text: "Provide details on the following to justify the adequacy of the safety plan in managing fire safety:" },
        { kind: "bullets", items: [
          "Existing fire detection and suppression system",
          "Means of escape – exits, signs and illumination",
          "Human resources – list of trained personnel with details on their training",
          "Inspection, testing and maintenance procedures of fire suppression systems",
          "Records of fire drills and evacuation drills",
        ]},
        { kind: "para", text: "Indicate how the existing fire detection and suppression systems are adequate to make the campus safe." },
        { kind: "heading", text: "8.6.3 Laboratory Safety", level: 4 },
        { kind: "para", text: "Provide the laboratory safety documentation. It may be a common document for all laboratories, or laboratories may have it individually. The safety documentation must indicate the following:" },
        { kind: "bullets", items: [
          "Defined authority, roles and responsibilities of staff and students",
          "Laboratory Safety Guidelines",
          "Location of laboratory safety systems & equipment",
          "Induction and training procedure for students and staff",
          "Risk assessment of laboratory works",
          "Safe work instructions for experimentation or other lab works",
          "Emergency process in place",
          "Incident reporting process",
          "Addressing radiation, bio and chemical hazards (when applicable)",
        ]},
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 8 in Annexure L (source template footer again reads \"Criterion 5\" here — a repeated template typo; Annexure L is explicitly mapped to Criterion 8 in the Table of Annexures)." },
        { kind: "viz", text: "A 3-year grouped bar chart of budgeted vs. actual spend per sector (§8.5.2) with a \"% of total\" secondary axis; a simple floor-plan style evacuation-route diagram for §8.6.1; an organogram (org-chart) diagram for §8.2." },
      ]},
    ],
  },
  {
    slug: "criterion-9", num: 9, title: "Academic Facilities and Technical Support",
    sections: [
      { id: "9.1", title: "9.1 Library", blocks: [
        { kind: "heading", text: "9.1.1 Space and Hours of Operation", level: 4 },
        { kind: "para", text: "State the total space allocated for the library and the number of students served by the library. State the library's operating hours." },
        { kind: "heading", text: "9.1.2 Library Resources", level: 4 },
        { kind: "para", text: "In the following table, provide information on books, journals, proceedings, and other resources related to the institution and the program. Justify whether these resources are adequate for the program's students and faculty members." },
        { kind: "table",
          headers: ["Category","No. of titles (applicable for the whole institution)","No. of titles (applicable for the program)"],
          rows: [
            ["Books (hard copy)","",""],
            ["Books (electronic)","",""],
            ["Journals (hard copy)","",""],
            ["Journals (electronic)","",""],
            ["Proceedings (hard copy)","",""],
            ["Proceedings (electronic)","",""],
            ["Others","",""],
          ]},
        { kind: "para", text: "Describe how IT and other modern technologies have influenced the library's use, operation and record-keeping for users and library officials." },
      ]},
      { id: "9.2", title: "9.2 Classrooms", blocks: [
        { kind: "para", text: "Describe the number, usage, and facilities of classrooms available for the program. Justify whether these resources are adequate for the program." },
      ]},
      { id: "9.3", title: "9.3 Laboratories and Equipment", blocks: [
        { kind: "heading", text: "9.3.1 Laboratories for all Relevant Courses of the Curriculum", level: 4 },
        { kind: "para", text: "List all the laboratory courses and the corresponding names and locations of the laboratories where the classes are conducted. Prepare a table for each semester of the last academic year." },
        { kind: "table",
          headers: ["Serial number","Course no. and name","Laboratory name","Location of the lab (campus/building/floor/room #)"],
          rows: [["","","",""]] },
        { kind: "heading", text: "9.3.2 Availability of Equipment", level: 4 },
        { kind: "para", text: "For each laboratory, prepare a table using the following format." },
        { kind: "para", text: "Name of the laboratory: ___________" },
        { kind: "table",
          headers: ["Serial number","Name of the equipment","Quantity","Date and cost of purchase","Present condition"],
          rows: [["","","","",""]] },
        { kind: "heading", text: "9.3.3 Full-time Technical Support Staff for Laboratories", level: 4 },
        { kind: "para", text: "For each laboratory, list the full-time technical support personnel according to the following table." },
        { kind: "table",
          headers: ["Name of laboratory","Name of person","Designation","Qualification (education, training)","Experience (years)"],
          rows: [["","","","",""]] },
        { kind: "heading", text: "9.3.4 Improvements of Laboratory Facilities", level: 4 },
        { kind: "para", text: "Describe the improvements made in the program's laboratories during the last three academic years. Describe the plans currently under consideration for laboratory improvement." },
      ]},
      { id: "9.4", title: "9.4 Internet and Computing Facilities", blocks: [
        { kind: "para", text: "List the Internet facilities available for students and faculty members. Required information includes the number of computers with Internet connections, total bandwidth, areas covered by Wi-Fi, various hardware and software tools, daily available services, remote accessibility, etc." },
        { kind: "para", text: "List the number of laboratories, including the number of computers accessible to students outside of class/lab times. Identify the types of uses that are available to students. Computers in the library or any other commonplace may be considered if such facilities are available." },
        { kind: "para", text: "Justify the adequacy of the internet and computing facilities for the staff and students." },
        { kind: "note", text: "Provide the documentation supporting the claims under Criterion 9 in Annexure M (source template footer reads \"Criterion 5\" here as well — a repeated template typo; Annexure M is explicitly mapped to Criterion 9 in the Table of Annexures)." },
        { kind: "viz", text: "A donut chart of library resource composition (hard-copy vs. electronic, books vs. journals vs. proceedings) for §9.1.2; a lab-equipment \"age & condition\" scatter/bubble chart (purchase year vs. condition, bubble size = quantity) for §9.3.2; a coverage map/heatmap for Wi-Fi/computing availability across campus buildings for §9.4." },
      ]},
    ],
  },
];

export const sarCertificate = {
  title: "Certificate of Compliance",
  paragraphs: [
    "By signing below, we certify that all the information given in this Self-Assessment Report (SAR) for the accreditation of the __________________ (Name of program) is correct to the best of our knowledge.",
    "It is also attested that this report is prepared in compliance with the BAETE Accreditation Manual for Undergraduate Engineering Programs.",
  ],
  signatories: [
    { role: "Name of the Head of the Department", fields: ["Signature", "Date"] },
    { role: "Name of the Head of the Institution", fields: ["Signature", "Date"] },
  ],
};

export const sarAnnexures = [
  { letter: "A", title: "Document related to Eligibility Criteria",
    body: "Provide documents relating to the program's eligibility criteria, including approval documents, a calculation showing the program meets the minimum credit hours required by BAETE and certificates of transcripts of all undergraduate programs offered by the Department/School." },
  { letter: "B", title: "Certificate and Statement from BAETE (For Renewal Only)",
    body: "Provide the recent accreditation certificate and final statement received from BAETE." },
  { letter: "C", title: "Documents related to Criterion 1",
    body: "Provide all documents required to support the chapter's content relating to Criterion 1." },
  { letter: "D", title: "Documents related to Criterion 2",
    body: "Provide all documents required to support the chapter's content relating to Criterion 2." },
  { letter: "E", title: "Course Content",
    body: "The detailed content of each course the program offers should be included in the Annexure as directed in Section 3.3 of the SAR template.",
    format: [
      "Course number and title",
      "Credit hours",
      "Contact hours",
      "Course Prerequisites",
      "Course Instructor/coordinator",
      "Brief description of the course contents",
      "List of Text/Reference books including title, author, edition, publisher and year",
    ]},
  { letter: "F", title: "Documents related to Criterion 3",
    body: "Provide all documents required, in addition to those provided in Annexure E, to support the chapter's content relating to Criterion 3." },
  { letter: "G", title: "Documents related to Criterion 4",
    body: "Provide all documents required to support the chapter's content relating to Criterion 4." },
  { letter: "H", title: "Documents related to Criterion 5",
    body: "Provide all documents required to support the chapter's content relating to Criterion 5." },
  { letter: "I", title: "Documents related to Criterion 6",
    body: "Provide all documents required to support the chapter's content relating to Criterion 6." },
  { letter: "J", title: "Faculty Curriculum Vitae",
    body: "The curriculum vitae of the faculty members should be included in the Annexure as directed in sections 7.1 and 7.2 of the SAR template. Please use the following format to prepare the curriculum vitae (maximum two pages) for each faculty member under the program:",
    format: [
      "Name",
      "Designation",
      "Educational qualification (start from highest) – degree, discipline, institution, year",
      "Academic experience (most recent first) – institution, designation, period (mm/yyyy–mm/yyyy), type (full-time or part-time)",
      "Non-academic experience (research, industrial) – organization, title/position, period (mm/yyyy–mm/yyyy), type (full-time or part-time)",
      "Fellowship/membership of academic bodies and professional organizations",
      "Honors and awards",
      "List of significant publications and presentations in the five most recent years – title, names of the author(s), name of the journal/conference where published/presented, month and year of publication or presentation",
      "List of Professional Consultancy and Sponsored Research activities in the five most recent years – organization, the title of the consultancy/research project, the amount received, if any, year",
    ]},
  { letter: "K", title: "Documents related to Criterion 7",
    body: "Provide all documents required, in addition to those provided in Annexure J, to support the chapter's content relating to Criterion 7." },
  { letter: "L", title: "Documents related to Criterion 8",
    body: "Provide all documents required to support the chapter's content relating to Criterion 8." },
  { letter: "M", title: "Documents related to Criterion 9",
    body: "Provide all documents required to support the chapter's content relating to Criterion 9." },
];
