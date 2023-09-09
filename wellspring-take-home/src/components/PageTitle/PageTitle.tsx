import React from "react";

import { main } from "./PageTitle.css.ts";

interface Props {
  title: string;
}

export const PageTitle: React.FC<Props> = ({ title }) => (
  <h1 className={main}>{title}</h1>
);
