import React from "react";

import { main } from "./Badge.css.ts";

interface Props {
  label: string;
}

export const Badge: React.FC<Props> = ({ label, ...props }) => (
  <div className={main} {...props}>
    {label}
  </div>
);
