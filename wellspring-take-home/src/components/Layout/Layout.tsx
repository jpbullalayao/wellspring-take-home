import React, { ReactNode } from "react";

import { Outlet } from "react-router-dom";

import logo from "../../assets/logo.png";
import iconHome from "../../assets/icon-home.svg";
import iconPatients from "../../assets/icon-patients.svg";

import { SidebarItem } from "../SidebarItem/SidebarItem.tsx";

import { main, list, listItem, rightContainer } from "./Layout.css.ts";

interface Props {
  children: ReactNode;
}

export const navItems = [
  {
    iconAlt: "Home icon",
    iconUrl: iconHome,
    label: "Home",
    route: "/",
  },
  {
    iconAlt: "Patients icon",
    iconUrl: iconPatients,
    label: "Patients",
    route: "/patients",
  },
];

export const Layout: React.FC<Props> = ({ children }) => (
  <div className={main}>
    <div
      style={{
        flex: 1,
      }}
    >
      <img src={logo} alt="Wellspring logo" />

      <ul className={list}>
        {navItems.map((navItem) => (
          <li className={listItem}>
            <SidebarItem
              iconAlt={navItem.iconAlt}
              iconUrl={navItem.iconUrl}
              label={navItem.label}
              route={navItem.route}
              style={{
                marginBottom: "10px",
              }}
            />
          </li>
        ))}
      </ul>
    </div>
    <div className={rightContainer}>
      <Outlet />
    </div>
  </div>
);
