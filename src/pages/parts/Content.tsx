import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

export type ContentPartProps = {};

export const ContentPart: React.FunctionComponent<ContentPartProps> = (
  props
) => {
  return (
    <Content style={{ padding: "50px", height: "100%" }}>
      {props.children}
    </Content>
  );
};
