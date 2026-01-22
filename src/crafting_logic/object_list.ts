export const objectData = {
  "rock": { 
    "attributes": {
      "temperature": 0,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 10,
      "forceful": true,
      "breakableAt": 2000,
      "mana": 0
    },
    "createdBy": []
  },
  "sand": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 2,
      "forceful": false,
      "breakableAt": 1500,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["rock", "rock"],
        "additionalRequirements": [
          {
            "name": "rock",
            "attribute": "strength",
            "value": 1,
            "comparison": "less"
          }
        ]
      }
    ]
  },
  "wood": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 300,
      "fuelQuantity": 100,
      "strength": 3,
      "forceful": false,
      "breakableAt": 200,
      "mana": 0
    },
    "createdBy": []
  },
  "glass": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 4,
      "forceful": false,
      "breakableAt": 1200,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["sand"],
        "additionalRequirements": [
          {
            "name": "sand",
            "attribute": "temperature",
            "value": 1000,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "coal": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 200,
      "fuelQuantity": 800,
      "strength": 2,
      "forceful": false,
      "breakableAt": 500,
      "mana": 0
    },
    "createdBy": []
  },
  "charcoal": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 200,
      "fuelQuantity": 700,
      "strength": 2,
      "forceful": false,
      "breakableAt": 450,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["wood"],
        "additionalRequirements": [
          {
            "name": "wood",
            "attribute": "temperature",
            "value": 300,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "iron_ore": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 6,
      "forceful": false,
      "breakableAt": 1000,
      "mana": 0
    },
    "createdBy": []
  },
  "iron": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 12,
      "forceful": false,
      "breakableAt": 1500,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["iron_ore"],
        "additionalRequirements": [
          {
            "name": "iron_ore",
            "attribute": "temperature",
            "value": 1200,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "copper_ore": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 5,
      "forceful": false,
      "breakableAt": 900,
      "mana": 0
    },
    "createdBy": []
  },
  "copper": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 8,
      "forceful": false,
      "breakableAt": 1200,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["copper_ore"],
        "additionalRequirements": [
          {
            "name": "copper_ore",
            "attribute": "temperature",
            "value": 1000,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "gold_ore": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 4,
      "forceful": false,
      "breakableAt": 800,
      "mana": 0
    },
    "createdBy": []
  },
  "gold": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 7,
      "forceful": false,
      "breakableAt": 1100,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["gold_ore"],
        "additionalRequirements": [
          {
            "name": "gold_ore",
            "attribute": "temperature",
            "value": 1000,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "water": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 0,
      "mana": 0
    },
    "createdBy": []
  },
  "steam": {
    "attributes": {
      "temperature": 200,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 0,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["water"],
        "additionalRequirements": [
          {
            "name": "water",
            "attribute": "temperature",
            "value": 100,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "lava": {
    "attributes": {
      "temperature": 1200,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 20,
      "forceful": true,
      "breakableAt": 99999,
      "mana": 0
    },
    "createdBy": []
  },
  "obsidian": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 20,
      "forceful": false,
      "breakableAt": 5000,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["lava", "water"],
        "additionalRequirements": []
      }
    ]
  },
  "stone_brick": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 15,
      "forceful": false,
      "breakableAt": 3000,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["rock", "rock"],
        "additionalRequirements": []
      }
    ]
  },
  "stick": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 200,
      "fuelQuantity": 20,
      "strength": 1,
      "forceful": false,
      "breakableAt": 50,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["plank"],
        "additionalRequirements": [
          {
            "name": "plank",
            "attribute": "strength",
            "value": 1,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "plank": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 250,
      "fuelQuantity": 80,
      "strength": 2,
      "forceful": false,
      "breakableAt": 150,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["wood"],
        "additionalRequirements": [
          {
            "name": "wood",
            "attribute": "strength",
            "value": 2,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "paper": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 250,
      "fuelQuantity": 30,
      "strength": 1,
      "forceful": false,
      "breakableAt": 30,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["plank"],
        "additionalRequirements": [
          {
            "name": "plank",
            "attribute": "temperature",
            "value": 50,
            "comparison": "less"
          }
        ]
      }
    ]
  },
  "cloth": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 300,
      "fuelQuantity": 40,
      "strength": 1,
      "forceful": false,
      "breakableAt": 40,
      "mana": 0
    },
    "createdBy": []
  },
  "leather": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 280,
      "fuelQuantity": 50,
      "strength": 2,
      "forceful": false,
      "breakableAt": 80,
      "mana": 0
    },
    "createdBy": []
  },
  "bone": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 3,
      "forceful": false,
      "breakableAt": 400,
      "mana": 0
    },
    "createdBy": []
  },
  "bone_powder": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 50,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["bone"],
        "additionalRequirements": [
          {
            "name": "bone",
            "attribute": "strength",
            "value": 1,
            "comparison": "less"
          }
        ]
      }
    ]
  },
  "wheat": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 5,
      "mana": 0
    },
    "createdBy": []
  },
  "flour": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 5,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["wheat"],
        "additionalRequirements": [
          {
            "name": "wheat",
            "attribute": "strength",
            "value": 0,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "bread": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 10,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["flour", "water"],
        "additionalRequirements": [
          {
            "name": "flour",
            "attribute": "temperature",
            "value": 30,
            "comparison": "less"
          }
        ]
      }
    ]
  },
  "apple": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 5,
      "mana": 0
    },
    "createdBy": []
  },
  "plant": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 5,
      "mana": 0
    },
    "createdBy": []
  },
  "leaf": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 2,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["plant"],
        "additionalRequirements": []
      }
    ]
  },
  "sapling": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 10,
      "mana": 0
    },
    "createdBy": []
  },
  "dirt": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 1,
      "forceful": false,
      "breakableAt": 100,
      "mana": 0
    },
    "createdBy": []
  },
  "mud": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 1,
      "forceful": false,
      "breakableAt": 80,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["dirt", "water"],
        "additionalRequirements": []
      }
    ]
  },
  "clay": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 2,
      "forceful": false,
      "breakableAt": 600,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["dirt", "water"],
        "additionalRequirements": [
          {
            "name": "dirt",
            "attribute": "breakableAt",
            "value": 200,
            "comparison": "less"
          }
        ]
      }
    ]
  },
  "brick": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 8,
      "forceful": false,
      "breakableAt": 1500,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["clay"],
        "additionalRequirements": [
          {
            "name": "clay",
            "attribute": "temperature",
            "value": 800,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "cement": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 10,
      "forceful": false,
      "breakableAt": 2000,
      "mana": 0
    },
    "createdBy": []
  },
  "concrete": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 12,
      "forceful": false,
      "breakableAt": 2500,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["cement", "water"],
        "additionalRequirements": []
      }
    ]
  },
  "sulfur": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 100,
      "fuelQuantity": 50,
      "strength": 1,
      "forceful": false,
      "breakableAt": 60,
      "mana": 0
    },
    "createdBy": []
  },
  "salt": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 10,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["water"],
        "additionalRequirements": [
          {
            "name": "water",
            "attribute": "temperature",
            "value": 0,
            "comparison": "less"
          }
        ]
      }
    ]
  },
  "sugar": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 5,
      "mana": 0
    },
    "createdBy": []
  },
  "oil": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 100,
      "fuelQuantity": 500,
      "strength": 0,
      "forceful": false,
      "breakableAt": 0,
      "mana": 0
    },
    "createdBy": []
  },
  "gasoline": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 50,
      "fuelQuantity": 1000,
      "strength": 0,
      "forceful": false,
      "breakableAt": 0,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["oil"],
        "additionalRequirements": [
          {
            "name": "oil",
            "attribute": "temperature",
            "value": 200,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "plastic": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 300,
      "fuelQuantity": 200,
      "strength": 2,
      "forceful": false,
      "breakableAt": 200,
      "mana": 0
    },
    "createdBy": []
  },
  "rubber": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 250,
      "fuelQuantity": 150,
      "strength": 2,
      "forceful": false,
      "breakableAt": 180,
      "mana": 0
    },
    "createdBy": []
  },
  "feather": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 1,
      "mana": 0
    },
    "createdBy": []
  },
  "egg": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 2,
      "mana": 0
    },
    "createdBy": []
  },
  "shell": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 2,
      "forceful": false,
      "breakableAt": 80,
      "mana": 0
    },
    "createdBy": []
  },
  "fish": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 2,
      "mana": 0
    },
    "createdBy": []
  },
  "meat": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 2,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["fish"],
        "additionalRequirements": []
      }
    ]
  },
  "cooked_meat": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 2,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["meat"],
        "additionalRequirements": [
          {
            "name": "meat",
            "attribute": "temperature",
            "value": 100,
            "comparison": "more"
          }
        ]
      }
    ]
  },
  "bone_meal": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 0,
      "forceful": false,
      "breakableAt": 5,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["bone"],
        "additionalRequirements": [
          {
            "name": "bone",
            "attribute": "breakableAt",
            "value": 200,
            "comparison": "less"
          }
        ]
      }
    ]
  },
  "glass_shard": {
    "attributes": {
      "temperature": 20,
      "fuelAt": 0,
      "fuelQuantity": 0,
      "strength": 2,
      "forceful": true,
      "breakableAt": 300,
      "mana": 0
    },
    "createdBy": [
      {
        "combine": ["glass", "rock"],
        "additionalRequirements": [
          {
            "name": "rock",
            "attribute": "forceful",
            "value": 1,
            "comparison": "equal"
          }
        ]
      }
    ]
  }
} as const;