import axios from "axios";
import { GameState } from "../../engine/types";
import { Controller, InitPayload } from "../types";

export class RestController implements Controller {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  init = async (payload: InitPayload) => {
    const response = await axios.post(this.url, payload);
    return response.data;
  };

  update = async (state: GameState) => {
    const response = await axios.post(this.url, state);
    return response.data;
  };
}
