import { style } from "@vanilla-extract/css";

export const main = style({
  borderRadius: "20px",
  border: "1px solid #f2f4f7",
  boxShadow: "0px 3px 10px 0px #EEF2F8",
  padding: "30px",
  flex: 1,
});

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "3px solid #e0f2fe",
});

export const headerText = style({
  fontSize: "18px",
  color: "#344054",
});

export const bodyContainer = style({
  paddingTop: "20px",
});
