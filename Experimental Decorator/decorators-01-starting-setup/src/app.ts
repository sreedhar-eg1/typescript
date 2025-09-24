// Creating a simple class decorator
// function logger(target: Function) {
//   console.log("Logging...");
//   console.log(target);
// }

// Using decorator factory
function logger(logString: string) {
  return function (target: Function) {
    console.log("Logging...");
    console.log(logString);
    console.log(target);
  };
}

function withTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): {} }>(target: T) {
    return class extends target {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
        }
      }
    };
  };
}

// @logger // applying the decorator
@logger("Logging decorator factory") // applying the decorator factory
@withTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const per = new Person();
console.log(per);

console.log("--- IGNORE ---");

// Property decorator
function log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

// Accessor decorator
function log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method decorator
function log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter decorator
function log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @log
  title: string;
  private _price: number;

  @log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @log3
  getPriceWithTax(@log4 tax: number) {
    return this._price * (1 + tax);
  }
}

console.log("--- IGNORE ---");

function AutoBind(
  _: any,
  _1: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage);
