//nullable types
// const getUser = (input: string | null) => {
//   if (input) {
//     console.log(`From DB: ${input}`);
//   } else {
//     console.log("form db all user");
//   }
// };

// getUser("udoy");
// getUser(null);

// unknown

// const discountCalculate = (input) => {
//   if (typeof input === "number") {
//     const discountedPrice = input * 0.1;
//     console.log(discountedPrice);
//   } else if (typeof input === "string") {
//     const [discountedPrice] = input.split(" ");

//     console.log(Number(discountedPrice) * 0.1);
//   } else {
//     console.log("wrong input");
//   }
// };

// discountCalculate(100);
// discountCalculate("100 tk");
// discountCalculate(null);
// discountCalculate("");

// void
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error");
