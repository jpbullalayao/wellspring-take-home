import React, { ReactNode } from "react";

import {
  main,
  headerContainer,
  headerText as headerTextCSS,
  bodyContainer,
} from "./Widget.css.ts";

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
  <div className={main} {...props}>
    <div className={headerContainer}>
      <h2 className={headerTextCSS}>{headerText}</h2>

      {actions}
    </div>
    <div className={bodyContainer}>{children}</div>
  </div>
);
