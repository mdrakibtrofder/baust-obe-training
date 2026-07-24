import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/annexures")({
  head: () => ({
    meta: [
      { title: "SAR · Volume 2 — Annexures A–M — OBE Training" },
      { name: "description", content: "SAR template Volume 2: the full list of Annexures A through M, including the course-content and faculty CV formats." },
    ],
  }),
  component: Annexures,
});

const annexures: { code: string; title: string; body: string }[] = [
  { code: "A", title: "Documents related to Eligibility Criteria", body: "Provide documents relating to the program's eligibility criteria, including approval documents, a calculation showing the program meets the minimum credit hours required by BAETE, and certificates of transcripts of all undergraduate programs offered by the Department/School." },
  { code: "B", title: "Certificate and Statement from BAETE (For Renewal Only)", body: "Provide the recent accreditation certificate and final statement received from BAETE." },
  { code: "C", title: "Documents related to Criterion 1", body: "Provide all documents required to support the chapter's content relating to Criterion 1." },
  { code: "D", title: "Documents related to Criterion 2", body: "Provide all documents required to support the chapter's content relating to Criterion 2." },
  { code: "F", title: "Documents related to Criterion 3", body: "Provide all documents required, in addition to those provided in Annexure E, to support the chapter's content relating to Criterion 3." },
  { code: "G", title: "Documents related to Criterion 4", body: "Provide all documents required to support the chapter's content relating to Criterion 4." },
  { code: "H", title: "Documents related to Criterion 5", body: "Provide all documents required to support the chapter's content relating to Criterion 5." },
  { code: "I", title: "Documents related to Criterion 6", body: "Provide all documents required to support the chapter's content relating to Criterion 6." },
  { code: "K", title: "Documents related to Criterion 7", body: "Provide all documents required, in addition to those provided in Annexure J, to support the chapter's content relating to Criterion 7." },
  { code: "L", title: "Documents related to Criterion 8", body: "Provide all documents required to support the chapter's content relating to Criterion 8." },
  { code: "M", title: "Documents related to Criterion 9", body: "Provide all documents required to support the chapter's content relating to Criterion 9." },
];

function Annexures() {
  return (
    <>
      <SarCriterionNav current="/sar/annexures" />
      <PageHeader eyebrow="SAR · Volume 2" title="Annexures A–M" lead="ACC-TMP-04-04-V3.0 — the full annexure list, plus the required course-content and faculty CV formats." />

      <Section eyebrow="Reference" title="Annexure list">
        <DataTable
          headers={["Annexure", "Title", "Description"]}
          rows={annexures.map((a) => [a.code, a.title, a.body])}
        />
      </Section>

      <Section eyebrow="Annexure E" title="Course Content — required syllabus format">
        <p className="text-sm text-foreground/80 mb-4">The detailed content of each course the program offers should be included in the Annexure as directed in Section 3.3 of the SAR template. Use the following format to prepare the course syllabi for each program's course:</p>
        <BulletList items={[
          "Course number and title",
          "Credit hours",
          "Contact hours",
          "Course Prerequisites",
          "Course Instructor/coordinator",
          "Brief description of the course contents",
          "List of Text/Reference books including title, author, edition, publisher and year",
        ]} />
      </Section>

      <Section eyebrow="Annexure J" title="Faculty Curriculum Vitae — required format">
        <p className="text-sm text-foreground/80 mb-4">The curriculum vitae of the faculty members should be included in the Annexure as directed in sections 7.1 and 7.2 of the SAR template. Use the following format (maximum two pages) for each faculty member under the program:</p>
        <BulletList items={[
          "Name",
          "Designation",
          "Educational qualification (start from highest) – degree, discipline, institution, year",
          "Academic experience (most recent first) – institution, designation, period (mm/yyyy–mm/yyyy), type (full-time or part-time)",
          "Non-academic experience (research, industrial) – organization, title/position, period (mm/yyyy–mm/yyyy), type (full-time or part-time)",
          "Fellowship/membership of academic bodies and professional organizations",
          "Honors and awards",
          "List of significant publications and presentations in the five most recent years – title, author(s), journal/conference, month and year",
          "List of Professional Consultancy and Sponsored Research activities in the five most recent years – organization, title of project, amount received (if any), year",
        ]} />
      </Section>

      <RelatedPages items={[
        { to: "/sar", label: "Back to SAR Overview", desc: "Guidelines for preparing the SAR and the full document structure." },
        { to: "/sar/criterion-1", label: "Start from Criterion 1", desc: "Program Educational Objectives." },
      ]} />
    </>
  );
}
