import React, { useEffect, useState } from "react";

import { NavLink, Link } from "react-router-dom";
import axios from "axios";

import { Box } from "@professorragna/box";
import { Flex } from "@professorragna/flex";

import { Appointment } from "../../components/Appointment/Appointment.tsx";
import { Filter } from "../../components/Filter/Filter.tsx";
import { PageTitle } from "../../components/PageTitle/PageTitle.tsx";
import { PatientItem } from "../../components/PatientItem/PatientItem.tsx";
import { Widget } from "../../components/Widget/Widget.tsx";

const appointmentStyles = {
  Telehealth: {
    detailsBg: "#36bffa",
    locationColor: "#026aa2",
  },
  "In-person": {
    detailsBg: "#bdb4fe",
    locationColor: "#6938ef",
  },
};

const AppointmentFilter = Object.freeze({
  Today: "Today",
  Tomorrow: "Tomorrow",
  ThisWeek: "This Week",
});

export const Home = () => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState(
    appointments
  );
  const [activeAppointmentFilter, setActiveAppointmentFilter] = useState(
    AppointmentFilter.Today
  );

  const fetchPatients = async () => {
    // TODO: Handle exceptions
    const response = await axios.get("/api/patients");
    return response.data;
  };

  const fetchAppointments = async () => {
    // TODO: Handle exceptions
    const response = await axios.get("/api/appointments");
    return response.data;
  };

  const filterAppointments = (startTime, endTime) => {
    // TODO: Typing
    const filtered = appointments.filter((appointment) => {
      return (
        new Date(appointment.appointmentDate).getTime() >= startTime &&
        new Date(appointment.appointmentDate).getTime() <= endTime
      );
    });

    setFilteredAppointments(filtered);
  };

  useEffect(() => {
    const getPatients = async () => {
      const patients = await fetchPatients();

      // Sort patients by most recent check-in
      patients.sort(
        (a, b) =>
          new Date(a.lastCheckIn).getTime() + new Date(b.lastCheckIn).getTime()
      );

      setPatients(patients);
    };

    const getAppointments = async () => {
      const appointments = await fetchAppointments();
      setAppointments(appointments);
      setFilteredAppointments(appointments);
    };

    getPatients();
    getAppointments();
  }, []);

  return (
    <>
      {/* Typically, in a production app, you'd access your application state to determine what user firstName to render below */}
      <PageTitle title="Good afternoon, Dwight!" />

      <Flex
        style={{
          // Hardcoded style here, as my external styled components don't yet support a "gap" prop
          gap: "50px",
        }}
      >
        <Widget
          actions={
            <NavLink
              to="/patients"
              style={{
                color: "#667085",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              View all
            </NavLink>
          }
          headerText="Recent Patients"
          alignSelf="flex-start"
        >
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

        <Widget headerText="Upcoming visits" alignSelf="flex-start">
          <Filter
            label={AppointmentFilter.Today}
            onClick={() => {
              const today = new Date();
              const startOfToday = today.setHours(0, 0, 0, 0);
              const endOfToday = today.setHours(23, 59, 59, 999);

              filterAppointments(startOfToday, endOfToday);
              setActiveAppointmentFilter(AppointmentFilter.Today);
            }}
            isActive={activeAppointmentFilter === AppointmentFilter.Today}
            mr="10px"
          />

          <Filter
            label={AppointmentFilter.Tomorrow}
            onClick={() => {
              const today = new Date();
              const tomorrow = new Date(today);
              tomorrow.setDate(today.getDate() + 1);

              const startOfTomorrow = tomorrow.setHours(0, 0, 0, 0);
              const endOfTomorrow = tomorrow.setHours(23, 59, 59, 999);

              filterAppointments(startOfTomorrow, endOfTomorrow);
              setActiveAppointmentFilter(AppointmentFilter.Tomorrow);
            }}
            isActive={activeAppointmentFilter === AppointmentFilter.Tomorrow}
            mr="10px"
          />

          <Filter
            label={AppointmentFilter.ThisWeek}
            onClick={() => {
              const today = new Date();
              const startOfToday = today.setHours(0, 0, 0, 0);

              const nextWeek = new Date(today);
              nextWeek.setDate(today.getDate() + 7);

              const endOfNextWeek = nextWeek.setHours(23, 59, 59, 999);

              filterAppointments(startOfToday, endOfNextWeek);
              setActiveAppointmentFilter(AppointmentFilter.ThisWeek);
            }}
            isActive={activeAppointmentFilter === AppointmentFilter.ThisWeek}
          />

          {filteredAppointments.length <= 0 ? (
            <>No upcoming appointments</>
          ) : (
            <Box mt="30px">
              {filteredAppointments.map((appointment) => (
                <Appointment
                  time={appointment.time}
                  patientName={appointment.patientName}
                  appointmentName={appointment.appointmentName}
                  appointmentDescription={appointment.appointmentDescription}
                  appointmentType={appointment.appointmentType}
                  styleProps={{
                    mb: "15px",
                    ...appointmentStyles[appointment.appointmentType],
                  }}
                />
              ))}
            </Box>
          )}
        </Widget>
      </Flex>
    </>
  );
};
