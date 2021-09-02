import { Form, Input } from "antd";
import axios from "axios";
import React, { useCallback } from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { GameState } from "../../engine/types";
import { Controller, ControllerFactory, ControllerSelector, InitPayload } from "../types";

const axiosOptions = {
  headers: { "Access-Control-Allow-Origin": "*" },
  timeout: 2000,
};

export class RestController implements Controller {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  init = async (payload: InitPayload) => {
    const params = { playerNumber: payload.playerNumber };
    const response = await axios.post(this.url + "/init", payload, {
      ...axiosOptions,
      params,
    });
    return response.data;
  };

  update = async (state: GameState, playerNumber?: number) => {
    const params = { playerNumber };
    const response = await axios.post(this.url + "/update", state, {
      ...axiosOptions,
      params,
    });
    return response.data;
  };

  end = async (state: GameState, playerNumber?: number) => {
    const params = { playerNumber };
    const response = await axios.post(this.url + "/end", state, {
      ...axiosOptions,
      params,
    });

    return response.data;
  };
}

export const RestControllerSelector: ControllerSelector = ({ onChange }) => {
  const onChangeCallback = useCallback(
    (e) => {
      if (onChange) {
        onChange(e.target.value);
      }
    },
    [onChange]
  );
  return (
    <Form.Item label="Address">
      <Input prefix={<GlobalOutlined />} onChange={onChangeCallback} />
    </Form.Item>
  );
};

export const RestControllerFactory: ControllerFactory = {
  Selector: RestControllerSelector,
  create: (value) => new RestController(value),
  label: "REST",
};
