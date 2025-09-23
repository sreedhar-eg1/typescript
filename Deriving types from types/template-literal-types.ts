type ReadPermission = "no-read" | "read";
type WritePermission = "no-write" | "write";

// Now if we need a new type with all possible combination like "no-read-write", "read-write", "no-read-no-write", "read-no-write"
type FilePermissionWithUnion =
  | "no-read-no-write"
  | "no-read-write"
  | "read-no-write"
  | "read-write";

// Instead we can use template literal types to derive a new type from existing types
type FilePermission = `${ReadPermission}-${WritePermission}`;
