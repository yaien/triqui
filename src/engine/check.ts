import { Player, players, Game } from "./meta";
import { plain } from "../utils";
import { Result, Status } from "./result";

type Combination = [number, number, number];

/**
 * combinations to win the tic tac toe game (triqui) given
 *  0  1  2
 *  3  4  5
 *  6  7  8
 */
const combinations: Combination[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

export function checkWin(player: Player, plainGame: Player[]): boolean {
  for (let combination of combinations) {
    if (combination.every(position => plainGame[position] === player)) {
      return true;
    }
  }
  return false;
}

export function checkFinish(plainGame: Player[]): boolean {
  return plainGame.every(move => move !== null);
}

export function check(game: Game): Result {
  let plainGame: Player[] = plain(game);
  for (let player of players) {
    if (checkWin(player, plainGame)) {
      return { status: Status.Win, winner: player };
    }
  }
  if (checkFinish(plainGame)) return { status: Status.Draw };
  return { status: Status.Play };
}
