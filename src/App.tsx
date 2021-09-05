import "antd/dist/antd.css";
import "./App.less";
import { Layout } from "antd";
import {
    Route,
    Switch
} from "react-router-dom";
import { DocsPage } from "./pages/docs";
import { GameRunner } from "./pages/game";
import { HomePage } from "./pages/Home";
import { ContentPart } from "./pages/parts/Content";
import { FooterPart } from "./pages/parts/Footer";
import { HeaderPart } from "./pages/parts/Header";
import { ControllerTesterPage } from "./pages/Tester";
import { ViewerPage } from "./pages/Viewer";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderPart />
        <ContentPart>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/game" component={GameRunner} />
            <Route path="/viewer" component={ViewerPage} />
            <Route path="/tester" component={ControllerTesterPage} />
            <Route path="/docs" component={DocsPage} />
          </Switch>
        </ContentPart>
        <FooterPart />
      </Layout>
    </div>
  );
}

export default App;
