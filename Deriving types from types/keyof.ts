type User = { name: string; age: number };

// keyof usage
type UserKeys = keyof User; // "name" | "age"

let validUserKeys: UserKeys;
validUserKeys = "name";

// More usefull usage of keyof
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const value = obj[key];

  if (value === undefined || value === null) {
    throw new Error("Value not found");
  }

  return value;
}
