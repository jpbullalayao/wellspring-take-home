import React from "react";

import { NavLink } from "react-router-dom";

import { main, labelContainer } from "./SidebarItem.css.ts";

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
      <div className={isActive ? main.active : main.inactive} {...props}>
        <img src={iconUrl} alt={iconAlt} />
        <span className={labelContainer}>{label}</span>
      </div>
    )}
  </NavLink>
);
