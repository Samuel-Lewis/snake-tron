import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { GamePage } from "./pages/game/Game";
import { HomePage } from "./pages/Home";
import { ContentPart } from "./pages/parts/Content";
import { FooterPart } from "./pages/parts/Footer";
import { HeaderPart } from "./pages/parts/Header";
import { ControllerTesterPage } from "./pages/tester/Tester";
import { ViewerPage } from "./pages/Viewer";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderPart />
        <ContentPart>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/game">
              <GamePage />
            </Route>
            <Route path="/viewer">
              <ViewerPage />
            </Route>
            <Route path="/tester">
              <ControllerTesterPage />
            </Route>
          </Switch>
        </ContentPart>
        <FooterPart />
      </Layout>
    </div>
  );
}

export default App;
