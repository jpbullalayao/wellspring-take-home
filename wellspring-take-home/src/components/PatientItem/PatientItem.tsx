import React from "react";

import { Box } from "@professorragna/box";
import { Flex } from "@professorragna/flex";

import { Badge } from "../Badge/Badge.tsx";

interface Props {
  patientName: string;
  caregiverName: string;
  visitStatus: string;
}

const badgeStyles = {
  "Visit completed": {
    color: "#344054",
    bg: "#f2f4f7",
  },
  "Started training": {
    color: "#027a48",
    bg: "#ecfdf3",
  },
  "Missing documentation": {
    color: "#b54708",
    bg: "#fffaeb",
  },
};

export const PatientItem: React.FC<Props> = ({
  patientName,
  caregiverName,
  visitStatus,
  ...props
}) => (
  <Flex
    alignItems="center"
    justifyContent="space-between"
    borderBottom="1px solid #f2f4f7"
    py="15px"
    {...props}
  >
    <Box>
      <Box color="#475467" fontSize="14px" fontWeight="700">
        {patientName}
      </Box>
      <Box color="#667085" fontSize="14px" mt="10px">
        {caregiverName}
      </Box>
    </Box>
    <Badge label={visitStatus} {...badgeStyles[visitStatus]} />
  </Flex>
);
