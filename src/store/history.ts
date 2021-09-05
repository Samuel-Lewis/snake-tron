import localforage from "localforage";
import { GameHistory } from "../engine/types";

const historyStore = localforage.createInstance({
  name: "history",
});

export const addHistory = async (history: GameHistory): Promise<void> => {
  await historyStore.setItem(history.gameId, history);
};

export const getHistories = async (): Promise<GameHistory[]> => {
  const keys = await historyStore.keys();
  const histories = await Promise.all(
    keys.map(async (key) => {
      const history = await historyStore.getItem(key);
      return history as GameHistory;
    })
  );
  return histories;
};

export const deleteHistory = async (gameId: string): Promise<void> => {
  await historyStore.removeItem(gameId);
};

export const deleteAllHistories = async (): Promise<void> => {
  await historyStore.clear();
};
