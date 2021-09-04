// import { Layout, Menu } from "antd";
import React from "react";

// import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

export const DocsPage: React.FunctionComponent = () => {
  return <>What, you thought there would be content?</>;
  // return (
  //   <Layout>
  //     <Sider width={200} className="site-layout-background">
  //       <Menu
  //         mode="inline"
  //         defaultSelectedKeys={["1"]}
  //         defaultOpenKeys={["sub1"]}
  //         style={{ height: "100%", borderRight: 0 }}
  //       >
  //         <Menu.Item key="1">
  //           <Link to="/password-forget-form">
  //             <UserOutlined type="fire" />
  //             <span>Next item</span>
  //           </Link>
  //         </Menu.Item>
  //         <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
  //           <Menu.Item key="2">option2</Menu.Item>
  //           <Menu.Item key="3">option3</Menu.Item>
  //           <Menu.Item key="4">option4</Menu.Item>
  //         </SubMenu>
  //         <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
  //           <Menu.Item key="5">option5</Menu.Item>
  //           <Menu.Item key="6">option6</Menu.Item>
  //           <Menu.Item key="7">option7</Menu.Item>
  //           <Menu.Item key="8">option8</Menu.Item>
  //         </SubMenu>
  //         <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
  //           <Menu.Item key="9">option9</Menu.Item>
  //           <Menu.Item key="10">option10</Menu.Item>
  //           <Menu.Item key="11">option11</Menu.Item>
  //           <Menu.Item key="12">option12</Menu.Item>
  //         </SubMenu>
  //       </Menu>
  //     </Sider>
  //     <Layout style={{ padding: "0 24px 24px" }}>
  //       <Content
  //         className="site-layout-background"
  //         style={{
  //           padding: 24,
  //           margin: 0,
  //           minHeight: 280,
  //         }}
  //       >
  //         Content
  //       </Content>
  //     </Layout>
  //   </Layout>
  // );
};

// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams<{ topicId: string }>();

//   return (
//     <div>
//       <h3>We at the topic: {topicId}</h3>
//     </div>
//   );
// }

// function Topics() {
//   // The `path` lets us build <Route> paths that are
//   // relative to the parent route, while the `url` lets
//   // us build relative links.
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }
