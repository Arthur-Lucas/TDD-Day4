const User = require("./classes");

describe("The User class", () => {
  it("should create a new user", () => {
    const user1 = new User("smith", "smith@test.com");
    expect(user1.name).toBe("smith");
    expect(user1.email).toBe("smith@test.com");

    // expect egality with the attent object.
  });

  it("should create new error message if the user name is less than 5 characters", () => {
    const user2 = new User("tom", "tom@test.com");
    expectedMessage = "the name must be at least 5 chars long";
    user2.validateName();
    expect(user2.errors).toContain(expectedMessage);
  });
  // Make new describe
  // should create new error message if the user name is less than 5 characters
  // the name must be at least 5 chars long

  it("should create new error message if the name is empty", () => {
    const user3 = new User("", "no-name@test.com");
    expectedMessage = "the name is required";
    user3.validateName();
    expect(user3.errors).toContain(expectedMessage);

    // Make new describe
    // inspect out error the name is require
  });
});
