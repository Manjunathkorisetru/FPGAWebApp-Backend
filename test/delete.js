//This was adapted from an article authored by @Shriyam in the following website: https://www.geeksforgeeks.org/how-to-use-mocha-with-mongoose/
//Link to the author profile https://auth.geeksforgeeks.org/user/Shriyam/articles

const UserSchema = require("../schema/user");
const assert = require("assert");

describe("Deleting a User", () => {
  let userToBeDeleted;
  beforeEach((done) => {
    userToBeDeleted = new UserSchema({ name: "Manjunath" });
    userToBeDeleted.save().then(() => done());
  });

  it("Deleting a User", (done) => {
    UserSchema.deleteOne(done)
      .then(() => UserSchema.findOne({ name: "Manjunath" }))
      .then((userToBeDeleted) => {
        assert(userToBeDeleted === null);
        done();
      });
  });
});
