type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: number;
    title: string;
    description: string;
  }[];
};

// If we need another type based on the above type, particular for permissions
// then we can use indexed access types
// means extracting part of the object as new type
type UserPersimission = AppUser["permissions"];

// The above gives array of object, if we want single object type, we can use number index
type SingleUserPermission = AppUser["permissions"][number];
// or
type SingleUserPermissionAlt = AppUser["permissions"][0];
// or
type SingleUserPermissionAlt2 = UserPersimission[number];