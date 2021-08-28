import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export const FooterPart: React.FunctionComponent = () => {
  return (
    <Footer className="footer">
      Created by <a href="http://samuel-lewis.com/">Samuel Lewis</a>
    </Footer>
  );
};
