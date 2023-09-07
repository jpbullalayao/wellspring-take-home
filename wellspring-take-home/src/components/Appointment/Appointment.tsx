import React from "react";

import { Box } from "@professorragna/box";
import { Flex } from "@professorragna/flex";
import { Image } from "@professorragna/image";

import iconKebab from "../../assets/icon-kebab.svg";

interface StyleProps {
  locationColor: string;
  detailsBg: string;
  mb: string;
}

interface Props {
  time: string;
  patientName: string;
  appointmentName: string;
  appointmentDescription: string;
  appointmentType: string;
  styleProps: StyleProps;
}

export const Appointment: React.FC<Props> = ({
  time,
  appointmentType,
  patientName,
  appointmentName,
  appointmentDescription,
  styleProps: { detailsBg, locationColor, mb } = {},
}) => (
  <Flex borderRadius="15px" overflow="hidden" mb={mb}>
    <Box bg={detailsBg} p="15px" minWidth="90px" textAlign="center">
      <Box color="#fff" fontSize="16px" fontWeight="700">
        {time}
      </Box>
      <Box color={locationColor} fontSize="12px" fontWeight="500">
        {appointmentType}
      </Box>
    </Box>
    <Box alignItems="center" bg="#f8f9fc" p="15px" width="100%">
      <Box position="relative">
        <Image src={iconKebab} alt="Kebab icon" position="absolute" right="0" />
        <Box
          fontSize="14px"
          fontWeight="700"
        >{`${appointmentName}: ${patientName}`}</Box>
        <Box color="#667085" fontSize="12px">
          {appointmentDescription}
        </Box>
      </Box>
    </Box>
  </Flex>
);
