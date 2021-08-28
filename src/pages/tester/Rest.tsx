import { Form, Input } from "antd";
import { useCallback } from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { RestController } from "../../controller/adapters/rest";
import { Controller } from "../../controller/types";

export type RestLoaderProps = {
  setController: (controller: Controller) => void;
};

export const RestLoader: React.FunctionComponent<RestLoaderProps> = ({
  setController,
}) => {
  const inputCallback = useCallback(
    (event) => {
      const controller = new RestController(event.target.value);
      setController(controller);
    },
    [setController]
  );

  return (
    <Form.Item label="Address">
      <Input prefix={<GlobalOutlined />} onChange={inputCallback} />
    </Form.Item>
  );
};
