import React, { ReactNode } from "react";

import { Box } from "@professorragna/box";
import { Flex } from "@professorragna/flex";
import { H2 } from "@professorragna/h2";

interface Props {
  actions?: ReactNode;
  children: ReactNode;
  headerText: string;
}

export const Widget: React.FC<Props> = ({
  actions,
  children,
  headerText,
  ...props
}) => (
  <Box
    borderRadius="20px"
    border="1px solid #f2f4f7"
    boxShadow="0px 3px 10px 0px #EEF2F8"
    p="30px"
    flex={1}
    {...props}
  >
    <Flex
      alignItems="center"
      justifyContent="space-between"
      borderBottom="3px solid #e0f2fe"
    >
      <H2 fontSize="18px" color="#344054">
        {headerText}
      </H2>

      {actions}
    </Flex>
    <Box pt="20px">{children}</Box>
  </Box>
);
