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
  test("it should respond with 201 created", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        id: 0,
        contactPerson: "alvin Agadagba",
        BusinessName: "Prime Competence",
        streetAddress: "7 osayande street off saplele road benin city",
        email: "ogheneruonaagadagba4@gmail.com",
        state: "Benin City",
      })
      .expect("Content-Type", /json/)
      .expect(201);
  });
  // test("it should check missing required properties", async () => {
  //   const response = await request(app)
  //     .post("/register")
  //     .send({
  //       id: 0,
  //       contactPerson: "alvin Agadagba",
  //       BusinessName: "Prime Competence",
  //       streetAddress: "7 osayande street off saplele road benin city",
  //       email: "ogheneruonaagadagba4@gmail.com",
  //       state: "Benin City",
  //     })
  //     .expect("Content-Type", /json/)
  //     .expect(400);

  //   expect(response.body).toStrictlyEqual({
  //     error: "Missing contact person",
  //   });
  // });
});
