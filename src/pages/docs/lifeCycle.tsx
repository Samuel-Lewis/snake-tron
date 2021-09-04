import { Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

export const LifeCycle: React.FunctionComponent = () => {
  return (
    <>
      <Title level={2}>Life Cycle</Title>
      <Paragraph>
        A game takes place over 3 stages. 1. Setup 2. Play 3. Summary
      </Paragraph>
    </>
  );
};
