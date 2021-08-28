import { Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

export type ViewerPageProps = {};

export const ViewerPage: React.FunctionComponent<ViewerPageProps> = () => {
  return (
    <>
      <Title>Game Viewer</Title>
      <Paragraph>What, you thought there would be content?</Paragraph>
    </>
  );
};
