import {
  emptyGame,
  randomPlayer,
  makeMove,
  nextTo,
  validateMove
} from "./engine/game";
import { Position } from "./engine/meta";
import { Status, Result } from "./engine/result";
import { check } from "./engine/check";

export class Triqui {
  result: Result;
  isEnd = false;
  game = emptyGame();
  turn = randomPlayer();

  play(pos: Position): Result {
    if (this.isEnd) return this.result;
    validateMove(this.game, pos);
    this.game = makeMove(this.game, this.turn, pos);
    this.result = check(this.game);
    this.turn = nextTo(this.turn);
    this.review();
    return this.result;
  }

  private review() {
    switch (this.result.status) {
      case Status.Draw:
      case Status.Win:
        this.isEnd = true;
        break;
    }
  }
}

export default Triqui;
