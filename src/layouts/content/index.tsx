import React from "react";
import { SpaceProps, BorderProps } from "../../helpers/styled/index";
import { Layout } from "antd";
import { StyledContent } from "./style";

interface IProps extends SpaceProps, BorderProps {
  className?: string;
  fullHeight?: boolean;
  align?: "top" | "center" | "bootom";
  children: React.ReactNode;
}

const Content: React.FC<IProps> = ({
  children,
  className,
  fullHeight,
  align,
  ...restProps
}) => {
  return (
    <StyledContent
      $fullHeight={fullHeight}
      $align={align}
      className={className}
      {...restProps}
    >
      <Layout className="container">{children}</Layout>
    </StyledContent>
  );
};

export default Content;
