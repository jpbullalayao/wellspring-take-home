import React from "react";

import { Flex } from "@professorragna/flex";

interface Props {
  iconUrl: string;
  isActive: boolean;
  label: string;
}

export const SidebarItem: React.FC<Props> = ({ iconUrl, isActive, label }) => (
  <>
    <img src={iconUrl} />
    {label}
  </>
);
