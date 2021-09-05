import { Table, Typography } from "antd";
import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { MetalessGameState } from "../engine/types";
import { getColour } from "../theme";

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
  const playerData = new Array(frame.playersAlive.length)
    .fill(null)
    .map((_, i) => {
      return {
        key: `Player ${i}`,
        alive: frame.playersAlive[i],
        lastMove: frame.lastMoves[i],
        position: frame.positions[i],
        playerNumber: i,
      };
    });

  const columns = [
    {
      title: "Player",
      dataIndex: "playerNumber",
      key: "playerNumber",
      render: (number: number) => {
        return (
          <>
            <span
              className="dot"
              style={{ backgroundColor: getColour(number) }}
            ></span>
            Player {number}
          </>
        );
      },
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
      <Paragraph>Food: {JSON.stringify(frame.foodPositions)}</Paragraph>
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
