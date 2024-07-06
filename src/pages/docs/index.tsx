import { Layout, Menu, Typography } from "antd";
import React from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import { RestDocs } from "./controllers/Rest";
import { DataTypes } from "./DataTypes";
import { GettingStarted } from "./GettingStarted";
import { LifeCycle } from "./LifeCycle";

const { Title } = Typography;
const { Content, Sider } = Layout;

type ContentsItem = {
  title: string;
  key: string;
  component?: React.FC;
  children?: ContentsItem[];
  icon?: JSX.Element;
  display?: boolean;
};

const contents: ContentsItem[] = [
  {
    title: "Getting started",
    key: "getting-started",
    display: false,
    component: GettingStarted,
  },
  { title: "Life cycle", key: "life-cycle", component: LifeCycle },
  { title: "Data Types", key: "data-types", component: DataTypes },
  {
    title: "Controllers",
    key: "controllers",
    children: [{ title: "REST", key: "rest", component: RestDocs }],
  },
];

type ItemMenusProps = { contents: ContentsItem[]; url: string };
type ItemRouteProps = { contents: ContentsItem[]; url: string };
const ItemRoute: React.FC<ItemRouteProps> = (props) => {
  const allRoutes: JSX.Element[] = [];
  const dfs = (contents: ContentsItem[], parentUrl: string) => {
    contents.forEach(({ children, key, component }) => {
      if (children) {
        dfs(children, `${parentUrl}/${key}`);
      } else if (component) {
        allRoutes.push(
          <Route
            key={`route-${key}`}
            path={`${parentUrl}/${key}`}
            component={component}
          />
        );
      }
    });
  };

  dfs(props.contents, props.url);
  return <>{allRoutes}</>;
};

export const DocsPage: React.FC = () => {
  let { url } = useRouteMatch();
  const createItemMenus = ({ contents: cont, url: u }: ItemMenusProps) => {
    const c = cont.map(({ children, title, key, icon, component, display }) => {
      if (display === false) {
        return null;
      } else if (children) {
        return (
          <Menu.SubMenu key={key} title={title} icon={icon}>
            {createItemMenus({ contents: children, url: `${u}/${key}` })}
          </Menu.SubMenu>
        );
      } else if (component) {
        return (
          <Menu.Item key={`${u}/${key}`} icon={icon}>
            <Link to={`${u}/${key}`}>{title}</Link>
          </Menu.Item>
        );
      }
      return null;
    });
    return <>{c}</>;
  };

  const itemMenus = createItemMenus({ contents, url });
  const itemRoutes = <ItemRoute contents={contents} url={url} />;

  return (
    <>
      <Title>Docs</Title>
      <Layout>
        <Sider width={200}>
          <Menu mode="inline" style={{ height: "100%" }} multiple={false}>
            {itemMenus}
          </Menu>
        </Sider>
        <Content className="content" style={{ margin: 0, paddingTop: 0 }}>
          <Switch>{itemRoutes}</Switch>
        </Content>
      </Layout>
    </>
  );
};
