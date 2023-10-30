//The following code is adapted from an article authored by @Shriyam in the website: https://www.geeksforgeeks.org/how-to-use-mocha-with-mongoose/
//Link to the author profile https://auth.geeksforgeeks.org/user/Shriyam/articles

const Mongoose = require("mongoose");
require("dotenv").config();

Mongoose.Promise = global.Promise;

Mongoose.connect(process.env.FPGADATABASE_URI);

Mongoose.connection
  .once("open", () => console.log(" "))
  .on("error", (error) => {
    console.warn("Error : ", error);
  });

beforeEach((done) => {
  Mongoose.connection.collections.tests.drop(() => {
    done();
  });
});
