export enum Player {
  Circle = "circle",
  Cross = "cross"
}

export type Game = Player[][];

export type Position = [number, number];

export const players = [Player.Circle, Player.Cross];
