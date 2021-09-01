import { Button, Divider, message, Table, TableProps, Tag, Tooltip, Typography } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DeleteOutlined, DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { GameHistory, GameResult } from "../engine/types";
import { getHistories, removeHistory } from "../store";
import { createDownloadHref } from "../store/download";
import { Viewer } from "../viewer/Viewer";

const { Title } = Typography;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export type ViewerPageProps = {};

export const ViewerPage: React.FunctionComponent<ViewerPageProps> = () => {
  const [savedGames, setSavedGames] = useState<GameHistory[]>(
    getHistories().reverse()
  );
  const [loadedHistory, setLoadedHistory] = useState<GameHistory | undefined>();
  const query = useQuery();

  useEffect(() => {
    const id = query.get("gameId");
    if (!id) {
      return;
    }

    if (id === "latest") {
      setLoadedHistory(savedGames[0]);
      return;
    }

    const selected = savedGames.find((h) => h.gameId === id);
    if (selected) {
      setLoadedHistory(selected);
      return;
    }

    message.error(`Could not find game ${id}`);
  }, [savedGames, setLoadedHistory, query]);

  const dataSource = useMemo(() => {
    return savedGames.map((game) => {
      return {
        ...game,
        key: game.gameId,
      };
    });
  }, [savedGames]);

  const columns: TableProps<GameHistory>["columns"] = [
    {
      title: "Timestamp",
      dataIndex: "timeStamp",
      key: "timeStamp",
      ellipsis: true,
      sorter: {
        compare: (a, b: GameHistory) =>
          new Date(a.timeStamp).valueOf() - new Date(b.timeStamp).valueOf(),
        multiple: 1,
      },
      render: (timeStamp: string) => {
        return <span>{new Date(timeStamp).toString()}</span>;
      },
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
      sorter: {
        compare: (a: GameHistory, b: GameHistory) =>
          a.result.localeCompare(b.result),
        multiple: 2,
      },
      render(value: GameResult) {
        const colour =
          value === GameResult.WINNER
            ? "green"
            : value === GameResult.DRAW
            ? "blue"
            : "red";
        return <Tag color={colour}>{value}</Tag>;
      },
    },
    {
      title: "Winner",
      dataIndex: "winner",
      key: "winner",
      sorter: {
        compare: (a: GameHistory, b: GameHistory) => a.winner - b.winner,
        multiple: 3,
      },
    },
    {
      title: "Player Count",
      dataIndex: "playerCount",
      key: "playerCount",
      sorter: {
        compare: (a: GameHistory, b: GameHistory) =>
          a.playerCount - b.playerCount,
        multiple: 4,
      },
    },
    {
      title: "Tick Count",
      dataIndex: "tickCount",
      key: "tickCount",
      sorter: {
        compare: (a: GameHistory, b: GameHistory) => a.tickCount - b.tickCount,
        multiple: 5,
      },
    },
    {
      title: "Grid Size",
      dataIndex: "gridSize",
      key: "gridSize",
      sorter: {
        compare: (a: GameHistory, b: GameHistory) => a.gridSize - b.gridSize,
        multiple: 6,
      },
    },
    {
      title: "ID",
      dataIndex: "gameId",
      key: "gameId",
      ellipsis: true,
      sorter: {
        compare: (a: GameHistory, b: GameHistory) =>
          a.gameId.localeCompare(b.gameId),
        multiple: 7,
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: any) => {
        const { key, humanDate, ...rest } = record;
        const downloadProps = createDownloadHref(rest);
        return (
          <>
            <Tooltip title="View">
              <Link to={`/viewer?gameId=${rest.gameId}`}>
                <Button icon={<EyeOutlined />} />
              </Link>
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
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 10,
          position: ["topRight", "bottomRight"],
          showTotal: (total) => `${total} games`,
        }}
      />
    </>
  );
};
