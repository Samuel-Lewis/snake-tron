import store from "store";
import { GameHistory } from "../engine/types";

export const enum StoreKeys {
  HISTORIES = "histories",
}

export const getHistories = (): GameHistory[] => {
  const histories = store.get(StoreKeys.HISTORIES) || {};
  return Object.values(histories as GameHistory[]).sort(
    (a, b) => new Date(a.timeStamp).valueOf() - new Date(b.timeStamp).valueOf()
  );
};

export const addHistory = (history: GameHistory): void => {
  const histories = store.get(StoreKeys.HISTORIES) || {};

  store.set(StoreKeys.HISTORIES, { ...histories, [history.gameId]: history });
};

export const removeHistory = (id: string): GameHistory[] => {
  const histories = store.get(StoreKeys.HISTORIES) || {};
  histories[id] = undefined;
  store.set(StoreKeys.HISTORIES, histories);
  return getHistories();
};

export const clearHistories = (): void => {
  store.set(StoreKeys.HISTORIES, {});
};
