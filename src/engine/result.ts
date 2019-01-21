import { Player } from "./meta";

export enum Status {
  Play = "play",
  Draw = "draw",
  Win = "win"
}

interface WinResult {
  status: Status.Win;
  winner: Player;
}

interface DrawResult {
  status: Status.Draw;
}

interface PlayResult {
  status: Status.Play;
}

export type Result = PlayResult | DrawResult | WinResult;
