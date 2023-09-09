import React from "react";

import { Badge } from "../Badge/Badge.tsx";

import {
  main,
  patientName as patientNameCSS,
  caregiverName as caregiverNameCSS,
} from "./PatientItem.css.ts";

interface Props {
  patientName: string;
  caregiverName: string;
  visitStatus: string;
}

const badgeStyles = {
  "Visit completed": {
    color: "#344054",
    background: "#f2f4f7",
  },
  "Started training": {
    color: "#027a48",
    background: "#ecfdf3",
  },
  "Missing documentation": {
    color: "#b54708",
    background: "#fffaeb",
  },
};

export const PatientItem: React.FC<Props> = ({
  patientName,
  caregiverName,
  visitStatus,
}) => (
  <div className={main}>
    <div>
      <div className={patientNameCSS}>{patientName}</div>
      <div className={caregiverNameCSS}>{caregiverName}</div>
    </div>
    <Badge label={visitStatus} style={{ ...badgeStyles[visitStatus] }} />
  </div>
);
