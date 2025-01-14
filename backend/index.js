import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js";

dotenv.config({})

connectDB()

const app = express();

const PORT = 8080;

app.get("/home", (req, res) => {
  return res
    .status(200)
    .json({ message: "I am coming from backend", success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
