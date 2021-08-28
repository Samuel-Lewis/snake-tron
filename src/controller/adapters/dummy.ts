import { Move } from "../../engine/types";
import { Controller } from "../types";

export class DummyController implements Controller {
  init = async () => {
    return Promise.resolve();
  };
  update = async () => {
    return Promise.resolve(Move.NORTH);
  };
}
