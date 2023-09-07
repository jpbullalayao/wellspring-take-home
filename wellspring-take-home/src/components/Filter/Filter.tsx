import React from "react";

// import { Button } from "@professorragna/button";

import { Badge } from "../Badge/Badge.tsx";

interface Props {
  label: string;
  onClick: Function; // TODO
}

export const Filter: React.FC<Props> = ({ label, onClick }) => (
  <button onClick={onClick}>
    <Badge label={label} />
  </button>
);
