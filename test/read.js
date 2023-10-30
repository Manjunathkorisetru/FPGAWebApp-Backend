//The following code is adapted from an article authored by @Shriyam in the website: https://www.geeksforgeeks.org/how-to-use-mocha-with-mongoose/
//Link to the author profile https://auth.geeksforgeeks.org/user/Shriyam/articles

const UserSchema = require("../schema/user");
const assert = require("assert");

let userToBeRead;
beforeEach((done) => {
  userToBeRead = new UserSchema({ name: "Manjunath" });
  userToBeRead.save().then(() => done());
});

describe("Reading User details", () => {
  it("Finds user with the name", (done) => {
    UserSchema.findOne({ name: "Manjunath" }).then((userToBeRead) => {
      assert(userToBeRead.name === "Manjunath");
      done();
    });
  });
});
