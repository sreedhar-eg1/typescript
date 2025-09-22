// ENUM
// Which allows use to specify specific options

enum Role {
  Admin,
  Editor,
  Guests,
}

let userRole: Role = Role.Admin;

// We can assign index value also, where  0 points to Admin and 1 points to Editor and so on...
userRole = 1;

// Alterative to ENUM: Being specific with Literal types
let userRoleLiteral: "admin" | "editor" | "guest" = "admin";
userRoleLiteral = "guest";

let possibleResultsLiteral: [1 | -1, 1 | -1] = [-1, 1];

// TYPE ALIASES AND CUSTOM TYPES
type RoleType = "admin" | "editor" | "guest";
let userRoleType: RoleType = "admin";

type User = {
  name: string;
  age: number;
  role: RoleType;
};

