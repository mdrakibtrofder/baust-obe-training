
# Implementation plan — three-phase content build

The three uploaded markdown files map to three distinct workstreams. I will do them in the order you specified: **review.md first** (fixes to existing pages), then **features.md** (new PO Indicators content + Criteria appendices), then **sar.md** (new SAR template section). All source text will be reproduced verbatim — no summarizing or shortening.

---

## Phase 1 — review.md (fix gaps in existing 6 pages)

Extend `src/lib/obe-data.ts` with the missing datasets, then patch each route. New interactive helpers as needed in `src/components/site/data-blocks.tsx` (numeric matrix, mapping heatmap, cycle diagram, tabs).

**Module 3** (`src/routes/module-3.tsx`) — add: Changes Required (5 items), CO Cycle diagram, Action Verbs table (from Appendix B), Affective Domain worked examples, PO category table (PO1–PO12 grouped with WK + CEP/CEA links), condensed WP/EA reference with cross-link to Framework, Embedded Controller Technology CO-PO mapping matrix, Question-to-CO mapping + Moderation Form + good-practice bullets, Digital Electronics Lab CO + assessment %, FYDP section (2 slides verbatim), Rubric design guidance (why + 3-step), PO Assessment worked write-ups (PO1/PO8/PO9).

**Module 4** (`src/routes/module-4.tsx`) — add OBE → OBA → CQI triangle diagram.

**Module 5** (`src/routes/module-5.tsx`) — add: 6 discussion-prompt examples (complicated vs complex), CEA group-work discussion prompt, PO/WK/WP/EA mapping matrix (Courses 1–7 + FYDP × 12 POs × 9 WKs × 7 WPs × 5 EAs), Worked Example 1 (Apartment Electrical Design + WP/EA breakdown tables), Worked Example 2 (Bangla Speech Recognition), Worked Example 3 (FYDP depression-prediction ML with WP+EA justifications), Worked Example 4 (Timbuktu bridge scenario + thinking-for-replacement list).

**Module 6** (`src/routes/module-6.tsx`) — add: Question-to-CO mapping table + good-practice bullets, Lab-course CO example + assessment-item breakdown, Lab Project rubric (Abstract/Breadboard/Veroboard/Viva/Presentation/Report with CO-PO + KPA tags), CO Attainment worked numeric example (10-student roster, CO1–CO4 with 70/40/50/70 %), PO Calculation worked example (Equal-Level vs Weighted-Level tables + PO bar chart PO1=49%…PO12=70%), POs × CEP/CEA classification table, CQI feedback-source table.

**Framework** (`src/routes/framework.tsx`) — add cross-links to Module 3/5/6, Bloom's Action Verbs reference tab, and a "v2.2 → v3.0 changes" callout linking to Criteria.

**Criteria** (`src/routes/criteria.tsx`) — add §4.0 Definitions pointer, §7.0 Manual pointer, References section, and cross-links to Framework and (new) SAR pages. Appendix A + B surfaced via a new dedicated route (see Phase 2).

**Cross-cutting** — add a shared "Related pages" component used at the bottom of Module 3, 5, 6, Framework and Criteria.

## Phase 2 — features.md (new content + menu items)

New route **`/po-indicators`** — full "List of a Suggested Sample PO Indicator" table (PO a–l with all sub-indicators a1…l2, verbatim), including the K1–K9 tags and the ACC-MAN-02-01 document reference.

New route **`/appendices`** — Appendix A (Version 2.2 → 3.0 comparison: PO table, WK table, WP table, EA table verbatim) + Appendix B (Bloom's Taxonomy Cognitive/Affective/Psychomotor + Revised Action Verbs table) + References list.

Criteria page also updated to point to `/appendices` where §5 references the tables.

Note: features.md Part 2 (main body of Accreditation Criteria Version 3.0) is already covered by the current Criteria page — I will cross-check every sub-criterion (i, ii, iii…) against features.md to verify verbatim wording and correct any drift, but will not duplicate the whole section.

## Phase 3 — sar.md (SAR Self-Assessment Report Template)

New top-level section **`/sar`** with sub-routes for each criterion (this is a large document — 764 lines — so it is broken up for navigability):

- `/sar` — SAR overview: front matter, guidelines for preparing the SAR, supplemental documents list, 150-page rule, AMS URL, Volume 1 vs Volume 2 structure, and a summary "completeness tracker" UI (interactive status pills per criterion — visual only, not persisted).
- `/sar/criterion-1` — Program Educational Objectives (1.1–1.4)
- `/sar/criterion-2` — Program Outcomes and Assessment (2.1–2.7 including 2.7.1–2.7.12 verbatim + 2.6.13)
- `/sar/criterion-3` — Curriculum and Teaching-Learning Processes (3.1–3.8 with duplicate 3.8.1 preserved and flagged as in-source)
- `/sar/criterion-4` — Interactions with the Industry
- `/sar/criterion-5` — Continuous Quality Improvement (5.1–5.4 with CQI loop diagrams)
- `/sar/criterion-6` — Students (with the empty template tables preserved)
- `/sar/criterion-7` — Faculty (with the "Criterion 5 typo" note preserved)
- `/sar/criterion-8` — Governance, Finance and Safety (with all template tables verbatim, including the finance and organogram tables)
- `/sar/criterion-9` — Academic Facilities and Technical Support
- `/sar/annexures` — Volume 2 Annexures A–M verbatim

All empty template tables from the source are rendered as visible skeleton tables. All the 📊 "Visualization suggestion" blocks from sar.md are surfaced as info callouts.

## Menu integration

The header nav is currently: Home · Framework · Criteria · Module 3 · Module 4 · Module 5 · Module 6.

New nav becomes a grouped structure (with mobile drawer support):

```text
Home
Framework
Criteria
Modules      ▾  (Module 3 · Module 4 · Module 5 · Module 6)
References   ▾  (PO Indicators · Appendices)
SAR Template ▾  (Overview · Criteria 1–9 · Annexures)
```

Home page (`src/routes/index.tsx`) is updated so the module menu section becomes a full "site map" — 3 tiles for Framework/Criteria/References, one tile per module, and a dedicated SAR Template tile with a link into `/sar`.

## Technical notes (for reference)

- Data files: `src/lib/obe-data.ts` expanded; two new data modules `src/lib/po-indicators.ts` and `src/lib/sar-data.ts` (per-criterion structured content, all strings verbatim from the markdown).
- New UI primitives in `src/components/site/data-blocks.tsx`: `MappingMatrix` (scrollable large matrix), `Diagram` (small SVG-based CO Cycle / OBE-OBA-CQI triangle / CQI loop), `WorkedExample` (collapsible), `StatusPill` (for SAR tracker), `MenuGroup` (nav dropdown), `RelatedPages` (cross-link block).
- SAR: each criterion is its own route file to keep bundle sizes reasonable. All routes get their own `head()` metadata (title/description/og:*) per project conventions.
- No backend / no persistence — SAR tracker pills are local UI state only.
- No changes to design tokens, fonts, or the overall theme.

## Deliverable

Every piece of text listed in the three markdown files will appear on the site verbatim. No summarization anywhere. Cross-links between related pages will be added so all six existing pages + new PO Indicators, Appendices and SAR sections are discoverable.

---

**Please confirm before I start**, or tell me if you want any of the following changed:

1. Should SAR criteria live under one long `/sar` scroll page instead of one route per criterion? (I recommend per-criterion routes for load time and deep-linking.)
2. For the "Related pages" cross-links — bottom-of-page block, or also inline callouts where a specific term is mentioned?
3. Is it OK to add "References" and "PO Indicators" as their own top-level menu items (grouped under a "References" dropdown), or would you prefer them as sub-items of another existing menu?

If everything looks good, I'll begin with Phase 1.
