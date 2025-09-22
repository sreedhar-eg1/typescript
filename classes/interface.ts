interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// If we add another interface with the same name, then the two interfaces are merged automatically
interface Authenticatable {
  role: string;
}

interface AuthenticableAdmin extends Authenticatable {
  role: string;
}

let userAuth: Authenticatable = {
  email: "abc@gmail.com",
  password: "abc",
  login() {},
  logout() {},
  role: "manager",
};

type SumFn = (a: number, b: number) => number; // function type
let sum: SumFn;

interface SumFnIn {
  (a: number, b: number): number;
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public role: string
  ) {}

  login(): void {}

  logout(): void {}
}
