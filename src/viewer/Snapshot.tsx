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

export const StateSnapshot: React.FC<StateSnapshotProps> = ({ frame }) => {
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
        length: frame.positions[i].length,
      };
    });

  return (
    <>
      <Paragraph>Tick: {frame.tick}</Paragraph>
      <Paragraph>Food: {JSON.stringify(frame.foodPositions)}</Paragraph>

      <Table size="small" dataSource={playerData} pagination={false}>
        <Table.Column
          title="Player"
          dataIndex="playerNumber"
          key="playerNumber"
          render={(number: number) => (
            <>
              <span
                className="dot"
                style={{ backgroundColor: getColour(number) }}
              ></span>
              Player {number}
            </>
          )}
        />
        <Table.Column
          title="Alive"
          dataIndex="alive"
          key="alive"
          render={(alive: boolean) =>
            alive ? <CheckCircleOutlined /> : <CloseCircleOutlined />
          }
        />
        <Table.Column title="Last Move" dataIndex="lastMove" key="lastMove" />
        <Table.Column title="Length" dataIndex="length" key="length" />
        <Table.Column
          title="Positions"
          dataIndex="position"
          key="position"
          ellipsis
          render={(position: number) => JSON.stringify(position)}
        />
      </Table>
    </>
  );
};
