import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export const FooterPart: React.FunctionComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Created by <a href="http://samuel-lewis.com/">Samuel Lewis</a>
    </Footer>
  );
};
