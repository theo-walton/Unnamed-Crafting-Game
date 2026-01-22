import * as ObjectList from "./object_list.json";

// this will fail if json is malformed
const validMap: ObjectDefinitionMap = ObjectList;

export type ValidObjectNames = keyof typeof ObjectList;

export interface CraftingObject extends ObjectAttributes {
  name: ValidObjectNames;
};

export interface ObjectAttributes {
  temperature: number;
  fuelAt: number;
  fuelQuantity: number;
  strength: number;
  forceful: boolean;
  breakableAt: number;
  mana: number;
}

export type ObjectDefinitionMap = { [k in ValidObjectNames]: ObjectDefinition };

export interface ObjectDefinition {
  attributes: ObjectAttributes;
  craetedBy: CreationMethod[];
}

export interface CreationMethod {
  combine: [ValidObjectNames, ValidObjectNames] | [ValidObjectNames];
  additionalRequirements: CreationRequirement[];
}

export interface CreationRequirement {
  name: ValidObjectNames;
  attribute: keyof ObjectAttributes;
  value: number;
  comparison: "equal" | "less" | "more";
}
