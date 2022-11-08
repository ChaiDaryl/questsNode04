require("dotenv").config();
console.log(
  `I am ${process.env.DB_NAME}, wilder in ${process.env.DB_CITY}, and I love ${process.env.DB_MY_LANGUAGE}`
);
