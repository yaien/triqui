export enum Player {
  Square = "square",
  Cross = "cross"
}

export type Game = Player[][];

export type Position = [number, number];

export const players = [Player.Square, Player.Cross];
