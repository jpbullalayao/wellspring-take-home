import React, { ReactNode } from "react";

import { Outlet } from "react-router-dom";

import { Box } from "@professorragna/box";
import { Flex } from "@professorragna/flex";
import { List, Li } from "@professorragna/list";

import logo from "../../assets/logo.png";
import iconHome from "../../assets/icon-home.svg";
import iconPatients from "../../assets/icon-patients.svg";

import { SidebarItem } from "../SidebarItem/SidebarItem.tsx";

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
  <Flex minHeight="100vh" p="50px">
    <Box flex={1}>
      <img src={logo} alt="Wellspring logo" />

      <List variant="ul" mt="50px">
        {navItems.map((navItem) => (
          <Li
            style={{
              // Hardcoded style here, as my external styled components don't yet support a "listStyleType" prop
              listStyleType: "none",
            }}
          >
            <SidebarItem
              iconAlt={navItem.iconAlt}
              iconUrl={navItem.iconUrl}
              label={navItem.label}
              route={navItem.route}
              mb="10px"
            />
          </Li>
        ))}
      </List>
    </Box>
    <Box flex={4} pl="50px">
      <Outlet />
    </Box>
  </Flex>
);
