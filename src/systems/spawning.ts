import type { Tile } from '../core/types';

export interface Toy {
  tile: Tile;
  type: string; // sprite name (toy-ball, etc.)
  value: number;
  timer: number; // seconds left on screen
}

const TOY_TYPES = ['toy-ball', 'toy-duck', 'toy-slipper', 'toy-bowl'];

/** A reachable corridor tile just above the dock where the bonus toy appears. */
export const TOY_SPOT: Tile = { c: 9, r: 9 };
export const TOY_DURATION = 8;
/** Bacon-eaten fractions that trigger the two toy appearances per room. */
export const TOY_THRESHOLDS = [0.25, 0.6];

export function toyForRoom(roomIndex: number): { type: string; value: number } {
  return { type: TOY_TYPES[roomIndex % TOY_TYPES.length], value: 100 + roomIndex * 100 };
}

export function spawnToy(roomIndex: number): Toy {
  const { type, value } = toyForRoom(roomIndex);
  return { tile: { ...TOY_SPOT }, type, value, timer: TOY_DURATION };
}
