import React, { PropsWithChildren } from "react";
import { ContainerPropsType } from "./container.types";

const Container: React.FC<PropsWithChildren<ContainerPropsType>> = ({
  children,
}) => {
  return <div className="max-w-[1450px] mx-auto px-3">{children}</div>;
};

export default Container;
