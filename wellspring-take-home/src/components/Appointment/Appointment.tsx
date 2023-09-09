import React from "react";

import iconKebab from "../../assets/icon-kebab.svg";

import {
  main,
  detailsContainer,
  timeContainer,
  locationContainer,
  rightContainer,
  image,
  nameContainer,
  descContainer,
} from "./Appointment.css.ts";

interface StyleProps {
  locationColor: string;
  detailsBg: string;
  mb: string;
}

interface Props {
  time: string;
  patientName: string;
  appointmentName: string;
  appointmentDescription: string;
  appointmentType: string;
  styleProps: StyleProps;
}

export const Appointment: React.FC<Props> = ({
  time,
  appointmentType,
  patientName,
  appointmentName,
  appointmentDescription,
  styleProps: { detailsBg, locationColor, mb } = {},
}) => (
  <div
    className={main}
    style={{
      marginBottom: mb,
    }}
  >
    <div
      className={detailsContainer}
      style={{
        background: detailsBg,
      }}
    >
      <div className={timeContainer}>{time}</div>
      <div className={locationContainer} style={{ color: locationColor }}>
        {appointmentType}
      </div>
    </div>
    <div className={rightContainer}>
      <div
        style={{
          position: "relative",
        }}
      >
        <img src={iconKebab} alt="Kebab icon" className={image} />
        <div
          className={nameContainer}
        >{`${appointmentName}: ${patientName}`}</div>
        <div className={descContainer}>{appointmentDescription}</div>
      </div>
    </div>
  </div>
);
