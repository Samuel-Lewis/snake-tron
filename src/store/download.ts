import { GameHistory } from "../engine/types";

export const createDownloadHref = (gameHistory: GameHistory) => {
  const jsonBlob = new Blob([JSON.stringify(gameHistory, null, 2)], {
    type: "text/json",
  });
  const href = URL.createObjectURL(jsonBlob);
  const download = `${gameHistory.timeStamp}.json`;

  return {
    href,
    download,
  };
};
