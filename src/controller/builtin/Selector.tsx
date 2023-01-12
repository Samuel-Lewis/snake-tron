import { Select } from "antd";
import { useCallback } from "react";
import { ControllerFactory, ControllerSelector } from "../types";
import { BuiltInRandomController } from "./random";

export const BuiltinControllerSelector: ControllerSelector = ({ onChange }) => {
  const onChangeCallback = useCallback(
    (value) => {
      if (onChange) {
        onChange(value);
      }
    },
    [onChange]
  );
  return (
    <Select
      style={{ minWidth: 120 }}
      onChange={onChangeCallback}
      options={[
        {
          value: "random",
          label: "Random",
        },
      ]}
    />
  );
};

export const BuiltInControllerFactory: ControllerFactory = {
  Selector: BuiltinControllerSelector,
  create: (value) => {
    switch (value) {
      case "random":
        return new BuiltInRandomController();
      default:
        throw new Error("Unknown controller: " + value);
    }
  },
  label: "builtin",
};
