import React, { ReactNode } from "react";

import { Box } from "@professorragna/box";
import { H2 } from "@professorragna/h2";

interface Props {
  children: ReactNode;
  headerText: string;
}

export const Widget: React.FC<Props> = ({ children, headerText }) => (
  <Box
    borderRadius="20px"
    border="1px solid #f2f4f7"
    boxShadow="0px 3px 10px 0px #EEF2F8"
    p="30px"
    flex={1}
  >
    <Box borderBottom="3px solid #e0f2fe">
      <H2 fontSize="18px" color="#344054">
        {headerText}
      </H2>
    </Box>
    <Box pt="20px">{children}</Box>
  </Box>
);
