// FUNCTION RETURN TYPE

function addFn(a: number, b: number): number {
  return a + b;
}

// If a function doesnot return anything, then the return type is void
function log(message: string): void {
  console.log(message);
}

// NEVER TYPE
// Means this function never complete and never return anything
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

// FUNCTIONS AS TYPES

const logMsg = (message: string) => console.log(message);

function performJob(cb: (m: string) => void) {
  cb("Job done");
}

performJob(logMsg);

type UserFn = {
  name: string;
  age: number;
  greet: (m: string) => void;
};
