import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import emailRoute from "./routes/email.route.js";

dotenv.config({});

connectDB();

const PORT = 8000;
const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(cookieParser());

const corseOptions = {
  origin: "http://localhost:5173/",
  credentials: true,
};
app.use(cors(corseOptions));

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/email", emailRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
