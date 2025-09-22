// We can force the variable that the value exists using "!" symbol

const inputEl = document.getElementById("user-name")!;

// if (!inputEl) throw new Error("No Element")

console.log((inputEl as HTMLInputElement).value);

// TYPE CASTING -> converting one type to another using "as" keyword
const inputElType = document.getElementById("user-name") as (HTMLInputElement | null);

console.log(inputElType?.value);
