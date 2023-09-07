import React from "react";

import { Link } from "react-router-dom";

import { Flex } from "@professorragna/flex";
import { Span } from "@professorragna/span";

interface Props {
  iconAlt: string;
  iconUrl: string;
  isActive: boolean;
  label: string;
  route: string;
}

export const SidebarItem: React.FC<Props> = ({
  iconAlt,
  iconUrl,
  isActive,
  label,
  route,
  ...props
}) => (
  <Link
    to={route}
    // Hardcoded style prop here as react-router-dom Link isn't a styled component
    style={{
      color: isActive ? "#3f728d" : "",
      textDecoration: "none",
    }}
  >
    <Flex borderRadius="8px" p="15px" bg={isActive ? "#daf1ff" : ""} {...props}>
      <img src={iconUrl} alt={iconAlt} />
      <Span ml="15px">{label}</Span>
    </Flex>
  </Link>
);
