type User = {
  id: number;
  name: { firstName: string; lastName: string };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 234,
  name: {
    firstName: "udoy",
    lastName: "kumar",
  },
  gender: "male",
  contactNo: "0172332343",
  address: {
    division: "dhaka",
    city: "Rajshahi",
  },
};

type IsAdmin = true;
const isAdmin: IsAdmin = true;
type Name = string;
const myNames: Name = "mr. jon";
console.log(myName);

type AddFunc = (num1: number, num2: number) => number;
const add = (num1: number, num2: number) => num1 + num2;
console.log(add);
