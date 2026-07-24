import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-6")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 6 — Students — OBE Training" },
      { name: "description", content: "SAR template Criterion 6: admission policy, transfer policy, advising/counseling, and extra-/co-curricular activities." },
    ],
  }),
  component: Criterion6,
});

function Criterion6() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-6" />
      <PageHeader eyebrow="SAR · Criterion 6" title="Students" lead="ACC-TMP-04-04-V3.0 — §6.1 through §6.4, in full." />

      <Section eyebrow="6.1" title="Policy for Student Admission">
        <BulletList items={[
          "Describe the admission policy and process for admitting new students into the program (attach published brochures/guidelines and website address).",
          "Discuss if any exceptions are made to the admission policy in admitting students. Mention how the policy is disseminated publicly.",
          "State any preferences/priorities in admissions/quotas.",
          "In tabular form, provide the number of students admitted into the program for each semester/term of the last three academic years.",
          "Explain how the admission requirements ensure the selection of students who have the potential to attain the POs.",
        ]} />
        <div className="mt-4">
          <DataTable headers={["Academic year", "Calendar span (from–to)", "Semester/Term I", "Semester/Term II", "Semester/Term III"]} rows={[["", "", "", "", ""]]} />
        </div>
      </Section>

      <Section eyebrow="6.2" title="Policy for Transfer Students">
        <BulletList items={[
          "Describe the policy and process for accepting transfer students into the program (attach published brochures/guidelines and website address).",
          "Mention the process of determining the equivalence of transfer credits.",
          "Provide information on the transfer of students for the last three academic years.",
        ]} />
        <div className="mt-4">
          <DataTable
            headers={["Name and ID of the student", "Year and Semester/Term of transfer", "Number of transferred credits", "Course titles", "Name and location of institution/program credits earned from"]}
            rows={[["", "", "", "", ""]]}
          />
        </div>
      </Section>

      <Section eyebrow="6.3" title="Advising and Counseling">
        <p className="text-sm text-foreground/80 mb-4">Describe the process of providing academic advising to the students. If each student is assigned a faculty member as a designated advisor, provide advisor information for the three most recent semesters/terms.</p>
        <DataTable headers={["Name of the faculty member", "Designation", "No. of advisees assigned"]} rows={[["", "", ""]]} />
        <div className="mt-5">
          <BulletList items={[
            "Discuss the nature of the advising activities with examples. State whether the advisors maintain advising files or any other records of advising.",
            "Describe in detail whether the department/institution provides professional and mental health counseling support to students in need.",
            "Describe in detail whether the department/institution provides career counseling and placement support to students.",
            "If international students are studying in the institution, discuss the nature of the designated support facility for the international students.",
          ]} />
        </div>
      </Section>

      <Section eyebrow="6.4" title="Extra- and Co-curricular Activities">
        <BulletList items={[
          "State the policy of the institution/department, if any exists, regarding students' extra- and co-curricular activities. State how these activities are encouraged/supported institutionally and by the department.",
          "List students under the program who have participated in various extra- and co-curricular activities at the institutional level or higher in the past three academic years. Additionally, list notable achievements involving students from the program, if any.",
          "State the opportunities for the student to get involved in the activities of the relevant professional societies.",
          "Justify whether the students' workload enables them to participate in extra and co-curricular activities.",
        ]} />
        <div className="mt-6">
          <InfoCard tone="accent" title="Annexure I">
            <p>Provide the documentation supporting the claims under Criterion 6 in <strong>Annexure I</strong>.</p>
          </InfoCard>
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/criteria", label: "Criterion 5.6 in the Accreditation Criteria", desc: "The four required sub-criteria this SAR chapter must evidence." },
      ]} />
    </>
  );
}
