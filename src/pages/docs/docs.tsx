import { Layout, Menu, Typography } from "antd";
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { LifeCycle } from "./lifeCycle";
import { Placeholder } from "./placeholder";

const { SubMenu } = Menu;
const { Title } = Typography;
const { Content, Sider } = Layout;

type ContentsItem = {
  title: string;
  key: string;
  component?: React.ComponentType<any>;
  children?: ContentsItem[];
  icon?: JSX.Element;
};

const contents: ContentsItem[] = [
  { title: "Getting started", key: "getting-started", component: Placeholder },
  { title: "Life cylce", key: "life-cycle", component: LifeCycle },
  {
    title: "Controllers",
    key: "controllers",
    children: [{ title: "REST", key: "rest", component: Placeholder }],
  },
];

type ItemMenusProps = { contents: ContentsItem[]; url: string };
const ItemMenus: React.FunctionComponent<ItemMenusProps> = (props) => {
  const { contents, url } = props;
  const c = contents.map(({ children, title, key, icon, component }) => {
    if (children) {
      return (
        <SubMenu key={key} title={title} icon={icon}>
          <ItemMenus contents={children} url={`${url}/${key}`} />
        </SubMenu>
      );
    } else if (component) {
      return (
        <Menu.Item key={key} icon={icon}>
          <Link to={`${url}/${key}`}>{title}</Link>
        </Menu.Item>
      );
    }
    return null;
  });
  console.groupEnd();
  return <>{c}</>;
};

type ItemRouteProps = { contents: ContentsItem[]; url: string };
const ItemRoute: React.FunctionComponent<ItemRouteProps> = (props) => {
  const allRoutes: JSX.Element[] = [];
  const dfs = (contents: ContentsItem[], parentUrl: string) => {
    contents.forEach(({ children, key, component }) => {
      if (children) {
        dfs(children, `${parentUrl}/${key}`);
      } else if (component) {
        allRoutes.push(
          <Route key={key} path={`${parentUrl}/${key}`} component={component} />
        );
      }
    });
  };

  dfs(props.contents, props.url);
  return <>{allRoutes}</>;
};

export const DocsPage: React.FunctionComponent = () => {
  let { url } = useRouteMatch();

  const itemMenus = <ItemMenus contents={contents} url={url} />;
  const itemRoutes = <ItemRoute contents={contents} url={url} />;

  return (
    <>
      <Title>Docs</Title>
      <Layout>
        <Sider width={200}>
          <Menu
            selectable={false}
            mode="inline"
            style={{ height: "100%" }}
            multiple={false}
          >
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
