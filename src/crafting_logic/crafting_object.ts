import { objectData } from "./object_list";

// TYPECHECKING
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
// this will fail if json is malformed
export const allObjects: DeepReadonly<ObjectDefinitionMap> = objectData;

export type ValidObjectName = keyof typeof objectData;

export interface CraftingObject extends ObjectAttributes {
  name: ValidObjectName;
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

export type ObjectDefinitionMap = { [k in ValidObjectName]: ObjectDefinition };

export interface ObjectDefinition {
  attributes: ObjectAttributes;
  createdBy: CreationMethod[];
}

// an object can be created by either 2 objects interacting, or just 1 object.
// Please note that if a creation consists of just 1 object, and there are no additional
// requirements, that doesn't make sense, eg you wouldn't want something to always turn into
// something else unconditionally.
export interface CreationMethod {
  combine: [ValidObjectName, ValidObjectName] | [ValidObjectName];
  additionalRequirements: CreationRequirement[];
}

// Lists the constraints around various objects attributes in order for the creation
// to occur
export interface CreationRequirement {
  name: ValidObjectName;
  attribute: keyof ObjectAttributes;
  value: number;
  comparison: "equal" | "less" | "more";
}
