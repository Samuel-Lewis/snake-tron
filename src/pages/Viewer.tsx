import { Button, Divider, Table, Tooltip, Typography } from "antd";
import React, { useMemo, useState } from "react";
import { DeleteOutlined, DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { GameHistory } from "../engine/types";
import { getHistories, removeHistory } from "../store";
import { createDownloadHref } from "../store/download";
import { Viewer } from "../viewer/Viewer";

const { Title } = Typography;

export type ViewerPageProps = {};

export const ViewerPage: React.FunctionComponent<ViewerPageProps> = () => {
  const [loadedHistory, setLoadedHistory] = useState<GameHistory | undefined>();
  const [savedGames, setSavedGames] = useState<GameHistory[]>(getHistories());
  const dataSource = useMemo(() => {
    return savedGames.map((game) => {
      const humanDate = new Date(game.timeStamp).toString();
      return {
        ...game,
        key: game.gameId,
        humanDate,
      };
    });
  }, [savedGames]);

  const columns = [
    {
      title: "Timestamp",
      dataIndex: "humanDate",
      key: "humanDate",
      ellipsis: true,
    },
    {
      title: "Winner",
      dataIndex: "winner",
      key: "winner",
    },
    {
      title: "Player Count",
      dataIndex: "playerCount",
      key: "playerCount",
    },
    {
      title: "Tick Count",
      dataIndex: "tickCount",
      key: "tickCount",
    },
    {
      title: "Grid Size",
      dataIndex: "gridSize",
      key: "gridSize",
    },
    {
      title: "ID",
      dataIndex: "gameId",
      key: "gameId",
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => {
        const { key, humanDate, ...rest } = record;
        const downloadProps = createDownloadHref(rest);
        return (
          <>
            <Tooltip title="View">
              <Button
                onClick={() => setLoadedHistory(record)}
                icon={<EyeOutlined />}
              />
            </Tooltip>

            <Tooltip title="Download">
              <Button icon={<DownloadOutlined />} {...downloadProps} />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                onClick={() => {
                  removeHistory(record.gameId);
                  setSavedGames(getHistories());
                }}
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Title>Game Viewer</Title>

      {loadedHistory && <Viewer history={loadedHistory} />}

      <Divider>Saved Rounds</Divider>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
