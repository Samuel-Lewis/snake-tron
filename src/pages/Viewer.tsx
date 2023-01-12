import {
  Button,
  Divider,
  message,
  Modal,
  notification,
  Space,
  Table,
  TableProps,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { GameHistory, GameResult } from "../engine/types";
import { createDownloadHref } from "../store/download";
import {
  deleteAllHistories,
  deleteHistory,
  getHistories,
} from "../store/history";
import { Viewer } from "../viewer/Viewer";
import { exampleGame } from "./example";

const { Title, Paragraph } = Typography;

type DeleteAllModalProps = {
  onDelete: () => void;
};
const DeleteAllModal: React.FunctionComponent<DeleteAllModalProps> = ({
  onDelete,
}) => {
  const openModal = useCallback(() => {
    Modal.warning({
      title: "Are you sure you want to delete all game replays?",
      closable: true,
      okText: "Delete all",
      okCancel: true,
      okButtonProps: {
        danger: true,
        type: "primary",
      },
      content: (
        <Paragraph>
          Are you sure you want to delete all game replays? This can not be
          undone.
        </Paragraph>
      ),
      onOk: onDelete,
    });
  }, [onDelete]);

  return (
    <Button icon={<DeleteOutlined />} onClick={openModal} danger type="text">
      Delete all histories
    </Button>
  );
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export type ViewerPageProps = {};

export const ViewerPage: React.FunctionComponent<ViewerPageProps> = () => {
  const routerHistory = useHistory();
  const [loadedHistories, setLoadedHistories] = useState<GameHistory[]>([
    exampleGame,
  ]);
  const [loadedHistory, setLoadedHistory] = useState<GameHistory | undefined>();
  const query = useQuery();

  const loadHistories = useCallback(async () => {
    getHistories()
      .then((histories) => {
        if (histories.length !== loadedHistories.length - 1) {
          setLoadedHistories([exampleGame, ...histories]);
        }
      })
      .catch((e) => {
        notification.error({
          message: "Failed to load all histories",
          description: e.message,
        });
      });
  }, [loadedHistories]);

  useEffect(() => {
    loadHistories();
    const id = query.get("gameId");
    if (!id || loadedHistories.length === 0) {
      setLoadedHistory(undefined);
      return;
    }

    const selected = loadedHistories.find((h) => h.gameId === id);
    if (selected) {
      if (selected.gameId !== loadedHistory?.gameId) {
        setLoadedHistory(selected);
      }
      return;
    } else {
      message.error(`Could not find game ${id}`);
    }
  }, [loadedHistories, loadedHistory, setLoadedHistory, loadHistories, query]);

  const deleteAll = useCallback(async () => {
    deleteAllHistories()
      .then(() => {
        setLoadedHistory(undefined);
        setLoadedHistories([]);
        routerHistory.push("/viewer");
      })
      .catch((e) => {
        notification.error({
          message: "Failed to delete all histories",
          description: e.message,
        });
      });
  }, [setLoadedHistory, setLoadedHistories, routerHistory]);

  const deleteSingleHistory = useCallback(
    async (gameId: string) => {
      deleteHistory(gameId)
        .then(() => {
          if (loadedHistory?.gameId === gameId) {
            setLoadedHistory(undefined);
            loadHistories();
            routerHistory.push("/viewer");
            return;
          }
          loadHistories();
        })
        .catch((e) => {
          notification.error({
            message: "Failed to delete history",
            description: e.message,
          });
        });
    },
    [loadedHistory, setLoadedHistory, routerHistory, loadHistories]
  );

  const dataSource = useMemo(() => {
    return loadedHistories.map((game) => {
      return {
        ...game,
        key: game.gameId,
      };
    });
  }, [loadedHistories]);

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
      render(value: GameResult, record) {
        const player = record.winner;
        const colour =
          value === GameResult.WINNER
            ? "green"
            : value === GameResult.DRAW
            ? "blue"
            : "red";
        return (
          <>
            <Tag color={colour}>{value}</Tag>
            {player !== -1 && <span>Player {player}</span>}
          </>
        );
      },
    },
    {
      title: "Player count",
      dataIndex: "playerCount",
      key: "playerCount",
      sorter: {
        compare: (a: GameHistory, b: GameHistory) =>
          a.playerCount - b.playerCount,
        multiple: 4,
      },
    },
    {
      title: "Tick count",
      dataIndex: "tickCount",
      key: "tickCount",
      sorter: {
        compare: (a: GameHistory, b: GameHistory) => a.tickCount - b.tickCount,
        multiple: 5,
      },
    },
    {
      title: "Grid size",
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
          <Space>
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
                onClick={() => deleteSingleHistory(record.gameId)}
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </Space>
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

      <DeleteAllModal onDelete={deleteAll} />
    </>
  );
};
