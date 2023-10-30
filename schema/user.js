//The following code is adapted from an article authored by @Shriyam in the website: https://www.geeksforgeeks.org/how-to-use-mocha-with-mongoose/
//Link to the author profile https://auth.geeksforgeeks.org/user/Shriyam/articles

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewUserSchema = new Schema({
  name: {
    type: String,
  },
});

const UserSchema = mongoose.model("tests", NewUserSchema);
module.exports = UserSchema;
