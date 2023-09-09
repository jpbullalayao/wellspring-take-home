import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  display: "flex",
  borderRadius: "8px",
  padding: "15px",
});

export const main = styleVariants({
  active: [base, { background: "#daf1ff" }],
  inactive: [base, {}],
});

export const labelContainer = style({
  marginLeft: "15px",
});
