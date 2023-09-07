import React from "react";

import { NavLink, Link } from "react-router-dom";

import { Flex } from "@professorragna/flex";
import { Span } from "@professorragna/span";

interface Props {
  iconAlt: string;
  iconUrl: string;
  label: string;
  route: string;
}

export const SidebarItem: React.FC<Props> = ({
  iconAlt,
  iconUrl,
  label,
  route,
  ...props
}) => (
  <NavLink
    to={route}
    style={({ isActive }) => {
      return {
        color: isActive ? "#3f728d" : "",
        textDecoration: "none",
      };
    }}
  >
    {/* Built-in children prop for NavLink allows us to style the active link however we like */}
    {({ isActive }) => (
      <Flex
        borderRadius="8px"
        p="15px"
        bg={isActive ? "#daf1ff" : ""}
        {...props}
      >
        <img src={iconUrl} alt={iconAlt} />
        <Span ml="15px">{label}</Span>
      </Flex>
    )}
  </NavLink>
);
