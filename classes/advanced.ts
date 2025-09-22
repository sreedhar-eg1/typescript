class User2 {
  private _age: number | null = null;

  constructor(private firstName: string, private lastName: string) {}

  set age(age: number) {
    this._age = age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  static eid = "USER";
  static greet() {
    console.log("Hello");
  }
}

class Employee extends User2 {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
    // super.age = 23
  }

  work() {
    console.log(this.jobTitle);
  }
}

const frank = new User2("Frank", "Maxmellow");

frank.fullName;
frank.age = 12;

User2.eid;
User2.greet();

// ABSTRACt CLASS
abstract class UiElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {}
}

// cant intsantiate abstract classes
// new UiElement()

class SideBarElement extends UiElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}
