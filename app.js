import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Node CI/CD API"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "API is running"
    });
});

export default app;