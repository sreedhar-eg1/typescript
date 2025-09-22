// If we want something to be optional, then we can use "?" symbol

function generateErrorMessage(message?: string) {
  throw new Error(message);
}

generateErrorMessage();

// NULLISH COLESING OPERATOR
let input = "";
const provideAccess = input ?? false;
