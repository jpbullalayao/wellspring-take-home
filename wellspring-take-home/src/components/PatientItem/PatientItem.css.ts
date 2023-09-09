import { style } from "@vanilla-extract/css";

export const main = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #f2f4f7",
  padding: "15px 0",
});

export const patientName = style({
  color: "#475467",
  fontSize: "14px",
  fontWeight: "700",
});

export const caregiverName = style({
  color: "#667085",
  fontSize: "14px",
  marginTop: "10px",
});
