//The following code is adapted from an article authored by @Shriyam in the website: https://www.geeksforgeeks.org/how-to-use-mocha-with-mongoose/
//Link to the author profile https://auth.geeksforgeeks.org/user/Shriyam/articles

const UserSchema = require("../schema/user");
const assert = require("assert");

describe("Creating records in MongoDB", () => {
  it("New User is created", (done) => {
    const user = new UserSchema({ name: "Manjunath" });
    user.save().then(() => {
      assert(!user.isNew);
      done();
    });
  });
});
