console.log("Hello typescript");

let userName: string; //number, boolean
let age = 24; // type infered by typescript as we have initialized the value

userName = "Sreedhar";

// function
function add(a: number, b = 5): number {
  return a + b;
}

add(10)
