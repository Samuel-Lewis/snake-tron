import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { MD } from "../markdown";

const { Title, Paragraph } = Typography;

export const RestDocs: React.FC = () => {
  return (
    <>
      <Title level={2}>REST API</Title>
      <Paragraph>
        <Button type="link">
          <Link to="/tester">Go to controller tester</Link>
        </Button>
      </Paragraph>
      <Paragraph>
        The REST controller is an controller that relies on HTTP GET/POST
        requests. The benefits of this controller are that it is completely
        language agnostic. Disadvantages are that HTTP requests add a slower
        overhead for every game tick.
      </Paragraph>
      <Paragraph>
        The REST controller follows the same pattern as with all controllers,
        except the endpoints are slightly tailored to the REST API. There is a 2
        second timeout on all requests.
      </Paragraph>
      <Title level={3}>Initialisation Payload</Title>
      <Paragraph>
        <MD
          text={
            "The initialisation of a REST controller is done through a POST request to `/init`. An additional query parameter `playerNumber` is always included to specify the player number. Example: `http://localhost:8000/init?playerNumber=2`"
          }
        />
      </Paragraph>
      <Paragraph>
        The POST request's body will include a JSON of the{" "}
        <Link to="docs/data-types">Initialiser Payload</Link>.
      </Paragraph>
      <Paragraph>
        The game expects a 200 OK response, but any body returned will be
        ignored.
      </Paragraph>

      <Title level={3}>Game Update</Title>
      <Paragraph>
        For every game tick, the controller will be queried and is expected to
        return a <Link to="docs/data-types">Move</Link>.
      </Paragraph>
      <Paragraph>
        <MD
          text={
            "A POST request is sent to `/update`. An additional query parameter `playerNumber` is always included to specify the player number. Example: `http://localhost:8000/update?playerNumber=2`"
          }
        />
      </Paragraph>
      <Paragraph>
        The POST request's body will include a JSON of the{" "}
        <Link to="docs/data-types">GameState Payload</Link>.
      </Paragraph>
      <Paragraph>
        The game expects a 200 OK response, as well as a plain text{" "}
        <Link to="docs/data-types">Move</Link> response.
      </Paragraph>
      <Title level={3}>Cleanup</Title>
      <Paragraph>
        At the end of the game, the controller is sent a final "shutdown" or
        "cleanup" request to assist in the cleanup of the controller.
      </Paragraph>
      <Paragraph>
        <MD
          text={
            "A POST request is sent to `/end`. An additional query parameter `playerNumber` is always included to specify the player number. Example: `http://localhost:8000/end?playerNumber=2`"
          }
        />
      </Paragraph>
      <Paragraph>
        The POST request's body will include a JSON of the{" "}
        <Link to="docs/data-types">GameState Payload</Link> but nothing is
        expected to be done with it.
      </Paragraph>
      <Paragraph>
        The game does not expect any response. Any response will be ignored.
      </Paragraph>
    </>
  );
};
