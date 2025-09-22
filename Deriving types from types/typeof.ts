const username = "Sreedhar";

console.log(typeof username); // string

type UsernameType = typeof username; // type will be "Sreedhar" not "string"

// More usefull typeof usage

const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["Sreedhar", "Kumar"],
  playerInfo: {
    name: "Sreedhar",
    age: 30,
  },
};

// Simple type definition for settings object
type SettingType = {
  difficulty: string;
  minLevel: number;
  didStart: boolean;
  players: string[];
  playerInfo: {
    name: string;
    age: number;
  };
};

// Alternative approach using typeof
type SettingsTypeUsingTypeof = typeof settings; // Which is shorter and easier to maintain
