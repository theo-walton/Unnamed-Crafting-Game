import { CraftingObject } from "./crafting_object";
import * as ObjectList from "./object_list.json";

export interface CraftingBoard {
  width: number;
  height: number;
  // always width * height number of cells
  cells: (CraftingObject | undefined)[];
  // always width * height number of cells
  cellCooldowns: number[];
}

export function addObjectToBoard(board: CraftingBoard, x: number, y: number, name: keyof typeof ObjectList) {
  const newObject = { name, ...ObjectList[name]};
  if (x >= 0 && x < board.width && y >= 0 && y < board.height) {
    board.cells[x + board.width * y] = newObject;
    board.cellCooldowns[x + board.width * y] = 10;
  }
}

export function removeObjectFromBoard(board: CraftingBoard, x: number, y: number) {
  if (x >= 0 && x < board.width && y >= 0 && y < board.height) {
    board.cells[x + board.width * y] = undefined;
    board.cellCooldowns[x + board.width * y] = 0;
  }
}

export function newCraftingBoard(): CraftingBoard {
  return {
    width: 3,
    height: 3,
    cells: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    cellCooldowns: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  };
}

export function tick(board: CraftingBoard) {
  const neighbors = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
  for (let y = 0; y < board.height; y++) {
    for (let x = 0; x < board.width; x++) {
      const cellIndex = x + board.width * y;
      // cell on cooldown
      if (board.cellCooldowns[cellIndex] > 1) {
        board.cellCooldowns[cellIndex] -= 1;
        continue;
      }
      // nothing in the cell
      if (board.cells[cellIndex] === undefined) {
        continue;
      }
      // interact with adjacent cells
      const interactions: [CraftingObject, CraftingObject][] = [];
      for (const [offsetX, offsetY] of neighbors) {
        const [newX, newY] = [x + offsetX, y + offsetY];
        if (newX >= 0 && newX < board.width && newY >= 0 && newY < board.height) {
          const possibleObject = board.cells[newX + board.width * newY];
          if (possibleObject) {
            interactions.push([board.cells[cellIndex], possibleObject]);
          }
        }
      }
      interactions.forEach(v => doInteraction(...v));
    }
  }
}

function doInteraction(o1: CraftingObject, o2: CraftingObject) {

}