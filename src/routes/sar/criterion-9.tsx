import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-9")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 9 — Academic Facilities and Technical Support — OBE Training" },
      { name: "description", content: "SAR template Criterion 9: library, classrooms, laboratories and equipment, and internet/computing facilities." },
    ],
  }),
  component: Criterion9,
});

function Criterion9() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-9" />
      <PageHeader eyebrow="SAR · Criterion 9" title="Academic Facilities and Technical Support" lead="ACC-TMP-04-04-V3.0 — §9.1 through §9.4, in full." />

      <Section eyebrow="9.1" title="Library">
        <div className="space-y-5">
          <InfoCard title="9.1.1 · Space and Hours of Operation">
            <p>State the total space allocated for the library and the number of students served by the library. State the library's operating hours.</p>
          </InfoCard>
          <InfoCard title="9.1.2 · Library Resources">
            <p className="mb-3">Provide information on books, journals, proceedings, and other resources related to the institution and the program. Justify whether these resources are adequate for the program's students and faculty members.</p>
            <DataTable
              headers={["Category", "No. of titles (whole institution)", "No. of titles (this program)"]}
              rows={[["Books (hard copy)", "", ""], ["Books (electronic)", "", ""], ["Journals (hard copy)", "", ""], ["Journals (electronic)", "", ""], ["Proceedings (hard copy)", "", ""], ["Proceedings (electronic)", "", ""], ["Others", "", ""]]}
            />
            <p className="mt-3">Describe how IT and other modern technologies have influenced the library's use, operation and record-keeping for users and library officials.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="9.2" title="Classrooms">
        <InfoCard><p>Describe the number, usage, and facilities of classrooms available for the program. Justify whether these resources are adequate for the program.</p></InfoCard>
      </Section>

      <Section eyebrow="9.3" title="Laboratories and Equipment">
        <div className="space-y-5">
          <InfoCard title="9.3.1 · Laboratories for all Relevant Courses of the Curriculum">
            <p className="mb-3">List all the laboratory courses and the corresponding names and locations of the laboratories where the classes are conducted. Prepare a table for each semester of the last academic year.</p>
            <DataTable headers={["Serial number", "Course no. and name", "Laboratory name", "Location (campus/building/floor/room #)"]} rows={[["", "", "", ""]]} />
          </InfoCard>
          <InfoCard title="9.3.2 · Availability of Equipment">
            <p className="mb-3">For each laboratory, prepare a table using the following format.</p>
            <DataTable headers={["Serial number", "Name of the equipment", "Quantity", "Date and cost of purchase", "Present condition"]} rows={[["", "", "", "", ""]]} />
          </InfoCard>
          <InfoCard title="9.3.3 · Full-time Technical Support Staff for Laboratories">
            <DataTable headers={["Name of laboratory", "Name of person", "Designation", "Qualification (education, training)", "Experience (years)"]} rows={[["", "", "", "", ""]]} />
          </InfoCard>
          <InfoCard title="9.3.4 · Improvements of Laboratory Facilities">
            <p>Describe the improvements made in the program's laboratories during the last three academic years. Describe the plans currently under consideration for laboratory improvement.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="9.4" title="Internet and Computing Facilities">
        <BulletList items={[
          "List the Internet facilities available for students and faculty members — number of computers with Internet connections, total bandwidth, areas covered by Wi-Fi, hardware/software tools, daily available services, remote accessibility, etc.",
          "List the number of laboratories, including the number of computers accessible to students outside of class/lab times. Identify the types of uses available to students. Computers in the library or other commonplaces may be considered if such facilities are available.",
          "Justify the adequacy of the internet and computing facilities for staff and students.",
        ]} />
        <div className="mt-6">
          <InfoCard tone="accent" title="Annexure M">
            <p>Provide the documentation supporting the claims under Criterion 9 in <strong>Annexure M</strong>.</p>
          </InfoCard>
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/criteria", label: "Criterion 5.9 in the Accreditation Criteria", desc: "The four required sub-criteria this SAR chapter must evidence." },
        { to: "/sar/annexures", label: "Volume 2 · Annexures A–M", desc: "The complete annexure list this and every prior criterion references." },
      ]} />
    </>
  );
}
