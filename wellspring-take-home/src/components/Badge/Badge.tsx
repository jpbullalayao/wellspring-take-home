import React from "react";

import { Box } from "@professorragna/box";

interface Props {
  label: string;
}

export const Badge: React.FC<Props> = ({ label, ...props }) => (
  <Box
    borderRadius="16px"
    fontSize="12px"
    fontWeight="500"
    p="4px 6px"
    {...props}
  >
    {label}
  </Box>
);
