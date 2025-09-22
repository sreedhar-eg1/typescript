type DataStore = {
  [prop: string]: boolean | number;
};

// Alternative way for specifing key value
let someObj: Record<string, boolean | number>;

let store: DataStore = {
  id: 6,
  isOpen: false,
};

// to make the value assigned as const
let roles = ["admin", "guest", "editor"] as const;

// satisfies keyword
const dataEntries: Record<string, number> = {
    entry1: 12,
    entry2: 34
}

dataEntries.entry3 // can be accessed even though there is no entry 3 field

const dataEntriesSatisfies = {
    entry1: 12,
    entry2: 34
} satisfies Record<string, number>

// dataEntriesSatisfies.entry3 // will get an error as there is no entry3 field