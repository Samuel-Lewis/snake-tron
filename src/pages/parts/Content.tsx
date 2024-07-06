import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

export type ContentPartProps = {};

export const ContentPart: React.FC<ContentPartProps> = (props) => {
  return <Content className="content">{props.children}</Content>;
};
