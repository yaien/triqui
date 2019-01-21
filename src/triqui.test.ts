import { Triqui } from "./triqui";
import { Player, Position } from "./engine/meta";

let { Cross, Square } = Player;

it("Should play and pass to the next turn", () => {
  let triqui = new Triqui();
  let turn = triqui.turn;
  triqui.play([2, 2]);
  expect(triqui.turn).not.toBe(turn);
});

describe("Ending the game", () => {
  let triqui = new Triqui();

  it("Should end the game on win or draw result", () => {
    triqui.turn = Cross;
    triqui.game = [
      [Cross, Cross, Square],
      [Square, Square, Cross],
      [Cross, Square, null]
    ];
    triqui.play([2, 2]);
    expect(triqui.isEnd).toBeTruthy();
  });

  it("Should not continue playing if is end", () => {
    let { turn, game } = triqui;
    triqui.play([0, 0]);
    expect(turn).toBe(triqui.turn);
    expect(game).toEqual(triqui.game);
  });
});
it("Should throw error on invalid move", () => {
  let triqui = new Triqui();
  let pos: Position = [2, 2];
  triqui.play(pos);
  expect(() => triqui.play(pos)).toThrow();
});
