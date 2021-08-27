import React, { useCallback, useState } from "react";
import { Form, Button, InputNumber, Select } from "antd";
const { Option } = Select;

export type SelectControllersProps = {
  onSubmit?: (controllers: Array<string>) => void;
};

export const SelectControllers: React.FunctionComponent<SelectControllersProps> =
  (props) => {
    const [numControllers, setNumControllers] = useState(2);

    const onFinish = useCallback((r) => {
      if (props.onSubmit) {
        props.onSubmit(Object.values(r));
      }
    }, []);

    const onNumChange = useCallback(
      (r) => {
        setNumControllers(r);
      },
      [setNumControllers]
    );

    const formItems = new Array(numControllers).fill(0).map((_, i) => (
      <Form.Item
        key={"formItem" + i}
        name={`Player ${i}`}
        label={`Player ${i}`}
        rules={[{ required: true }]}
      >
        <Select placeholder="Select a controller..." allowClear>
          <Option value="random">Random</Option>
        </Select>
      </Form.Item>
    ));

    return (
      <>
        <InputNumber min={2} defaultValue={2} onChange={onNumChange} />
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {formItems}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  };
