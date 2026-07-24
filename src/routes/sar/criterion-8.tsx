import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SarCriterionNav, RelatedPages } from "@/components/site/layout";
import { InfoCard, BulletList, DataTable } from "@/components/site/data-blocks";

export const Route = createFileRoute("/sar/criterion-8")({
  head: () => ({
    meta: [
      { title: "SAR · Criterion 8 — Governance, Finance and Safety — OBE Training" },
      { name: "description", content: "SAR template Criterion 8: background, organizational structure, statutory bodies, policies, finance/budget, and safety plan (incl. fire and laboratory safety)." },
    ],
  }),
  component: Criterion8,
});

function Criterion8() {
  return (
    <>
      <SarCriterionNav current="/sar/criterion-8" />
      <PageHeader eyebrow="SAR · Criterion 8" title="Governance, Finance and Safety" lead="ACC-TMP-04-04-V3.0 — §8.1 through §8.6.3, in full." />

      <Section eyebrow="8.1" title="Background Information">
        <InfoCard><p>Describe in no more than 300 words the institution's background and the program under evaluation.</p></InfoCard>
      </Section>

      <Section eyebrow="8.2" title="Organizational Structure">
        <InfoCard><p>Provide an up-to-date organogram of the institution.</p></InfoCard>
      </Section>

      <Section eyebrow="8.3" title="Statutory Positions and Bodies of the Institution">
        <div className="space-y-5">
          <InfoCard title="8.3.1 · Appointment of Statutory Positions">
            <p className="mb-3">State the process for appointing the following key statutory positions or equivalent as per the applicable Act/Ordinance/Statute/Rule of the institution:</p>
            <DataTable headers={["Appointment of", "Appointing/approving authority", "Date and period of appointment", "Reference to clause/section/article of Act/Statute/Rule*"]} rows={[["Vice Chancellor", "", "", ""], ["Pro-Vice Chancellor", "", "", ""], ["Treasurer", "", "", ""], ["…", "", "", ""]]} />
            <p className="mt-2 text-xs text-muted-foreground">*Refer to any published documents other than acts/statutes/rules if necessary.</p>
          </InfoCard>
          <InfoCard title="8.3.2 · Formation and Function of the Statutory Bodies">
            <p>For the syndicate, the academic council, the finance committee, the faculty selection committee, the disciplinary committee, and any other statutory committee, state the committee's assigned responsibility (as per act/ordinance/statutes). Comment briefly on the alignment of the actual activities of each committee with the assigned responsibilities. List the meeting date(s) of each statutory body during the last calendar year and attach a copy of each committee's most recent meeting notice in the Annexure.</p>
          </InfoCard>
          <InfoCard title="8.3.3 · Formation and Function of the Management Committees">
            <p>Institutions often form committees in addition to statutory bodies for the smoother running of academic and administrative activities. For each such committee, state the assigned responsibility, comment on alignment of actual activities with responsibilities, and list meeting dates during the last calendar year (attach the most recent meeting notice in the Annexure).</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="8.4" title="Existence of and Adherence to Policies">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard title="8.4.1 · Documented Policies">
            <p>Provide a list of policies in practice in the Institution. Provide copies of the statutes, the ordinances and any other relevant policies such as service rules, academic rules, codes of conduct, disciplinary rules, recruitment and promotion policies, salary structure, leave rules, grievance redressal, and scholarship and financial aid policies for students and employees in the Annexure. Describe how each of these policies is disseminated to the stakeholders. Also, discuss how these policies foster social responsibility, diversity and inclusivity.</p>
          </InfoCard>
          <InfoCard title="8.4.2 · Adherence to Policies">
            <p>Describe the extent to which the policies are adhered to when making academic and administrative decisions. The process for making exceptions, if any exist, should be outlined. Additionally, list the cases of exception requests received in the last academic years and indicate the instances in which exceptions were made. Discuss how the effectiveness of the policies is evaluated and the processes followed to update a policy.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="8.5" title="Finance and Budget">
        <InfoCard title="8.5.1 · Assets Commensurate with Revenue">
          <p className="mb-3">Complete the following table for the last three calendar years.</p>
          <DataTable headers={["Information about the Institution", "Year 1", "Year 2", "Year 3"]} rows={[["Total income (BDT)", "", "", ""], ["Total capital investment (BDT)", "", "", ""], ["Total operational expenditure (BDT)", "", "", ""], ["Total asset (BDT)", "", "", ""]]} />
        </InfoCard>
        <div className="mt-5">
          <InfoCard title="8.5.2 · Adequacy of Budget">
            <p className="mb-3">State the amount budgeted, the actual expenditure in BDT, and the percentage of the total amount for the following sectors for the last three calendar years:</p>
            <BulletList items={[
              "Salary of the faculty members of the institution and the program under evaluation",
              "Salary of the non-teaching staff of the institution and the program under evaluation",
              "Scholarships and financial aid disbursed to students, including the number of students receiving support",
              "Laboratories of the institution and the program under evaluation",
              "Physical infrastructure (space, furniture, air conditioners)",
              "Information Technology (IT)",
              "Maintenance",
              "Medical center",
              "Co-curricular and extra-curricular activities",
              "Student affairs support and placement facilities",
              "Library",
            ]} />
            <p className="mt-3">Briefly discuss whether the budgeted amounts are adequate for the proper running of the program under evaluation. If not, indicate the sectors of inadequacy and the measures being taken.</p>
          </InfoCard>
        </div>
        <div className="mt-5">
          <InfoCard title="8.5.3 · Appropriateness of Budgetary Allocation">
            <p>Describe the budgetary planning process, identifying priority areas and resource allocation. Additionally, describe the general process of preparing and approving the budget, including feedback from the stakeholders.</p>
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="8.6" title="Safety Plan and its Implementation">
        <div className="space-y-5">
          <InfoCard title="8.6.1 · Safety Plan">
            <p className="mb-3">Describe the institution's safety plan that addresses risk from manmade or natural hazards, including fire detection and suppression and incident and accident management in the laboratories. For the emergency procedure and services, provide:</p>
            <BulletList items={[
              "A list of emergency contacts: whom to call for support (fire/police/ambulance, campus security, first-aider)",
              "Information on emergency management team: who plays what role during an emergency",
              "Evacuation procedure: floor plans with exits, routes, and safety equipment",
              "Emergency procedure: who to contact, at what stages, best means of contact; emergency kit/first-aid officer locations; scenario-based solutions where possible",
              "After-emergency procedure: whom to notify, how, and when",
              "Test procedure for emergency plan: evacuation drills, fire drills, etc.",
            ]} />
          </InfoCard>
          <InfoCard title="8.6.2 · Fire Detection and Suppression Systems">
            <BulletList items={[
              "Existing fire detection and suppression system",
              "Means of escape – exits, signs and illumination",
              "Human resources – list of trained personnel with training details",
              "Inspection, testing and maintenance procedures of fire suppression systems",
              "Records of fire drills and evacuation drills",
            ]} />
          </InfoCard>
          <InfoCard title="8.6.3 · Laboratory Safety">
            <BulletList items={[
              "Defined authority, roles and responsibilities of staff and students",
              "Laboratory Safety Guidelines",
              "Location of laboratory safety systems & equipment",
              "Induction and training procedure for students and staff",
              "Risk assessment of laboratory works",
              "Safe work instructions for experimentation or other lab works",
              "Emergency process in place",
              "Incident reporting process",
              "Addressing radiation, bio and chemical hazards (when applicable)",
            ]} />
          </InfoCard>
        </div>
        <div className="mt-6">
          <InfoCard tone="accent" title="Annexure L">
            <p>Provide the documentation supporting the claims under Criterion 8 in <strong>Annexure L</strong>.</p>
          </InfoCard>
        </div>
      </Section>

      <RelatedPages items={[
        { to: "/criteria", label: "Criterion 5.8 in the Accreditation Criteria", desc: "The four required sub-criteria this SAR chapter must evidence." },
      ]} />
    </>
  );
}
