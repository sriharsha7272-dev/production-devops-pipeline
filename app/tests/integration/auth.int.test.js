const request = require("supertest");
const app = require("../../server");

describe("Auth API – Integration Tests", () => {

  test("POST /auth/signup", async () => {
    const res = await request(app)
      .post("/auth/signup")
      .send({ username: "apiuser", password: "pass123" });

    expect(res.statusCode).toBe(201);
  });

  test("POST /auth/login", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ username: "apiuser", password: "pass123" });

    expect(res.statusCode).toBe(200);
  });

});
