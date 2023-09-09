import React from "react";

import { main } from "./Filter.css.ts";

interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Filter: React.FC<Props> = ({
  label,
  isActive,
  onClick,
  ...props
}) => (
  <button
    onClick={onClick}
    className={isActive ? main.active : main.inactive}
    {...props}
  >
    {label}
  </button>
);
