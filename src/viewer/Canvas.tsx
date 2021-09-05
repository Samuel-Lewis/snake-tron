import React, { useLayoutEffect, useRef } from "react";
import { MetalessGameState, Pos } from "../engine/types";
import { getColour } from "../theme";

const CANVAS_SIZE = 400;

const posToCanvas = ([x, y]: Pos, partSize: number) => {
  return [x * partSize + partSize / 2, y * partSize + partSize / 2];
};

export type CanvasProps = {
  state: MetalessGameState;
  gridSize: number;
};

const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "white";
  ctx.strokeRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

function drawSnake(
  ctx: CanvasRenderingContext2D,
  partSize: number,
  snake: Pos[],
  player: number
) {
  const colour = getColour(player);
  const [headX, headY] = posToCanvas(snake[0], partSize);

  ctx.lineWidth = partSize - 2;
  ctx.strokeStyle = colour;
  ctx.lineCap = "square";
  ctx.beginPath();
  ctx.moveTo(headX, headY);

  snake.forEach((pos) => {
    const [x, y] = posToCanvas(pos, partSize);
    ctx.lineTo(x, y);
  });

  ctx.stroke();
}

const drawFood = (
  ctx: CanvasRenderingContext2D,
  partSize: number,
  pos: Pos
) => {
  const [x, y] = posToCanvas(pos, partSize);
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(x, y, partSize / 2, 0, 2 * Math.PI);
  ctx.fill();
};

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
    state.foodPositions.forEach((pos) => drawFood(ctx, partSize, pos));
  }, [canvasRef, state, gridSize]);

  return <canvas width={CANVAS_SIZE} height={CANVAS_SIZE} ref={canvasRef} />;
};
