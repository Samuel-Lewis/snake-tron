import {
    Button,
    Divider,
    Form,
    Space,
    Tooltip
} from "antd";
import { uniqueId } from "lodash";
import React, {
    useCallback,
    useMemo,
    useState
} from "react";
import {
    DeleteOutlined,
    PlusOutlined
} from "@ant-design/icons";
import { RestControllerFactory } from "../../controller/adapters/rest";
import {
    Controller,
    ControllerFactory,
    isController
} from "../../controller/types";

export type ControllerCreatorProps = {
  onControllerChange: (controllers: Controller[]) => void;
  onNext: () => void;
};

const availableFactories: ControllerFactory[] = [RestControllerFactory];

export const ControllerCreator: React.FunctionComponent<ControllerCreatorProps> =
  ({ onControllerChange, onNext }) => {
    const [factoriesWithID, setFactoriesWithID] = useState<
      Array<{ key: string; factory: ControllerFactory }>
    >([]);
    const controllers: Array<Controller | undefined> = useMemo(() => [], []);

    const selectorChange = useCallback(
      (pos) => (value: string) => {
        controllers[pos] = factoriesWithID[pos].factory.create(value);
        onControllerChange(controllers.filter(isController));
      },
      [onControllerChange, controllers, factoriesWithID]
    );

    const selectorFields = useMemo(
      () =>
        factoriesWithID.map(({ key, factory }, pos) => (
          <Space style={{ display: "flex" }} align="baseline" key={key}>
            <factory.Selector onChange={selectorChange(pos)} />
            <Button
              type="text"
              icon={<DeleteOutlined />}
              onClick={() => {
                setFactoriesWithID(
                  factoriesWithID.filter(({ key: k }) => k !== key)
                );
                controllers[pos] = undefined;
                onControllerChange(controllers.filter(isController));
              }}
            />
          </Space>
        )),
      [
        factoriesWithID,
        setFactoriesWithID,
        controllers,
        selectorChange,
        onControllerChange,
      ]
    );

    const selectorCreateButtons = useMemo(() => {
      return availableFactories.map((factory, pos) => {
        return (
          <Button
            key={pos}
            type="dashed"
            icon={<PlusOutlined />}
            onClick={() => {
              setFactoriesWithID([
                ...factoriesWithID,
                { key: uniqueId(factory.label), factory },
              ]);
            }}
          >
            Add {factory.label} controller
          </Button>
        );
      });
    }, [factoriesWithID, setFactoriesWithID]);

    return (
      <>
        <Form>{selectorFields}</Form>
        <Space>{selectorCreateButtons}</Space>
        <Divider />
        <Tooltip
          title="You must specifiy at least 2 controllers"
          placement="right"
        >
          <Button
            type="primary"
            onClick={onNext}
            disabled={controllers.length < 2}
          >
            Next
          </Button>
        </Tooltip>
      </>
    );
  };
