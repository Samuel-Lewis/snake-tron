import { Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

export type HomePageProps = {};

export const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <>
      <Title>Snake Tron - Code Fights!</Title>

      <Paragraph>What, you thought there would be content?</Paragraph>
    </>
  );
};
