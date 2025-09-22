class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// ALTERNATIVE WAY : to assign value to the field
class User1 {
  readonly hobbies: string[] = [];

  constructor(public name: string, protected age: number) {}
}

// constructor(public name: string, public age: number) {} => allows to immediately create a variable and assign the value

const user = new User("Sreedhar", 24);
const max = new User1("Max", 45);

max.hobbies
// max.hobbies = [] // cant change as it is a readonly field
