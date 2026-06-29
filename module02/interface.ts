type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

// interface : object type : array, object, function er data er shate kaj korbe
interface IUser {
  name: string;
  age: number;
  role: "admin" | "user";
}

type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "udoy",
  age: 23,
  role: "user",
};

const user2: IUser = {
  name: "kumar",
  age: 23,
  role: "admin",
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = true;
