function performMathActionOg(cb: (a: number, b: number) => number) {
  // some code...
}


function sum(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: SumFn | SubtractFn) {
  // some code...
}