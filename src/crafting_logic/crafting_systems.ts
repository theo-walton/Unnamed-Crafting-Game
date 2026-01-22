import { CraftingObject } from "./crafting_object";

// THERMAL CHANGES
export function temperatureEqualizer(o1: CraftingObject, o2: CraftingObject) {
  const average = (o1.temperature + o2.temperature) / 2;
  o1.temperature = average;
  o2.temperature = average;
}

export function ignition(o1: CraftingObject) {
  if (o1.temperature > o1.fuelAt) {
    o1.temperature += o1.fuelQuantity;
    o1.fuelQuantity = 0;
  }
}

// PHYSICAL CHANGES
export function destruction(o1: CraftingObject, o2: CraftingObject) {
  if (o1.forceful || o2.forceful) {
    if (o1.strength < o2.strength) {
      o1.strength -= 1;
    } else if (o2.strength < o1.strength) {
      o2.strength -= 1;
    } else {
      o1.strength -= 1;
      o2.strength -= 1;
    }
  }
}

export function broken(o1: CraftingObject): boolean {
  if (o1.strength < 0 && o1.temperature < o1.breakableAt) {
    return true;
  }
  return false;
}

export function erode(o1: CraftingObject, o2: CraftingObject) {
  // o1 is not breakable, o2 is.
  if (o1.forceful && o1.temperature > o1.breakableAt && o2.temperature < o2.breakableAt) {
    o2.strength -= 1;
  }
  // o2 is not breakable, o1 is.
  if (o2.forceful && o2.temperature > o2.breakableAt && o1.temperature < o1.breakableAt) {
    o1.strength -= 1;
  }
}

// // MAGIC CHANGES
export function manaSwap(o1: CraftingObject, o2: CraftingObject) {
  [o1.mana, o2.mana] = [o2.mana, o1.mana];
}