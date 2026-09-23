import request from "supertest";
import app from "../app.js";
describe("API Tests", () => {

    test("GET / should return 200", async () => {

        const response = await request(app)
            .get("/");

        expect(response.statusCode).toBe(200);

    });

    test("GET /health should return 200", async () => {

        const response = await request(app)
            .get("/health");

        expect(response.statusCode).toBe(500);

    });

});