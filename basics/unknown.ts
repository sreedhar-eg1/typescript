// UNKNOWN TYPE
// We dont the type of value
// unknown is bit like "any" type
// If we use "any" we can i=use it in anyway, where we dont get any error

// unknown forces us to add some if checks before we do anything with the value

function process(value: unknown) {
  if (
    typeof value === "object" &&
    !!value &&
    "log" in value &&
    typeof value.log === "function"
  ) {
    value.log();
  }
}
