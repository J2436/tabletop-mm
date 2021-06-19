if (process.env.NODE_ENV === "development") {
  console.log("DOTENV has run and we are in development mode")
  require("dotenv").config();
}

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
module.exports = {
  PORT,
  MONGODB_URI,
};
