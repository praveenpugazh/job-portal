import express from "express";
import mongoose from "mongoose";
import jobRouter from "./router/jobRouter.js";
import authRouter from "./router/authRouter.js";
import dotenv from "dotenv";
import { auth } from "./middleware/auth.js";
const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is up and running");
});

mongoose.connect(
  process.env.MONGODB_URI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connection to MongoDB successful");
  }
);
app.use("/jobs", auth, jobRouter);
app.use("/auth", authRouter);

app.listen(PORT, () =>
  console.log(`Server is running on development mode in port ${PORT}`)
);
