import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  border: "none",
  borderRadius: "16px",
  fontSize: "14px",
  fontWeight: "500",
  outline: "none",
  padding: "4px 6x",
  cursor: "pointer",
});

export const main = styleVariants({
  active: [
    base,
    {
      background: "#f0f9ff",
      color: "#026aa2",
    },
  ],
  inactive: [
    base,
    {
      background: "#f2f4f7",
      color: "#344054",
    },
  ],
});
