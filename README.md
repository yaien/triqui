# triqui

**A Tic Tac Toe written in javascript**

|     |     |     |
| --- | --- | --- |
| O   | O   | X   |
| O   | X   | O   |
| X   | O   | X   |

## Install

`npm install triqui`

## Usage

> **Start a new game with**

```javascript
import Triqui from "triqui";

let triqui = new Triqui();
```

> **_game board positions for make moves_**

|       | y   | y   | y   |
| ----- | --- | --- | --- |
| **x** | 0   | 1   | 2   |
| **x** | 0   | 1   | 2   |
| **x** | 0   | 1   | 2   |

> **Make a move** giving [x, y] position in board **`triqui.play([x, y])`**, the current inital player its selected ramdomly

> **Result** is going to be the current status of the game, can be "draw", "win" and "play"(_not ended game_)

```javascript
triqui.play([0, 1]);
/*
 * return result
 * { status: "play" }
 * { status: "draw" }
 * { status: "win", winner: "cross"}
 **/

triqui.game;
/**
 *  [null, "circle", null],
 *  [null,  null, null],
 *  [null,  null, null]
 **/

triqui.turn; // "cross" or "circle"

triqui.play([5, 5]); // Throws range error
triqui.play([0, 1]); // Throws error invalid move when move is already maked

triqui.isEnd; // boolean
```

## Attributes

| name   | type    | description                 |
| ------ | ------- | --------------------------- |
| isEnd  | boolean | indicate if the game is end |
| game   | array   | current board of the game   |
| turn   | Player  | current player              |
| result | Result  | status after the last move  |

## Types

- **Player** -> "circle" | "cross"
- **Result**
  - **Status** -> "draw" | "win" | "play"
  - **Winner** -> a **Player**
