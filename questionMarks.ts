// ? : ternary operator : decision making

// ?? : nullish coalescing operator ===> undefined and null hole default value set kore deba

// ?. : optional chaining

const biyerJonnoEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log("you are eligible");
  //   } else {
  //     console.log("you are not eligible");
  //   }
  //   const result = age >= 21 ? "you are eligible" : "you are not eligible";
  //   console.log(result);
};

// biyerJonnoEligible(12);

// const userTheme = "green theme";
// const selectedTheme = userTheme ?? "light theme";
// console.log(selectedTheme);

// const isAuthenticated = "green";
// const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest !";

// const resultWithNullish = isAuthenticated ?? "you are guest";
// console.log({ resultWithTernary, resultWithNullish });

// Optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postcode: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};
const postcode = user?.address?.postcode;
console.log(postcode);
