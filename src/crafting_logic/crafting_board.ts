import { CraftingObject, allObjects, ValidObjectName, CreationRequirement } from "./crafting_object";

export interface CraftingBoard {
  width: number;
  height: number;
  // always width * height number of cells
  cells: (CraftingObject | undefined)[];
  // always width * height number of cells
  cellCooldowns: number[];
}

export function newDefaultObject(name: ValidObjectName): CraftingObject {
  return { name, ...allObjects[name].attributes};
}

export function addObjectToBoard(board: CraftingBoard, x: number, y: number, name: ValidObjectName) {
  if (x >= 0 && x < board.width && y >= 0 && y < board.height) {
    board.cells[x + board.width * y] = newDefaultObject(name);
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
      doInteraction(board.cells[cellIndex]);
      interactions.forEach(v => doInteraction(...v));
    }
  }
}

function requirementMet(obj: CraftingObject, requirement: CreationRequirement): boolean {
  // requirements are basically constraints. If its not talking about the object name in
  // question, then it doesn't apply and that requirement is met.
  if (requirement.name !== obj.name) {
    return true;
  }
  if (requirement.comparison === "equal") {
    return obj[requirement.attribute] == requirement.value;
  }
  if (requirement.comparison === "less") {
    return Number(obj[requirement.attribute]) < Number(requirement.value);
  }
  if (requirement.comparison === "more") {
    return Number(obj[requirement.attribute]) > Number(requirement.value);
  }
  console.error(`Invalid comparison type ${requirement.comparison}`);
  return false;
}

// looks up possible new CraftingObjects that can be created from the inputs.
// If a match is found, both objects are replaced with the resulting output.
function doInteraction(o1: CraftingObject, o2?: CraftingObject) {
  let interactionComplete = false;
  (Object.keys(allObjects) as ValidObjectName[]).forEach(key => {
    if (interactionComplete) return;

    allObjects[key].createdBy.forEach(method => {
      if (interactionComplete) return;

      if (o2 && method.combine.length == 2) {
        if (
          (o1.name == method.combine[0] && o2.name == method.combine[1]) ||
          (o2.name == method.combine[0] && o1.name == method.combine[1])
        ) {
          let allowed = true;
          method.additionalRequirements.forEach(requirement => {
            allowed &&= requirementMet(o1, requirement);
            allowed &&= requirementMet(o2, requirement);
          });
          if (allowed) {
            const newObject = newDefaultObject(key);
            Object.assign(o1, newObject);
            Object.assign(o2, newObject);
            interactionComplete = true;
          }
        }
      } else if (!o2 && method.combine.length == 1) {
        if (o1.name == method.combine[0]) {
          let allowed = true;
          method.additionalRequirements.forEach(requirement => {
            allowed &&= requirementMet(o1, requirement);
          });
          if (allowed) {
            const newObject = newDefaultObject(key);
            Object.assign(o1, newObject);
            interactionComplete = true;
          }
        }
      }
    });
  });
}