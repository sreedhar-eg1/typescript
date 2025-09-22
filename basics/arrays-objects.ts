let hobbies: string[] = ["sports", "movies"];

// hobbies.push(354)

// let users: (string | number)[];\

// Alternative way using Generic Type
let users: Array<string | number>;

users = [34, "max"];

// TUPLE TYPE
let possibleResults: [number, number];
possibleResults = [1, -1];
// possibleResults = [1, 2, 3]

// Object type
let user: {
  name: string;
  age: number | string;
  hobbies?: string[];
} = {
  name: "Max",
  age: 23,
};

// Any value that is not null or undefined
let someValue: {} = "some text";
// someValue = null

// RECORD TYPE
// Something need to be object, as we dont know the field that exist in the object

let data: Record<string, string | number>;
data = {
  name: "sreedhar",
  age: 23,
};
