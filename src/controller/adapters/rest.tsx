import { Form, Input } from "antd";
import axios from "axios";
import React, { useCallback } from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { GameState } from "../../engine/types";
import { Controller, ControllerSelectorProps, InitPayload } from "../types";

const headers = { "Access-Control-Allow-Origin": "*" };

export class RestController implements Controller {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  init = async (payload: InitPayload) => {
    const response = await axios.post(this.url, payload, { headers });
    return response.data;
  };

  update = async (state: GameState) => {
    const response = await axios.post(this.url, state, { headers });
    return response.data;
  };
}

export const RestControllerSelector: React.FunctionComponent<ControllerSelectorProps> =
  ({ setController, position }) => {
    const inputCallback = useCallback(
      (event) => {
        const controller = new RestController(event.target.value);
        setController(controller);
      },
      [setController]
    );

    return (
      <Form.Item label="Address" name={position}>
        <Input prefix={<GlobalOutlined />} onChange={inputCallback} />
      </Form.Item>
    );
  };
