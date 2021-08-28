import { Button, Form } from "antd";
import React, { useCallback, useMemo } from "react";
import { RestControllerSelector } from "../../controller/adapters/rest";
import { Controller, isController } from "../../controller/types";

export type ControllerCreatorProps = {
  onControllerChange: (controllers: Controller[]) => void;
  onNext: () => void;
};

export const ControllerCreator: React.FunctionComponent<ControllerCreatorProps> =
  ({ onControllerChange, onNext }) => {
    const controllers: Array<Controller | undefined> = useMemo(() => [], []);

    const selectCallback = useCallback(
      (pos) => (controller: Controller) => {
        controllers[pos] = controller;
        onControllerChange(controllers.filter(isController));
      },
      [onControllerChange, controllers]
    );

    return (
      <>
        <Form>
          <RestControllerSelector setController={selectCallback(0)} />
          <RestControllerSelector setController={selectCallback(1)} />
        </Form>

        <Button type="primary" onClick={onNext}>
          Next
        </Button>
      </>
    );
  };
