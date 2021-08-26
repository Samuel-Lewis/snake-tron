import React, { useEffect, useState } from "react";
import "./App.css";

import { Viewer } from "./viewer/Viewer";
import { GameState } from "./engine/types";
import { Game } from "./engine/game";
import { RandomController } from "./sample-controllers/random";

function App() {
  const [history, setHistory] = useState([] as GameState[]);

  useEffect(() => {
    const r1 = new RandomController();
    const r2 = new RandomController();
    const game = new Game([r1, r2]);
    setHistory(game.run());
  }, [setHistory]);

  return (
    <div className="App">
      <h1>🐍🏍️</h1>
      {history.length > 0 && <Viewer states={history} />}
    </div>
  );
}

export default App;
