import { Table, Typography } from "antd";
import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { MetalessGameState } from "../engine/types";

const { Paragraph } = Typography;

export type StateSnapshotProps = {
  frame: MetalessGameState;
  viewedPlayer?: (player: number) => void;
};

export const StateSnapshot: React.FunctionComponent<StateSnapshotProps> = ({
  frame,
}) => {
  if (!frame) {
    return null;
  }
  const playerData = new Array(frame.playerAlive.length)
    .fill(null)
    .map((_, i) => {
      return {
        key: `Player ${i}`,
        name: `Player ${i}`,
        alive: frame.playerAlive[i],
        lastMove: frame.lastMoves[i],
        position: frame.positions[i],
      };
    });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Alive",
      dataIndex: "alive",
      key: "alive",
      render: (alive: boolean) =>
        alive ? <CheckCircleOutlined /> : <CloseCircleOutlined />,
    },
    {
      title: "Last Move",
      dataIndex: "lastMove",
      key: "lastMove",
    },
    {
      title: "Positions",
      dataIndex: "position",
      key: "position",
      render: (position: number) => JSON.stringify(position),
      ellipsis: true,
    },
  ];

  return (
    <>
      <Paragraph>Tick: {frame.tick}</Paragraph>
      <Paragraph>Food: {JSON.stringify(frame.food)}</Paragraph>
      <Table
        size="small"
        dataSource={playerData}
        columns={columns}
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{JSON.stringify(record.position)}</p>
          ),
        }}
      />
    </>
  );
};
