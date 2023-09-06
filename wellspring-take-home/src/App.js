import React from "react";

import { Box } from "@professorragna/box";
import { Flex } from "@professorragna/flex";
import { H1 } from "@professorragna/h1";
import { List, Li } from "@professorragna/list";

import logo from "./assets/logo.png";
import "./App.css";

import { Widget } from "./components/Widget/Widget.tsx";
import { SidebarItem } from "./components/SidebarItem/SidebarItem.tsx";

import iconHome from "./assets/icon-home.svg";
import iconPatients from "./assets/icon-patients.svg";

export const navItems = [
  {
    iconAlt: "Home icon",
    iconUrl: iconHome,
    label: "Home",
  },
  {
    iconAlt: "Patients icon",
    iconUrl: iconPatients,
    label: "Patients",
  },
];

const App = () => (
  <Flex height="100vh">
    <Box flex={1}>
      <img src={logo} alt="Wellspring logo" />

      <List variant="ul">
        {navItems.map((navItem) => (
          <Li>
            <SidebarItem iconUrl={navItem.iconUrl} label={navItem.label} />
          </Li>
        ))}
      </List>
    </Box>
    <Box flex={4}>
      {/* Typically, when not hard-coding, you'd access your application state to determine what user firstName to render below */}
      <H1 fontSize="30px" color="#475467">
        Good afternoon, Meredith!
      </H1>

      <Flex>
        <Widget headerText="Recent Patients"></Widget>

        <Widget headerText="Upcoming visits"></Widget>
      </Flex>
    </Box>
  </Flex>
);

export default App;
