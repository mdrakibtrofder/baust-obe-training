# Site Content Review — Module 3–6, Framework, Criteria

This review compares what is currently live on the site (`src/routes/module-3.tsx`, `module-4.tsx`, `module-5.tsx`, `module-6.tsx`, `framework.tsx`, `criteria.tsx`) against the underlying source presentations and documents (`BAETE_Module_3.pdf`, `BAETE_Module_4.pdf`, `BAETE_Module_5.pdf`, the Module 6 pptx/PDF, `BAETE Accreditation Criteria Version 3.pdf`, and `documents/engineering_framework_tables_and_outcomes.md`). The goal is to identify missing content, content that could be enhanced, and any connection/consistency issues between pages — nothing here has been changed in the codebase; it is a punch list for a future update.

---

## Module 3 — Outcome-Based Teaching, Learning & Assessment

**Source:** `BAETE_Module_3.pdf` (62 slides, "Training on OBE and Accreditation, 26–27 June 2026")

The page (`src/routes/module-3.tsx`) is the most complete of the four module pages and mirrors the deck closely — constructive alignment, learner types, Bloom's cognitive/affective/psychomotor tables, SMART COs, worked Bloom examples, CO assessment (theory/lab), and the learning pyramid are all present and accurate to the source.

**Missing / not carried over to the site:**

1. **"Changes Required" slide (deck p.6)** — the five changes needed to move to OBE (course content review, teaching-learning methods, assessment/evaluation tools, data/evidence collection, effective OBE management system) are not represented anywhere on the page. This is a good, concise framing slide that's currently absent from the site.
2. **CO Cycle diagram (deck p.17, "Course Outcomes: Wording Matters")** — the Teaching → Learning → Assessment → Students feedback loop, plus the point that "instructor should ask: what assessment or learning activity will help students reach the intended learning outcome" is not on the site. The site jumps from "wording matters" concepts straight to SMART.
3. **Cognitive Domain: Action Verbs slide (deck p.29)** — referenced as an image-based slide in the source; the site has the Bloom's level table but no actual action-verb list. (Cross-reference: the fuller verb list *is* present in `BAETE Accreditation Criteria Version 3.pdf`, Appendix B "Revised Bloom's Taxonomy Action Verbs" — see Framework/Criteria note below. Pulling that table into Module 3 would close this gap and reduce duplication risk.)
4. **Affective Domain — Teaching-Learning-Assessment worked examples (deck pp.31–33)** — the site has the Affective Domain *table* (Receiving/Responding/Valuing/Organization/Characterization) but not the four worked CO+Assessment examples the deck provides for Receiving, Responding, Valuing, Organization, and Characterization. These are good "how to write it" examples that reinforce the earlier Cognitive worked examples section, but are currently missing.
5. **Program Outcomes category table (deck p.36)** — "Program Outcomes – An Engineering Program" groups PO1–PO12 into Analysis of problems/synthesis of solution, Responsibility, and Required in the workplace, and explicitly links each group to WK attributes and to whether it falls under Complex Engineering Problem Solving (PO1–PO6) vs Complex Engineering Activities (mapped with PO9). This categorization is not shown anywhere on the site (including Module 5 and Framework, which cover POs from a different angle) and would be a valuable addition — it's the clearest single table tying PEO/PO/CO, WK, and CEP/CEA together.
6. **Complex Engineering Problem/Activity attribute code tables (deck pp.37–38)** — Module 3's own condensed versions of the WP1–WP7 and EA1–EA5 tables (with the "WP1 + at least 2 of WP2–WP7" rule restated) are omitted from the site page, though this content does appear on Module 5 and the Framework page. Not a gap per se (avoids duplication) but worth a "see Framework/Module 5" cross-link since the site currently doesn't link between related modules.
7. **Example CO-PO Mapping (Embedded Controller Technology, deck p.39)** — a second, different CO-PO mapping worked example (with the C/P/A domain tags and a mapping matrix) beyond the Algorithms example that is on the site. Only the Algorithms example made it to the site; the Embedded Controller Technology example and its CO×PO checkbox matrix format are missing.
8. **Mapping of Questions to COs / Question Moderation Form (deck pp.43–46)** — this whole thread (why map questions to COs, the moderation form template with Bloom-level columns, question evaluation criteria, and "good practice" cautions) is not on the site at all. This is process-level, exam-writing guidance that complements the CO assessment section already on the page and is a substantive omission.
9. **CO Assessment — Digital Electronics Lab example (deck p.49)** — the site includes general lab-course guidance and a PO-to-assessment example table (Investigation/Modern Tool Usage/Individual & Teamwork/Communication), but the specific Digital Electronics Lab CO table + assessment % breakdown from the deck is not reproduced.
10. **Final Year Design Project section (deck pp.50–51, two slides)** — entirely missing from the site. This covers why FYDP/Capstone is central to OBE, which POs it primarily evidences (PO4, PO6, PO8, PO10, PO11, PO12), and the explicit statement that "Thesis/Projects typically done by 4th-year students in our country do not satisfy the requirements of the Capstone Project." Given how often FYDP comes up in Module 5's CEP/CEA examples and Module 6's PO attainment discussion, this is a meaningful gap — the site currently has no dedicated FYDP content anywhere.
11. **Rubric design guidance (deck pp.52–54)** — "why you need rubrics" (the six symptom bullets: rewriting same comments, high marking load, students questioning requirements, etc.) and the generic "How to Make a Rubric" 3-step method are not on the site. The site jumps straight to worked rubric examples (Teamwork, Presentation, Modern Tool Usage) without this framing.
12. **PO Assessment section (deck pp.59–61)** — three worked PO-assessment write-ups (PO1 with CEP embedded, PO8 without CEP, PO9 with CEA embedded) that walk through exactly what a SAR should state for each PO (methods/tools/criteria/scale, expected attainment level, WK mapping, WP/EA mapping, results summary) are not on the site. This content overlaps substantially with Module 6 (which does cover PO attainment) — worth deciding whether it belongs in Module 3, Module 6, or cross-linked between both, but currently it exists in neither location on the site.

**Enhancement opportunities:**
- Add a "Related modules" or "See also" cross-link block, since Module 3, Module 5 and Module 6 content clearly overlaps (WK/WP/EA tables, PO assessment, rubrics) but the pages don't reference each other.
- Consider pulling the Bloom's Action Verbs table from the Accreditation Criteria appendix into Module 3 rather than leaving it undocumented anywhere on the site.

---

## Module 4 — Continuous Quality Improvement

**Source:** `BAETE_Module_4.pdf` (18 content slides + Q&A close)

This is the most faithfully and completely reproduced module — essentially every slide's content (outcome of session, CQI components, stakeholders, feedback sources by stakeholder type, analysis/improvement actions, records of evidence, CQI cycle, course-level example, exercise) appears on the site page in equivalent or expanded form.

**Missing / minor gaps:**

1. **"CQI Process: The Link" diagram (deck p.17)** — the OBE (Education) → OBA (Assessment) → CQI (Quality Improvement) triangle, showing how OBE, Outcome-Based Assessment, and CQI relate as three linked processes, is not represented on the site page. This is a small but conceptually useful diagram that's currently dropped.
2. The deck's closing slides show this was followed by a live **Question-Answer session** (not substantive content, no action needed, just noting the module's structure ends differently in the source).

**Overall:** Module 4 needs the least work of the four — only the OBE/OBA/CQI triangle diagram is worth adding.

---

## Module 5 — Complex Engineering Problems & Activities

**Source:** `BAETE_Module_5.pdf` (62 slides / "BAETE OBE Training • Module 5")

The site page captures the core framework well (Engineers/Technologists/Technicians, the three-layer WK→WP→EA→PO model, the WK1–WK9 table, the WP1–WP7 table with the "WP1 + 2 of WP2–WP7" rule, the WP1 knowledge-attribute sub-table, complicated-vs-complex discussion, the EA1–EA5 table, implementation guidance, aspects-to-consider chips, and the summary/warning) — but the source deck is example-heavy, and nearly all of the worked examples are missing from the site.

**Missing / not carried over to the site:**

1. **Discussion prompt (deck p.15, "Can we differentiate between complex engineering problem and complicated engineering problem?")** and the **follow-up discussion list of six example problems** (5-axis CNC machining center, coastal storm-surge defense, campus fiber network, decentralized microgrid, turbocharger design, edge-computing network) used as classroom discussion prompts — none of these six practice prompts appear on the site, which currently only shows the complicated-vs-complex comparison table without the interactive discussion examples.
2. **Discussion prompt on CEA (deck p.22, "Can a group work solving a problem of mechanics be considered as a Complex Engineering Activity? Why? Why not?")** — this discussion question is not on the site.
3. **PO/WK/WP/EA mapping matrix example (deck pp.25–26, "Mapping Example")** — a large matrix showing Course 1–7 (and FYDP) mapped against all 12 POs, all 9 WKs, all 7 WPs, and 5 EAs is entirely absent from the site. This is arguably the single most useful practical artifact in the deck (a template programs could adapt for their own curriculum mapping), and it's currently not represented in any form — not even a simplified version.
4. **Worked Example 1 — In-class Assignment (deck pp.27–29, three slides)** — the "apartment electrical design" assignment, including the full assignment brief, the "Which WPs Are Addressed?" breakdown (WP1/WP2/WP3 justification with a rubric-performance-indicator table), and the "Which EAs Are Addressed?" breakdown (with its own PI table) — none of this three-slide worked example is on the site.
5. **Worked Example 2 — Open-ended Design Lab (deck pp.30–31, two slides)** — the Bangla Speech Recognition system lab example, with its "Which Ps Are Addressed?" rubric-PI table (WP1, WP3, WP5 justified) — not on the site.
6. **Worked Example 3 — FYDP Project (deck pp.35–36, two slides)** — the depression-prediction machine-learning FYDP example, including the motivation/objective/challenges narrative and the "Addressing CEP and CEA through the FYDP" breakdown (WP1, WP2, WP3, WP4, WP7 and EA1, EA2, EA3, EA5 all individually justified against the project) — not on the site. This is the clearest available example connecting FYDP specifically to CEP/CEA attribute justification, and its absence compounds the FYDP gap already noted in Module 3.
7. **Worked Example 4 — Complex Problem Solving / Timbuktu bridge (deck p.41)** — the replacement-bridge-design scenario (used to motivate the "aspects to consider" discussion that *is* on the site) is missing its actual problem statement; the site shows the aspect chips and takeaway but not the scenario that grounds them.
8. **"Thinking for Replacement Bridge Design" (deck p.43)** — site vs weather/materials/design/costing/scheduling considerations list that accompanies the bridge example above — also missing (tied to gap #7).

**Enhancement opportunities:**
- Given how example-heavy this deck is and how thin the site page is on examples, Module 5 is the strongest candidate for a follow-up content pass: at minimum, add the PO/WK/WP/EA mapping matrix (as a simplified, non-scrolling version) and one full worked example (the FYDP one connects best to the rest of the site).
- The two "discussion prompt" moments (complex vs. complicated examples, and the CEA group-work question) could become an interactive quiz/reveal component consistent with the training/workshop tone of the source material.

---

## Module 6 — Outcome Attainment

**Source:** Module 6 PPTX (`documents/BAETE_Module_6.pptx`, 43 slides, cleanest available source) and the corresponding scanned PDF (`documents/Module-6.pdf`, OCR-verified against the pptx).

The site page covers the core structure well: CO/PO/PEO definitions, where each is measured, the SAR/Manual directive quotes, assessment methods (direct/indirect + survey table), CO assessment considerations, a theory-course CO-PO mapping example, an assessment-item breakdown, rubric requirements, attainment thresholds (student-level and course-level criteria), PO attainment guidance, PEO attainment, and the CQI closing section.

**Missing / not carried over to the site:**

1. **Mapping of Questions to COs (slides 15–16)** — the Mid/Final/Assignment-to-CO mapping table (CO1→Q1/Q3, CO2→Q2/Q1, CO3→Q4-Q5/Q2 with a checkmark, CO4→Q3/Q5-Q6) and the accompanying good-practice bullets (keep it simple, not all questions need mapping, mapped questions must be compulsory, one question shouldn't map multiple COs, avoid excessive breakdown) are not on the site page at all. This directly parallels the same gap identified in Module 3 (deck pp.43–46) — worth fixing in one place and cross-linking, or fixing in both since each module presents it with different framing (Module 3 = "why", Module 6 = worked example with actual Q-numbers).
2. **CO Assessment in Lab Courses — full example (slides 19–20)** — the site's Module 6 does not include the specific lab-course example table (CO1–CO4 mapped to PO2/PO3/PO9/PO8 with K/P/A domain tags, delivery methods, and assessment tools) or the accompanying assessment-item breakdown (Active class participation 30%, Lab report 10%, Mid-term 20%, Project 40%, with per-CO checkmarks). The site page has a *theory*-course example table but no equivalent *lab*-course table, even though lab-course assessment is explicitly discussed in bullet form.
3. **Assessment Rubrics of a Lab Project — detailed marking scheme (slide 23)** — the fully worked rubric (Abstract submission 10, Breadboard demo 20, Veroboard demo 20, Individual viva 10, Presentation 10, Report 10 — each tagged with its CO-PO pairing, criteria/remarks, and K/P/A codes) is not on the site. The site has generic "rubrics required for..." categories but not this concrete numeric example.
4. **CO Attainment worked numeric example (slides 26)** — a full 10-student roster with CO1–CO4 raw scores and the resulting "% attained" row (70%/40%/50%/70%) that demonstrates exactly how Criterion 1 (student-level, 55% threshold per the pptx — the site's Module 6 says the program sets this, using "55%" implicitly matching the pptx's "if a student receives 55% of the marks... the student attains that CO" example) and Criterion 2 (course-level, 50% of students) combine — this concrete numeric walk-through is missing from the site, which currently only states the two criteria in the abstract ("Criterion 1: Student Level" / "Criterion 2: Course Level" cards) without the worked numbers.
5. **PO Calculation worked example (slides 34–36)** — the Equal-Level vs Weighted-Level PO calculation methodology (with the CSE course/CO/domain/level table), the three-course CO-PO mapping table used to aggregate a PO score, and the resulting bar-chart-style PO report (PO1=49%...PO12=70%, with the "only PO1 not attained" observation) are not on the site. The site states the PO attainment *rule* ("if PO assessment score is greater than 50%, PO attained") but omits the entire worked calculation walkthrough that makes the rule concrete — this is one of the more valuable, exam-ready worked examples in the whole training series and is currently absent.
6. **POs: CEP and CEA classification table (slide 28)** — a table explicitly classifying all 12 POs as CEP, CEA, or neither (PO1–PO6 = CEP; PO9 = CEA; PO7, PO8, PO10, PO11, PO12 = neither) is not on the site. This table would strongly reinforce (and is consistent with) the "Program Outcomes category table" gap already flagged in Module 3 (deck p.36) — the two decks describe the same classification from different modules, and neither version currently appears on the site.
7. **CQI feedback-source table (slide 41)** — a compact "CQI Area → Primary Feedback Source" table (COs → course instructors/students; POs → stakeholders incl. graduates; PEOs → graduates & employers; Curriculum/teaching quality → faculty & students) is not shown on the site's Module 6 CQI section, though similar stakeholder-feedback content does exist on Module 4.

**Enhancement opportunities:**
- The PO Calculation worked example (gap #5) and the CO Attainment worked numeric example (gap #4) are the two highest-value additions — both are concrete, numeric, and directly answer "how do I actually compute this," which the current page describes only in words/rules.
- Consider a shared "PO ↔ CEP/CEA classification" component used by both Module 3 and Module 6, since both source decks present essentially the same table.
- The OCR of the scanned Module-6.pdf was noisy; the pptx (`BAETE_Module_6.pptx`) is the clean, authoritative source and should be treated as canonical going forward if this content is expanded.

---

## Framework page (`src/routes/framework.tsx`)

**Source:** `documents/engineering_framework_tables_and_outcomes.md` (already a clean markdown extraction) and cross-checked against `BAETE Accreditation Criteria Version 3.pdf`, Section 6.0.

The Framework page reproduces Tables 6.1 (WK1–WK9), 6.2 (WP1–WP7), 6.3 (EA1–EA5), and the 12 Program Outcomes accurately and completely against both the markdown source and the official Accreditation Criteria document — no content gaps found here relative to Version 3.0.

**Enhancement opportunities (no missing content, but connectivity/consistency issues):**

1. **No link to the Accreditation Manual's version history for these tables.** The Accreditation Criteria document's Appendix A contains a detailed **Version 2.2 → Version 3.0 comparison** for every PO, every WK, every WP and every EA attribute (old wording vs. new wording) — this is valuable context (e.g., PO7 in v2.2 was about Sustainability, PO7 in v3.0 is about Ethics; the WK/WP/EA codes themselves were renamed from K/P/A to WK/WP/EA). None of this version-history context is surfaced on the Framework page, even though the Criteria page does show a general revision-history table. Someone consulting a program that was accredited under v2.1/v2.2 would have no way to reconcile old numbering with the new tables shown here.
2. **No cross-links to Module 3/5/6**, all of which reproduce condensed versions of these same three tables. A reader landing on Framework has no signal that Module 3 (PO-category table), Module 5 (WK/WP/EA in depth, with examples), and Module 6 (PO×CEP/CEA classification) all build on this exact content.
3. The Bloom's Taxonomy appendix (cognitive/affective/psychomotor tables + the full Revised Action Verbs table) lives in `BAETE Accreditation Criteria Version 3.pdf` Appendix B but has no home on the site at all — Module 3 has Bloom's tables (sourced from the module deck, not the Accreditation Criteria appendix) but the site never surfaces the appendix's full action-verb table. Worth deciding whether this belongs on Framework (as a fifth reference tab) or Module 3.

---

## Criteria page (`src/routes/criteria.tsx`)

**Source:** `documents/BAETE Accreditation Criteria Version 3.pdf` (ACC-TMP-04-04-V3.0)

This page is thorough and accurate: all nine criteria (5.1–5.9) are reproduced with their intros and every sub-criterion (i, ii, iii...), the Purpose/Scope section matches the source's §1.0/§2.0, and the revision-history table (§8.0) matches exactly, including the version 3.0 note about criteria being rearranged and "Governance, Finance and Safety" being a merger of two former criteria.

**Missing / not carried over to the site:**

1. **§3.0 Roles and Responsibilities and §4.0 Definitions and Acronyms** are present in the source (§3.1 Engineering programs applying for BAETE Accreditation; §3.2 BAETE's role; §4.0 pointer to ACC-MAN-06) but only §3.1/§3.2 content appears folded into the site's "Purpose & scope" section as two InfoCards ("Engineering programs applying for BAETE Accreditation" and "BAETE") — the §4.0 Definitions and Acronyms pointer ("See ACC-MAN-06 for definitions and acronyms") is not mentioned anywhere on the site page. Minor, but a reader has no indication that a separate definitions document exists.
2. **§6.0 Tables (6.1, 6.2, 6.3) are not reproduced on the Criteria page at all** — this is intentional non-duplication since they live on the Framework page, but the Criteria page doesn't link to Framework, so a reader going through Criterion 5.2/5.3 (which explicitly reference WK1–WK9, WP1–WP7, EA1–EA5 by name) has no way to jump to where those tables actually live.
3. **§7.0 "The BAETE Accreditation Manual, SOPs, Templates, Flowcharts, Schedule, and Work Instructions" (pointer to ACC-MAN-00)** is not mentioned on the site.
4. **Appendix A (Version 2.2 → 3.0 detailed comparison tables)** — same gap as noted on the Framework page; this content exists only in the source PDF and nowhere on the site.
5. **Appendix B (Bloom's Taxonomy + Revised Action Verbs)** — same gap as noted on the Framework page.
6. **References section (§ end of doc)** — the three references (BAETE website link, Bloom's taxonomy source, Anderson & Krathwohl 2001 citation) are not shown on the site, though this is minor/optional for a training-hub page.

**Enhancement opportunities:**
- Add a small "Related reference" callout linking Criteria ↔ Framework ↔ SAR template, since a reader preparing a SAR (which structurally mirrors these nine criteria almost 1:1 — see `sar.md`) currently has no signposting between the Criteria page (what's required) and where the SAR template (how to report it) or the Framework tables (WK/WP/EA definitions referenced throughout) live.
- Consider surfacing the Version 2.2→3.0 PO wording changes (Appendix A) as an optional expandable "What changed in v3.0" panel per criterion/PO, since several programs transitioning between versions will need exactly this comparison.

---

## Cross-cutting observations (all six pages)

1. **No inter-page cross-linking exists anywhere in the current site.** Module 3, 5, and 6 all reference the WK/WP/EA framework and PO/CEP/CEA classification; Criteria references the same tables; none of the six pages link to any other. This is the single most consistent structural gap across the whole review.
2. **FYDP/Capstone content is scattered and incomplete.** Module 3 omits its own two FYDP slides; Module 5 has FYDP examples but the site drops them; Module 6 references FYDP implicitly (via PO attainment) without detail. No single page currently gives FYDP the dedicated treatment the source material affords it across three different decks.
3. **The PO↔CEP/CEA classification table** appears in two source decks (Module 3 p.36, Module 6 slide 28) in compatible but non-identical form, and is currently on neither the Module 3 nor Module 6 site pages, nor on Framework or Criteria. This is the most-referenced-yet-least-visible piece of content across the whole review.
4. **Worked/numeric examples are consistently the first thing cut** when going from source deck to site page (Module 3's PO assessment write-ups, Module 5's four worked examples, Module 6's PO calculation walkthrough). If a future pass has to prioritize, restoring worked examples over restating rules in the abstract would add the most practical value, since the current pages already state the *rules* correctly — they're just missing the "here's how it looks with real numbers" reinforcement the training decks provide.
5. **Version-history/appendix material (Bloom's action verbs, v2.2→v3.0 comparison tables) has no home on the site at all.** It exists in the source PDF but wasn't ported to either Framework or Criteria, which are the two most likely destinations.

---

## Summary table

| Page | Completeness vs. source | Highest-value addition |
| :--- | :--- | :--- |
| Module 3 | Strong core, several worked examples/sections missing | FYDP section (deck pp.50–51) + Question-to-CO mapping (pp.43–46) |
| Module 4 | Nearly complete | OBE/OBA/CQI triangle diagram (p.17) |
| Module 5 | Core framework complete, almost all worked examples missing | PO/WK/WP/EA mapping matrix (pp.25–26) + FYDP example (pp.35–36) |
| Module 6 | Strong core, worked numeric examples missing | PO Calculation worked example (slides 34–36) + CO attainment numeric example (slide 26) |
| Framework | Complete vs. Section 6.0 | Cross-links to Module 3/5/6 + v2.2→v3.0 comparison tables |
| Criteria | Complete vs. Section 5.0 | Cross-links to Framework/SAR + Appendix A/B surfacing |
