let names: string[] = ["max", "anna"];
let namesArray: Array<string> = ["max", "anna"];

// type DataStore = {
//     [key: string]: string | number
// }

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Max";
store.isOpen = false;

// Generics in function
const merge = function <T>(a: T, b: T) {
  return [a, b];
};

const ids = merge<number>(1, 2);

// Multiple Generic type
const mergeType = function <T, U>(a: T, b: U) {
  return [a, b];
};

const idType = mergeType<number, string>(1, "max");

// generic contraints using extends keyword
// It helps the genric type to be particular type
const mergeObj = function <T extends object>(a: T, b: T) {
  return { ...a, ...b };
};

const idMerge = mergeObj({ a: 1 }, { b: 2 });


// GENERIC CLASSES
class User<T> {
  constructor(public id: T ) {}
}

const user1 = new User<string>("1");
const user2 = new User<number>(1);


// GENERIC INTERFACES
interface Role<T> {
  [key: string]: T;
}