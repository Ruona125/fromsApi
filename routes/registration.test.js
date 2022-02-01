const request = require("supertest");
const { app } = require("../app");

describe("Test GET /register", () => {
  test("it should respond with 200", async () => {
    const response = await request(app)
      .get("/register")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /register", () => {
  test("it should respond with 200", () => {});
});
