import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export const LifeCycle: React.FC = () => {
  return (
    <>
      <Title level={2}>Life Cycle</Title>
      <Paragraph>
        A game takes place over 3 stages.{" "}
        <ol>
          <li>Controller initialisation</li>
          <li>Game execution</li>
          <li>Cleanup</li>
        </ol>
      </Paragraph>
      <Title level={3}>Controller setup</Title>
      <Paragraph>
        When a game is first started, all controllers are initialised. This
        allows the game to check the controllers are alive, but also gives
        opportunities to the controllers to initialise their game state. Each
        controller is sent the{" "}
        <Link to="/docs/data-types">Initialisation Payload</Link>. If a
        controller fails to respond, the game does not start.
      </Paragraph>
      <Title level={3}>Game execution</Title>
      <Paragraph>
        A game continues until there are one or less players left alive, or
        until the game reaches the specified number of ticks. If there is only
        one player left, the game is considered a win for the remaining player.
        If there is less than one player left, the game is considered a draw for
        all players. If there is more than one player left, ie, reached the
        specified number of ticks, the game is considered a draw.
      </Paragraph>
      <Paragraph>
        The game loop follows the same pattern every tick
        <ol>
          <li>Check end game conditions</li>
          <li>Fetch all controllers moves</li>
          <li>Apply moves to game state</li>
        </ol>
        If a player has died, the player's corresponding controller will no
        longer receive requests for moves until the final cleanup stage.
      </Paragraph>
      <Title level={3}>Cleanup</Title>
      <Paragraph>
        After the game has ended, all controllers are sent the a cleanup
        message, which includes the <Link to="/docs/data-types">GameState</Link>
        . This allows the controllers to clean up their game state or shutdown
        any long running processes.
      </Paragraph>
    </>
  );
};
