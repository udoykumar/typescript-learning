// object destructuring
// array destructuring

// type Users ={
// id:
// }

const user = {
  id: 1234,
  name: {
    firstName: "udoy",
    middleName: "kumar",
    lastName: "pal",
  },
  gender: "male",
  favoriteColors: ["black"],
};

// const myFavoriteColors = user.favoriteColors;

const myName = user.name.firstName;
console.log(myName);

const {
  favoriteColors: myFavoriteColors,
  name: { middleName },
} = user;
console.log({ myFavoriteColors, middleName });

const friends = ["karim", "Rahim", "Mahim"];
const myBestFriends = friends[1];
const [a, b, c] = friends;
const [, d] = friends;
console.log({ a, b, c });
