import React from "react";

import { Flex } from "@professorragna/flex";
import { Span } from "@professorragna/span";

interface Props {
  iconAlt: string;
  iconUrl: string;
  isActive: boolean;
  label: string;
}

export const SidebarItem: React.FC<Props> = ({
  iconAlt,
  iconUrl,
  isActive,
  label,
  ...props
}) => (
  <Flex
    alignItems="center"
    borderRadius="8px"
    p="15px"
    bg={isActive ? "#daf1ff" : ""}
    color={isActive ? "#3f728d" : ""}
    {...props}
  >
    <img src={iconUrl} alt={iconAlt} />
    <Span ml="15px">{label}</Span>
  </Flex>
);
