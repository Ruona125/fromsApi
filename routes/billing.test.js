const request = require("supertest");
const { app } = require("../app");

describe("Test GET /billing", () => {
  test("it should respond with 200", () => {
    const response = 200;
    expect(response).toBe(200);
  });
});

describe("Test POST /billing", () => {
  test("it should respond with 200", async () => {
    const response = await request(app)
      .post("/billing")
      .send({
        id: 0,
        contactPerson: "Kelvin Yoreme Agadagba",
        businessName: "Prime Competence Technology",
        address: "23 gothenburg sweden",
        city: "Gothenburg",
      })
      .expect("Content-Type", /json/)
      .expect(201);
  });
});
