import { checkFinish, checkWin, check } from "./check";
import { emptyGame } from "./game";
import { Player } from "./meta";
import { plain } from "../utils";
import { Status } from "./result";

let { Square, Cross } = Player;

let drawGame = [
  [Cross, Cross, Square],
  [Square, Square, Cross],
  [Cross, Square, Cross]
];

let notEndGame = [
  [Cross, Cross, Square],
  [Square, Square, Cross],
  [null, Cross, Cross]
];

let winGame = [
  [Cross, Cross, Square],
  [Square, Square, Cross],
  [Square, Cross, Cross]
];

it("Should check if the game ends with a draw", () => {
  let plainGame = plain(drawGame);
  expect(checkFinish(plainGame)).toBeTruthy();
});

it("Should check if the game is not end", () => {
  let plainGame = plain(notEndGame);
  expect(checkFinish(plainGame)).toBeFalsy();
});

it("Should check the winner", () => {
  let plainGame = plain(winGame);
  expect(checkWin(Square, plainGame)).toBeTruthy();
  expect(checkWin(Cross, plainGame)).toBeFalsy();
});

it("Check Should return a winner status", () => {
  let result = check(winGame);
  expect(result).toHaveProperty("status", Status.Win);
  expect(result).toHaveProperty("winner", Square);
});

it("Check Should return a draw status", () => {
  let result = check(drawGame);
  expect(result).toHaveProperty("status", Status.Draw);
});

it("Check Should return a play status", () => {
  let result = check(notEndGame);
  expect(result).toHaveProperty("status", Status.Play);
});
