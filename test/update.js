//The following code is adapted from an article authored by @Shriyam in the website: https://www.geeksforgeeks.org/how-to-use-mocha-with-mongoose/
//Link to the author profile https://auth.geeksforgeeks.org/user/Shriyam/articles

const UserSchema = require("../schema/user");
const assert = require("assert");

describe("Updating a user", () => {
  let userToBeUpdated;
  beforeEach((done) => {
    userToBeUpdated = new UserSchema({ name: "Manjunath" });
    userToBeUpdated.save().then(() => done());
  });

  function updateFunc(assertion, done) {
    assertion
      .then(() => UserSchema.find({}))
      .then((userToBeUpdated) => {
        assert(userToBeUpdated.length === 1);
        assert(userToBeUpdated[0].name === "Updated Manjunath");
        done();
      });
  }

  it("Updated a user using updateOne", (done) => {
    updateFunc(
      userToBeUpdated.updateOne({ name: "Updated Manjunath" }),
      done()
    );
  });
});
