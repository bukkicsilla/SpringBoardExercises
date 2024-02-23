process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("./app");
let items = require("./fakeDb");

let blueberries = { name: "Blueberries", price: "5.00" };

beforeEach(function () {
  items.push(blueberries);
});

afterEach(function () {
  // make sure this *mutates*, not redefines, `cats`
  items.length = 0;
});

describe("GET /items", function () {
  test("Gets a list of items", async function () {
    const res = await request(app).get(`/items`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      items: [{ name: "Blueberries", price: "5.00" }],
    });
  });
});

describe("GET /items/:name", function () {
  test("Gets a single item", async function () {
    const res = await request(app).get(`/items/${blueberries.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ item: blueberries });
  });

  test("Responds with 404 if can't find item", async function () {
    const res = await request(app).get(`/items/0`);
    expect(res.statusCode).toBe(404);
  });
});

describe("POST /items", function () {
  test("Creates a new item", async function () {
    const newItem = { name: "Chocolate", price: "3.33" };
    const res = await request(app).post(`/items`).send(newItem);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ added: newItem });
  });
  test("Response with 400 if name is missing", async () => {
    const res = await request(app).post("/items").send({});
    expect(res.statusCode).toBe(400);
  });
});

describe("PATCH /items/:name", function () {
  test("Updates a single item", async function () {
    const res = await request(app).patch(`/items/${blueberries.name}`).send({
      name: "Strawberries",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      item: { name: "Strawberries" },
    });
  });

  test("Responds with 404 if id invalid", async function () {
    const res = await request(app).patch(`/items/0`);
    expect(res.statusCode).toBe(404);
  });
});

describe("DELETE /items/:name", function () {
  test("Deletes a single a item", async function () {
    const res = await request(app).delete(`/items/${blueberries.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Deleted" });
  });
  test("Response with 404 for deleting an invalid item", async () => {
    const res = await request(app).delete("/items/0");
    expect(res.statusCode).toBe(404);
  });
});
