// decorator in javacript are just function

// two argument is required for class decorator
// 1. target -> constructor function of the class
// 2. propertyKey -> name of the class

// to specify class type
// T extends new (...args: any[]) => any => means it extends class with any arguments[...args: any[]] and return any type

function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  // The nelow block will run when this file is parsed, not the returned class
  console.log("Logger decorator");
  console.log(target);
  console.log(ctx);

  // If we return a new class then it will replace the old class
  // here class has no name so its anonymous class
  return class extends target {
    // This return class run for each instance created
    age = 24;

    constructor(...args: any[]) {
      super(...args);
      console.log("New constructor");
      console.log(this);
    }
  };
}

// mehod decorator
function autoBind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext
) {
  console.log("AutoBind decorator");
  console.log(target);
  console.log(ctx);

  // addInitializer => is a utility method, means to get constructor function after the class has been fully defined
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  // like class decorator we can also return new function to replace the old function
  return function (this: any) {
    console.log("AutoBind function");
    target.apply(this);
  };
}

// FIELD DECORATOR

// type of target will be always undefined because decorator is applied before the field is initialized
// function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
//   console.log("Field decorator");
//   console.log(target);
//   console.log(ctx);

//   // we can also return value to replace the old value
//   // we will get initial value as an argument
//   return (initialValue: any) => {
//     console.log(initialValue)
//     return initialValue + " (modified by field decorator)";
//   }
// }

// converting above function to decorator factory to accept parameters
function fieldLogger(init: string) {
  return function fieldLoggerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext
  ) {
    console.log("Field decorator");
    console.log(target);
    console.log(ctx);

    // we can also return value to replace the old value
    // we will get initial value as an argument
    return (initialValue: any) => {
      console.log(initialValue);
      return initialValue + " " + init;
    };
  }
}

@logger
class Person {
  @fieldLogger("ED")
  name = "John Doe";

  // method decorator
  @autoBind
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Even though we are not intantiating, if we run "tsc", then logger works

// now lets intantiate the class to see the changes that decorator made
const person = new Person();
console.log(person); // now we can see age property added by decorator along with name property
