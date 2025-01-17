import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"

dotenv.config({});

connectDB();

const PORT = 8080;
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
app.use("/api/v1/user",userRoute)

app.get("/home", (req, res) => {
  return res
    .status(200)
    .json({ message: "I am coming from backend", success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
