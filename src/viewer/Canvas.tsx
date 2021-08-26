import React, { useRef, useLayoutEffect } from "react";
import { GameState, Pos } from "../engine/types";

const CANVAS_SIZE = 400;

export type CanvasProps = {
  state: GameState;
};

const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.strokeRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

function drawPart(
  ctx: CanvasRenderingContext2D,
  partSize: number,
  [x, y]: Pos,
  colour: string
) {
  ctx.fillStyle = colour;
  ctx.fillRect(x * partSize, y * partSize, partSize, partSize);
}

function drawSnake(
  ctx: CanvasRenderingContext2D,
  partSize: number,
  snake: Pos[],
  player: number
) {
  const colour = "red";
  snake.forEach((pos) => drawPart(ctx, partSize, pos, colour));
}

export const Canvas: React.FunctionComponent<CanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state } = props;

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const gridSize = state.meta.gridSize;
    const partSize = CANVAS_SIZE / gridSize;

    clearCanvas(ctx);
    state.positions.forEach((player, i) => {
      drawSnake(ctx, partSize, player, i);
    });
    state.food.forEach((pos) => drawPart(ctx, partSize, pos, "green"));
  }, [canvasRef, state]);

  return (
    <canvas
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      ref={canvasRef}
      {...props}
    />
  );
};
