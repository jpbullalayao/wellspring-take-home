import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  minHeight: "100vh",
  padding: "50px",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      padding: "25px",
    },
  },
});

export const list = style({
  marginTop: "50px",

  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: "25px",
      padding: "0px",
    },
  },
});

export const listItem = style({
  listStyleType: "none",
});

export const rightContainer = style({
  flex: 4,
  paddingLeft: "50px",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0px",
    },
  },
});
