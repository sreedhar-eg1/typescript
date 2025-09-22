// FUNCTION OVERLOAD
function getLength(value: any[]): number;
function getLength(value: string): string;
function getLength(value: string | any[]) {
  if (typeof value === "string") {
    const numberOfWords = value.split(" ").length;
    return `${numberOfWords} words`;
  }

  return value.length;
}

const numOfWords = getLength("Does this work?");
const numOfItems = getLength(["Shopping", "Cooking"]);
