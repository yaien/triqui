import { fill, clone } from "../utils";
import { players, Player, Game, Position } from "./meta";

export function emptyGame(): Game {
  return fill(3, () => fill(3, null));
}

export function randomPlayer(): Player {
  let index = Math.round(Math.random());
  return players[index];
}

export function nextTo(player: Player) {
  let index = players.indexOf(player);
  let nextIndex = index + 1;
  if (nextIndex >= players.length) return players[0];
  return players[nextIndex];
}

export function makeMove(game: Game, player: Player, pos: Position) {
  let nextGame = clone(game);
  let [x, y] = pos;
  nextGame[x][y] = player;
  return nextGame;
}

export function validateMove(game: Game, pos: Position) {
  let [x, y] = pos;
  if (game[x][y] !== null) throw Error(`${pos} isn't a valid move`);
}
