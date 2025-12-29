const { signup, login } = require("../../app/services/auth.service");

describe("Auth Service – Unit Tests", () => {

  test("should create a new user", () => {
    expect(signup("harsha", "pass123")).toBe(true);
  });

  test("should not allow duplicate users", () => {
    expect(() => signup("harsha", "pass123")).toThrow();
  });

  test("should login with correct credentials", () => {
    expect(login("harsha", "pass123")).toBe(true);
  });

  test("should reject invalid password", () => {
    expect(() => login("harsha", "wrong")).toThrow();
  });

});
