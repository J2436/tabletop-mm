if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
module.exports = {
  PORT,
  MONGODB_URI,
};
