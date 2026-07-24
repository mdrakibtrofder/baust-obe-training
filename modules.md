# Modules 3–6 — Content Gap Check (against uploaded decks)

Cross-checked the live site (`src/routes/module-3.tsx` through `module-6.tsx`) against the four uploaded source decks: `BAETE_Module_3.pdf`, `BAETE_Module_4.pdf`, `BAETE_Module_5.pdf`, `BAETE_Module_6.pptx`. This is a status update on the same gaps identified in the earlier `review.md` audit — Module 3 has since been fully integrated (Phase 4); Modules 4, 5 and 6 have not been touched yet. Good news: the data for nearly every remaining gap is **already staged** in `src/lib/module-extras.ts` (added by a parallel Lovable build pass) — this phase is mostly wiring, not new content authoring.

Nothing has been changed in the codebase yet. This file is for your review/approval before I start.

---

## Module 3 — ✅ Resolved (no action needed)

All 11 previously-identified gaps (Changes Required, CO Cycle diagram, PO category table, Affective worked examples, Embedded Controller CO-PO mapping, Question-to-CO mapping, Digital Electronics Lab example, FYDP section, rubric rationale, PO Assessment write-ups, plus the 3 image-derived components) were integrated in the last pass and verified against `BAETE_Module_3.pdf`. Nothing further found missing on re-check.

---

## Module 4 — Continuous Quality Improvement

**1 gap, small.** Everything else in `BAETE_Module_4.pdf` (18 slides) is already on the page.

| # | Missing content | Source | Notes |
|---|---|---|---|
| 1 | **"CQI Process: The Link" diagram** — the OBE (Education) → OBA (Outcome-Based Assessment) → CQI (Quality Improvement) triangle | Deck p.17 | Small conceptual diagram showing how the three processes connect. No data currently staged in `module-extras.ts` — would need a small new component (3-node triangle/cycle, similar to the CO Cycle diagram just added to Module 3). |

---

## Module 5 — Complex Engineering Problems & Activities

**6 gaps**, all example/discussion content — the core framework tables are already correct and complete. Data for all 6 is already staged in `module-extras.ts` (`complicatedVsComplexPrompts`, `ceaGroupWorkPrompt`, `mappingMatrixCourses` + `mappingMatrix`, `workedExamples`).

| # | Missing content | Source | Staged data |
|---|---|---|---|
| 1 | Discussion: 6 complicated-vs-complex example prompts (CNC machining center, storm-surge defense, campus fiber network, microgrid, turbocharger, edge-computing network) | Deck p.15–16 | `complicatedVsComplexPrompts` ✅ |
| 2 | Discussion: "Can a group work solving a problem of mechanics be considered a Complex Engineering Activity?" | Deck p.22 | `ceaGroupWorkPrompt` ✅ |
| 3 | PO/WK/WP/EA mapping matrix (Course 1–7 + FYDP × 12 POs × 9 WKs × 7 WPs × 5 EAs) | Deck p.25–26 | `mappingMatrixCourses` + `mappingMatrix` ✅ |
| 4 | Worked Example 1 — In-class Assignment: Apartment Electrical Design (brief + WP/EA breakdown) | Deck p.27–29 | `workedExamples[0]` (id `we1`) ✅ |
| 5 | Worked Example 2 — Open-ended Design Lab: Bangla Speech Recognition (brief + WP breakdown) | Deck p.30–31 | `workedExamples[1]` (id `we2`) ✅ |
| 6 | Worked Example 3 — FYDP: Depression Prediction using ML (brief + WP/EA breakdown) | Deck p.35–36 | `workedExamples[2]` (id `we3`) ✅ |
| 6b | Worked Example 4 — Timbuktu Replacement Bridge (brief + "thinking for design" list) | Deck p.41–43 | `workedExamples[3]` (id `we4`) ✅ |

---

## Module 6 — Outcome Attainment

**7 gaps**, all worked/numeric examples — the definitions, directives, and rules are already correct and complete. Data for all 7 is already staged in `module-extras.ts`.

| # | Missing content | Source | Staged data |
|---|---|---|---|
| 1 | Question-to-CO mapping table + good-practice bullets | pptx slides 15–16 | `module6QuestionCoMapping` ✅ (good-practice bullets reuse Module 3's `questionMappingGoodPractices`) |
| 2 | CO Assessment in Lab Courses — full worked example (CO1–CO4 × PO/KPA/delivery/tools) + assessment breakdown | pptx slides 19–20 | `module6LabExample` ✅ |
| 3 | Assessment Rubrics of a Lab Project — detailed marking scheme (Abstract/Breadboard/Veroboard/Viva/Presentation/Report) | pptx slide 23 | `module6LabRubric` ✅ |
| 4 | CO Attainment worked numeric example — 10-student roster, CO1–CO4 raw scores, 70/40/50/70% attained | pptx slide 26 | `coAttainmentRoster` ✅ |
| 5 | PO Calculation worked example — Equal-Level vs Weighted-Level methodology + 3-course CO-PO mapping + PO report bar chart (PO1=49%…PO12=70%) | pptx slides 34–36 | `poCalcEqualLevel`, `poCalcCourseMap`, `poResult` ✅ |
| 6 | POs: CEP and CEA classification table (all 12 POs tagged CEP/CEA/neither) | pptx slide 28 | `cepCeaClassification` ✅ (already added to Module 3 — will cross-link rather than duplicate) |
| 7 | CQI feedback-source table (CQI Area → Primary Feedback Source) | pptx slide 41 | `cqiFeedbackTable` ✅ |

---

## Summary

| Module | Gaps found | Data already staged? | New component work needed |
|---|---|---|---|
| 3 | 0 (resolved) | — | — |
| 4 | 1 | No | Small — one 3-node triangle/cycle diagram |
| 5 | 6 | Yes, all 6 | Reuse/extend patterns already built for Module 3 (worked-example cards, mapping matrix table) |
| 6 | 7 | Yes, all 6 of 7 (CEP/CEA classification already exists, will cross-link) | A PO-attainment bar chart (can reuse a simple SVG bar, similar style to the Learning Pyramid) |

**Total new content to wire in: 14 items across Modules 4, 5, 6.** Since 13 of 14 already have data staged, this is primarily a matter of building a handful of reusable display components (worked-example card, large mapping-matrix table, small bar chart, small triangle diagram) and inserting `<Section>` blocks in each module page — the same pattern used for Module 3.

Waiting for your go-ahead before starting implementation.
