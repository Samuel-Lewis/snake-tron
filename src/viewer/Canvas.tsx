import React, { useLayoutEffect, useRef } from "react";
import { MetalessGameState, Pos } from "../engine/types";

const CANVAS_SIZE = 400;

export type CanvasProps = {
  state: MetalessGameState;
  gridSize: number;
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
  const { state, gridSize } = props;

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const partSize = CANVAS_SIZE / gridSize;

    clearCanvas(ctx);

    state.positions.forEach((player, i) => {
      drawSnake(ctx, partSize, player, i);
    });
    state.food.forEach((pos) => drawPart(ctx, partSize, pos, "green"));
  }, [canvasRef, state, gridSize]);

  return <canvas width={CANVAS_SIZE} height={CANVAS_SIZE} ref={canvasRef} />;
};
