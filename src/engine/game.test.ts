import {
  emptyGame,
  randomPlayer,
  nextTo,
  makeMove,
  validateMove
} from "./game";
import { players, Player, Position } from "./meta";

beforeAll(() => jest.resetAllMocks());

it("Game Should be initialized with Non Player", () => {
  let board = emptyGame();
  expect(board).toHaveLength(3);
  for (let row of board) {
    expect(row).toHaveLength(3);
    row.forEach(item => expect(item).toBe(null));
  }
});

it("Should init with random player", () => {
  let mock = jest.fn().mockReturnValue(0.1);
  Math.random = mock;
  let player = randomPlayer();
  expect(player).toBe(players[0]);
  mock.mockReturnValue(0.9);
  player = randomPlayer();
  expect(player).toBe(players[players.length - 1]);
});

it("Should return next player", () => {
  let firstPlayer = players[0];
  expect(nextTo(firstPlayer)).toBe(players[1]);
  let lastPlayer = players[players.length - 1];
  expect(nextTo(lastPlayer)).toBe(players[0]);
});

it("SetMove should return a new game with the current move", () => {
  let game = emptyGame();
  let pos: Position = [2, 2];
  let nextGame = makeMove(game, Player.Cross, pos);
  expect(nextGame).not.toEqual(game);
});

it("Should validate is valid move", () => {
  let game = emptyGame();
  let pos: Position = [2, 2];
  game = makeMove(game, Player.Cross, pos);
  expect(() => validateMove(game, pos)).toThrow();
  expect(() => validateMove(game, [0, 0])).not.toThrow();
});
