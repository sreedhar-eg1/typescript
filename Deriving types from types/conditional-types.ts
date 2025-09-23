type StringArray = string[];

// Here it looks like ternary operator but it is not, its typescript specific
// T extends any[] is similar to T === any[]

type GetElementType<T> = T extends any[] ? T[number] : never;

let numberText = 1;

type Example1 = GetElementType<StringArray>; // string
type Example2 = GetElementType<number>; // never

// ANOTHER EXAMPLE
type FullNamePerson = { firstName: string; lastName: string };
type FullnameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullnameOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
  }

  throw new Error("firstName and lastName are required");
}

const name1 = getFullName({ firstName: "Bruce", lastName: "Wayne" });
const name2 = getFullName({ firstName: "Bruce" }); // Error
