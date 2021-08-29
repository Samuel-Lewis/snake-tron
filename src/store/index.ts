import store from "store";
import { GameHistory } from "../engine/types";

export const enum StoreKeys {
  HISTORIES = "histories",
}

export const getHistories = (): GameHistory[] => {
  return store.get(StoreKeys.HISTORIES) || [];
};

export const setHistories = (histories: GameHistory[]): void => {
  store.set(StoreKeys.HISTORIES, histories);
};

export const addHistory = (history: GameHistory): void => {
  const histories = getHistories();
  histories.push(history);
  setHistories(histories);
};

export const removeHistory = (id: string): void => {
  const histories = getHistories().filter((history) => history.gameId !== id);
  setHistories(histories);
};
