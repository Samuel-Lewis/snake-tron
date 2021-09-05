import { Typography } from "antd";
import ReactMarkdown, { Options } from "react-markdown";

const { Text, Title } = Typography;

const markdownComponentsMap: Options["components"] = {
  h1: (props: any) => <Title level={1} {...props} />,
  h2: (props: any) => <Title level={2} {...props} />,
  h3: (props: any) => <Title level={3} {...props} />,
  h4: (props: any) => <Title level={4} {...props} />,
  h5: (props: any) => <Title level={5} {...props} />,
  h6: (props: any) => <Title level={6} {...props} />,
  p: (props: any) => <Text {...props} />,
};

export type MDProps = {
  text: string;
};

export const MD: React.FunctionComponent<MDProps> = ({ text }) => {
  return <ReactMarkdown children={text} components={markdownComponentsMap} />;
};

export const fromMarkdown = (markdown: string) => {
  return <MD text={markdown} />;
};
