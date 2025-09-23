function add(a: number, b: number): number {
  return a + b;
}

// To get the type of function using typeof operator
type AddFnType = typeof add; // (a: number, b: number) => number

// If we need a utitilty type just to extract the return type of a function
// To use infer the type must be generic type
type AddFnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Result = AddFnReturnType<AddFnType>; // number