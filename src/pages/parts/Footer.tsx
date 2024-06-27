import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

export const FooterPart: React.FunctionComponent = () => {
  return (
    <Footer className="footer">
      Created by{" "}
      <a href="http://samuel-lewis.com/" target="_blank" rel="noreferrer">
        Samuel Lewis
      </a>
    </Footer>
  );
};
