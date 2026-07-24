# OBE Training Hub — Finalized Enhancement Plan

Decisions locked in with the user before any code changes:

| Decision point | Choice |
| :--- | :--- |
| SAR page content depth | **Full detail** from `sar.md` — every sub-point, every table, every annexure description, verbatim, plus the visualization mockups already drafted |
| Legacy SAR redirects | **None needed** — clean build, no SAR pages ever existed before this fix |
| Homepage revamp scope | **Larger redesign** — reorganize section order/layout, not just an in-place patch |
| Execution order | **Incremental** — SAR 404 fix first (it's a live bug), then homepage, then the 3 image-to-component conversions, then Module 3 integration, with a checkpoint between each |

This document is the single source of truth for the build. It is written and saved **before** any route/component file is touched, per the user's request.

---

## Confirmed root cause (SAR 404s)

`src/components/site/layout.tsx` defines a live nav group:

```
sarGroup.items = [
  { to: "/sar" },
  { to: "/sar/criterion-1" } ... { to: "/sar/criterion-9" },
  { to: "/sar/annexures" },
]
```

`src/routes/` has **no matching files** — only `index.tsx`, `__root.tsx`, `module-3.tsx`…`module-6.tsx`, `criteria.tsx`, `framework.tsx`, `appendices.tsx`, `po-indicators.tsx`. TanStack Router falls through to `NotFoundComponent` (already implemented cleanly in `__root.tsx`) for every SAR link. Fix = create the 11 missing route files; no router config changes needed since TanStack's file-based routing will pick them up automatically once created.

---

## Phase 1 — SAR routes (fixes the live 404 bug)

**New files to create**, each using the existing `PageHeader` / `Section` / `InfoCard` / `DataTable` components for visual consistency with `criteria.tsx` and `module-*.tsx`:

1. `src/routes/sar/index.tsx` — Overview & Guidelines: front-matter content from `sar.md` (guidelines for preparing the SAR, the 3 standard questions every sub-criterion should answer, supplemental documents list, 150-page limit, submission portal note).
2. `src/routes/sar/criterion-1.tsx` — PEOs: §1.1–1.4 in full (Mission/Vision, PEOs, Consistency with Mission, Attainment measurement process), Annexure C pointer.
3. `src/routes/sar/criterion-2.tsx` — POs & Assessment: §2.1–2.7 in full including the full PO1–PO12 (+2.6.13 additional PO) attainment write-up prompts, Table 2.2.1, Annexure D pointer. This is the longest criterion — will use an accordion (reusing the `CriterionAccordion` pattern from `criteria.tsx`) for the twelve individual PO sub-sections (2.7.1–2.7.12) so the page stays scannable.
4. `src/routes/sar/criterion-3.tsx` — Curriculum & Teaching-Learning: §3.1–3.8.2 full, including the course-content table shell, flow-chart instruction, WK/WP/EA/UN-SDG mapping requirement, culminating course vs. alternative approach, Annexure F pointer.
5. `src/routes/sar/criterion-4.tsx` — Industry: §4.1–4.2 full, Annexure G pointer.
6. `src/routes/sar/criterion-5.tsx` — CQI: §5.1–5.4.3 full (Quality Assurance System, feedback from 4 stakeholder groups, 3 CQI loops — PEO/PO/Course), Annexure H pointer.
7. `src/routes/sar/criterion-6.tsx` — Students: §6.1–6.4 full (admission, transfer, advising/counseling, extra-curricular), Annexure I pointer.
8. `src/routes/sar/criterion-7.tsx` — Faculty: §7.1–7.7 full (full-time/part-time rosters, class size, student-teacher ratio, faculty role, professional development, OBE training), Annexure J/K pointers.
9. `src/routes/sar/criterion-8.tsx` — Governance, Finance & Safety: §8.1–8.6.3 full (organogram, statutory bodies, policies, finance/budget tables, safety plan, fire systems, lab safety), Annexure L pointer.
10. `src/routes/sar/criterion-9.tsx` — Facilities: §9.1–9.4 full (library, classrooms, labs/equipment, internet/computing), Annexure M pointer.
11. `src/routes/sar/annexures.tsx` — Volume 2: Annexures A–M full descriptions plus the CV/course-syllabi format checklists (Annexure E, J).

**Shared additions:**
- `SarCriterionNav` component (breadcrumb + "Criterion N of 9" strip + prev/next links) so the 9 criterion pages read as a connected sequence, not 9 isolated pages — addresses the "no cross-linking" issue flagged in the earlier review.
- Each criterion page ends with a `RelatedPages` block (existing component) linking back to the matching Criteria-page criterion (5.1–5.9) and to Framework, closing the cross-link gap identified earlier.
- Visualization mockups from `sar.md` (PO attainment radar, CO→PO heatmap, CQI closed-loop diagram, prerequisite flowchart, completeness tracker) get rebuilt as real React/SVG components rather than pasted as raw HTML strings, matching the site's component conventions.

**Verification for Phase 1:** click through every `/sar*` nav link after build; confirm zero 404s; confirm breadcrumb prev/next works at both ends (Criterion 1 has no "prev", Criterion 9 has no "next", Annexures is the true last stop).

---

## Phase 2 — Homepage redesign (larger scope)

Reorganized section order:
1. **Hero** — keep radial background + stat strip, tighten copy, add a "start here" dual-CTA (Framework / SAR Template) instead of the current single CTA pair.
2. **NEW: "What's inside" overview strip** — 4-badge row (Framework · Criteria · Modules 3–6 · SAR Template) since SAR Template is currently completely invisible on the homepage even by name.
3. **Why OBE Training exists** — keep, tighten copy length.
4. **NEW: Traditional vs. OBE comparison callout** — promote the existing Module 3 "Traditional Educational Process vs. OBE" two-column content to a homepage teaser card (with a link through to Module 3), since it's a strong, scannable hook currently buried on an inner page.
5. **Modules & references grid** — restructure into badge-tagged categories: Core Framework / Accreditation Manual / Training Modules (3–6) / SAR Template — surfacing SAR Template as a first-class grid entry, not just a nav dropdown.
6. **"Where to find what" 4-step guide** — keep the 01–04 step pattern, add a 5th step for "Prepare your SAR" pointing at the new `/sar` routes.
7. Footer — unchanged.

All new sections reuse `card-elev`, `chip`, and the existing color tokens — no new design system introduced.

---

## Phase 3 — Convert 3 uploaded images into components

| Image | Target | Notes |
| :--- | :--- | :--- |
| Psychomotor Domain (7-category table: Perception/Set/Guided Response/Mechanism/Complex Overt Response/Adaptation/Origination × description + verbs) | New `AttributeTable`-based block in `data-blocks.tsx`, data in `obe-data.ts` as `psychomotorDomain` | Confirmed missing from Module 3 today — the page only has the shorter "activities/assessment" Psychomotor table, not this full definitional + verb-list version |
| Cognitive Domain: Action Verbs (Remember/Understand/Apply/Analyze/Evaluate/Create × verb lists) | New table component, data as `cognitiveActionVerbs` | Same content already transcribed verbatim into `features.md` Appendix B — reuse that transcription instead of re-deriving from the image |
| The Learning Pyramid (10/20/30/50/70/90% infographic) | New **SVG/HTML pyramid component**, not a static image or plain table | Needs to render responsively; will build as a stacked-trapezoid SVG with the % + activity + outcome labels, replacing the flat table currently on Module 3 |

All three become reusable, imported into Module 3 (and cross-linked from Framework/Criteria appendix sections where relevant).

---

## Phase 4 — Module 3 architectural integration plan

**Content sources:** the 11 previously identified gaps in Module 3 (Changes Required slide, CO Cycle diagram, Action Verbs, Affective worked examples, PO category table, Question-to-CO mapping + moderation form, Digital Electronics Lab example, Final Year Design Project section, rubric design rationale, PO Assessment write-ups for PO1/PO8/PO9) plus the 3 new image-sourced components from Phase 3.

**Architecture:**
- All content is added as new `<Section>` blocks directly inside `module-3.tsx`, in the same reading order as the source deck, rather than a separate nested route — Module 3 is a single long-form reference page by design (consistent with Module 4/5/6).
- Long, dense sub-content (Question Moderation Form + good-practice bullets, the 3 PO Assessment write-ups for PO1/PO8/PO9) uses an accordion pattern copied from `CriterionAccordion` in `criteria.tsx`, so the page doesn't become unreadably long.
- FYDP section becomes its own `<Section>` with a cross-link forward to Module 5 (which has the FYDP worked example) and Module 6 (which has PO attainment via FYDP) — closing the "FYDP scattered across 3 pages" issue.
- New arrays added to `src/lib/obe-data.ts`: `psychomotorDomain`, `cognitiveActionVerbs`, `learningPyramid`, `poCategoryMap` (the PO1–PO12 → Analysis/Responsibility/Workplace + CEP/CEA classification table shared with Module 6).
- No backend/schema changes required — this is a static content site with no database; "state management" is limited to local `useState` for accordions/tabs, matching existing patterns.

**Verification for Phase 4:** page-length check (split into sub-sections with anchor nav if it gets too long), confirm all new `<Section>` blocks render with existing Tailwind classes only (no new design tokens), confirm cross-links to Module 5/6 resolve.

---

## Execution order (as confirmed)

1. ✅ Plan finalized and saved to this file.
2. **Next:** Phase 1 — build the 11 SAR routes + shared nav component, verify no 404s. *(checkpoint before Phase 2)*
3. Phase 2 — homepage redesign. *(checkpoint before Phase 3)*
4. Phase 3 — 3 image-derived components, wired into Module 3. *(checkpoint before Phase 4)*
5. Phase 4 — remaining Module 3 content integration.

Each phase ends with a checkpoint back to the user before starting the next phase.
