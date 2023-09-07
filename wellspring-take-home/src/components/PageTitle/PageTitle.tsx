import React from "react";

import { H1 } from "@professorragna/h1";

interface Props {
  title: string;
}

export const PageTitle: React.FC<Props> = ({ title }) => (
  <H1 fontSize="30px" color="#475467">
    {title}
  </H1>
);
