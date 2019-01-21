import { checkFinish, checkWin, check } from "./check";
import { Player } from "./meta";
import { plain } from "../utils";
import { Status } from "./result";

let { Circle, Cross } = Player;

let drawGame = [
  [Cross, Cross, Circle],
  [Circle, Circle, Cross],
  [Cross, Circle, Cross]
];

let notEndGame = [
  [Cross, Cross, Circle],
  [Circle, Circle, Cross],
  [null, Cross, Cross]
];

let winGame = [
  [Cross, Cross, Circle],
  [Circle, Circle, Cross],
  [Circle, Cross, Cross]
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
  expect(checkWin(Circle, plainGame)).toBeTruthy();
  expect(checkWin(Cross, plainGame)).toBeFalsy();
});

it("Check Should return a winner status", () => {
  let result = check(winGame);
  expect(result).toHaveProperty("status", Status.Win);
  expect(result).toHaveProperty("winner", Circle);
});

it("Check Should return a draw status", () => {
  let result = check(drawGame);
  expect(result).toHaveProperty("status", Status.Draw);
});

it("Check Should return a play status", () => {
  let result = check(notEndGame);
  expect(result).toHaveProperty("status", Status.Play);
});
