import React from "react";

import { PageTitle } from "../../components/PageTitle/PageTitle.tsx";
import { PatientItem } from "../../components/PatientItem/PatientItem.tsx";
import { Widget } from "../../components/Widget/Widget.tsx";

import { useData } from "../../hooks/useData/useData.ts";

export const Patients = () => {
  const patients = useData("/api/patients");

  return (
    <>
      <PageTitle title="Patients" />

      <Widget headerText="All Patients" alignSelf="flex-start">
        {patients.length <= 0 ? (
          <>No patients on file</>
        ) : (
          <>
            {patients.map((patient) => (
              <PatientItem
                patientName={patient.patientName}
                caregiverName={patient.caregiverName}
                visitStatus={patient.visitStatus}
              />
            ))}
          </>
        )}
      </Widget>
    </>
  );
};
