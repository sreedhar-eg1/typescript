type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Results = {
  add: number;
  subtract: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Results = {
  add: mathOperations.add(5, 3),
  subtract: mathOperations.subtract(5, 3),
};

// This Results type is related to the Operations type, i.e it has same keys and stores the results of those operations
// so instead of defining Results type manually, we can derive it from Operations type using mapped types
type resultsMapped<T> = {
  [Key in keyof T]: number;
};
// now it takes all the key from the operations type and maps them to number type

let mathResultsMapped: resultsMapped<Operations> = {
  add: mathOperations.add(5, 3),
  subtract: mathOperations.subtract(5, 3),
};

// making property optional using mapped types
// making all properties optional
type ResultsOptional<T> = {
  [Key in keyof T]?: number;
};

// making all properties required, i.e making optional properties required
// That can be achieved using "-?"
type ResultsRequired<T> = {
  [Key in keyof T]-?: number;
};

// making properties readonly, means they cannot be reassigned
type ResultsReadonly<T> = {
  readonly [Key in keyof T]: number;
};

// To remove readonly property, we can use "-readonly"
type ResultsWritable<T> = {
  -readonly [Key in keyof T]: number;
};
