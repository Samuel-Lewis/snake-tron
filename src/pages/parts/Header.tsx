import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

export const HeaderPart: React.FunctionComponent = () => {
  return (
    <Header className="header">
      <div className="logo">🐍🏍️</div>
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
        <Menu.Item key="tester">
          <Link to="/tester">Controller Tester</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
