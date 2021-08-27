import "antd/dist/antd.css";
import "./App.css";

import { Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";

import { GamePage } from "./pages/Game/Game";
import { HomePage } from "./pages/Home";
import { FooterPart } from "./pages/parts/Footer";
import { HeaderPart } from "./pages/parts/Header";
import { ContentPart } from "./pages/parts/Content";
import { ViewerPage } from "./pages/Viewer";

function App() {
  return (
    <div className="App">
      <Layout>
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
          </Switch>
        </ContentPart>
        <FooterPart />
      </Layout>
    </div>
  );
}

export default App;
