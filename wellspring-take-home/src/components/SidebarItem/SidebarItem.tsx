import React from "react";

import { Flex } from "@professorragna/flex";
import { Span } from "@professorragna/span";

interface Props {
  iconUrl: string;
  isActive: boolean;
  label: string;
}

export const SidebarItem: React.FC<Props> = ({ iconUrl, isActive, label }) => (
  <Flex
    alignItems="center"
    borderRadius="8px"
    p="15px"
    bg={isActive ? "#daf1ff" : ""}
    color={isActive ? "#3f728d" : ""}
  >
    <img src={iconUrl} />
    <Span ml="15px">{label}</Span>
  </Flex>
);
