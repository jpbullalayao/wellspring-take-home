import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  gap: "50px",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "25px",
    },
  },
});

export const appointmentsContainer = style({
  marginTop: "30px",

  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: "15px",
    },
  },
});
