import React from "react";

import { Button } from "../../core-components/Button/Button.tsx";

interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Filter: React.FC<Props> = ({
  label,
  isActive,
  onClick,
  ...props
}) => (
  <Button
    onClick={onClick}
    border="none"
    borderRadius="16px"
    fontSize="14px"
    fontWeight="500"
    outline="none"
    p="4px 6px"
    bg={isActive ? "#f0f9ff" : "#f2f4f7"}
    color={isActive ? "#026aa2" : "#344054"}
    style={{
      cursor: "pointer",
    }}
    {...props}
  >
    {label}
  </Button>
);
