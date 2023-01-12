import { Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

export type HomePageProps = {};

export const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <>
      <Title>Snake Tron - Code Fights!</Title>

      <Paragraph>
        Snake Tron is a platform for developers to design and develop
        algorithm's to fight against each other.
      </Paragraph>

      <Paragraph>
        The game is a combination of the classic game of{" "}
        <a href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)">
          Snake
        </a>{" "}
        and the almost as classic game of{" "}
        <a href="https://en.wikipedia.org/wiki/Tron_(video_game)">Tron</a>.
        Where two or more players are on a grid, trying to cause the other
        players to crash. A player is able to strengthen themselves by
        collecting food, which increases their bike's trail by one. Last player
        surviving wins!
      </Paragraph>
    </>
  );
};
