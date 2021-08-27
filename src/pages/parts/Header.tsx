import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Header } = Layout;

export const HeaderPart: React.FunctionComponent = () => {
  return (
    <Header>
      <div className="logo" style={{ float: "left" }}>
        <Title>🐍🏍️</Title>
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="game">
          <Link to="/game">Game</Link>
        </Menu.Item>
        <Menu.Item key="viewer">
          <Link to="/viewer">Viewer</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
