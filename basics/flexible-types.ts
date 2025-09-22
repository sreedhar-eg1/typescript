let userAge: any = 23;

userAge = "45";
userAge = false;
userAge = {};
userAge = [];

// "any" defeats the purpose of typescript usage

// UNION TYPE

let userAgeUnion: string | number;
userAgeUnion = 23;
userAgeUnion = "45";
