import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  minHeight: "100vh",
  padding: "50px",
});

export const list = style({
  marginTop: "50px",
});

export const listItem = style({
  listStyleType: "none",
});

export const rightContainer = style({
  flex: 4,
  paddingLeft: "50px",
});
