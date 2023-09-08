import React, { useEffect, useState } from "react";

import axios from "axios";

import { PageTitle } from "../../components/PageTitle/PageTitle.tsx";
import { PatientItem } from "../../components/PatientItem/PatientItem.tsx";
import { Widget } from "../../components/Widget/Widget.tsx";

export const Patients = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    // TODO: Handle exceptions
    const response = await axios.get("/api/patients");
    return response.data;
  };

  useEffect(() => {
    const getPatients = async () => {
      const patients = await fetchPatients();
      setPatients(patients);
    };

    getPatients();
  }, []);

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
