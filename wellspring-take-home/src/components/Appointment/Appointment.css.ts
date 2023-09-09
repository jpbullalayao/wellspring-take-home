import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  borderRadius: "15px",
  overflow: "hidden",
});

export const detailsContainer = style({
  padding: "15px",
  minWidth: "90px",
  textAlign: "center",
});

export const timeContainer = style({
  color: "#fff",
  fontSize: "16px",
  fontWeight: "700",
});

export const locationContainer = style({
  fontSize: "12px",
  fontWeight: "500",
});

export const rightContainer = style({
  alignItems: "center",
  background: "#f8f9fc",
  padding: "15px",
  width: "100%",
});

export const image = style({
  position: "absolute",
  right: "0",
});

export const nameContainer = style({
  fontSize: "14px",
  fontWeight: "700",
});

export const descContainer = style({
  color: "#667085",
  fontSize: "12px",
});
