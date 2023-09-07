import React, { useEffect, useState } from "react";

import axios from "axios";

import { Box } from "@professorragna/box";
import { Flex } from "@professorragna/flex";
import { H1 } from "@professorragna/h1";
import { List, Li } from "@professorragna/list";

import logo from "./assets/logo.png";
import "./App.css";

import { PatientItem } from "./components/PatientItem/PatientItem.tsx";
import { Widget } from "./components/Widget/Widget.tsx";
import { SidebarItem } from "./components/SidebarItem/SidebarItem.tsx";

import iconHome from "./assets/icon-home.svg";
import iconPatients from "./assets/icon-patients.svg";

export const navItems = [
  {
    iconAlt: "Home icon",
    iconUrl: iconHome,
    label: "Home",
  },
  {
    iconAlt: "Patients icon",
    iconUrl: iconPatients,
    label: "Patients",
  },
];

const App = () => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const fetchPatients = async () => {
    // TODO: Handle exceptions
    const response = await axios.get("/api/patients");
    console.log(response);
    return response.data;
  };

  const fetchAppointments = async () => {
    // TODO: Handle exceptions
    const response = await axios.get("/api/appointments");
    console.log(response);
    return response.data;
  };

  useEffect(() => {
    const getPatients = async () => {
      const patients = await fetchPatients();
      console.log("patients", patients);
      setPatients(patients);
    };

    const getAppointments = async () => {
      const appointments = await fetchAppointments();
      setAppointments(appointments);
    };

    getPatients();
    getAppointments();
  }, []);

  return (
    <Flex height="100vh" p="50px">
      <Box flex={1}>
        <img src={logo} alt="Wellspring logo" />

        <List variant="ul">
          {navItems.map((navItem) => (
            <Li>
              <SidebarItem iconUrl={navItem.iconUrl} label={navItem.label} />
            </Li>
          ))}
        </List>
      </Box>
      <Box flex={4}>
        {/* Typically, in a production app, you'd access your application state to determine what user firstName to render below */}
        <H1 fontSize="30px" color="#475467">
          Good afternoon, Meredith!
        </H1>

        <Flex
          style={{
            // Hardcoded style here, as my external styled components don't yet support a "gap" prop
            gap: "50px",
          }}
        >
          <Widget headerText="Recent Patients">
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

          <Widget headerText="Upcoming visits">
            {appointments.length <= 0 ? (
              <>No upcoming appointments</>
            ) : (
              <>
                {appointments.map((appointment) => (
                  <>{appointment.patientName}</>
                ))}
              </>
            )}
          </Widget>
        </Flex>
      </Box>
    </Flex>
  );
};

export default App;
