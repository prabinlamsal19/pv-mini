import "reflect-metadata";
import express, { Request, Response } from "express";
import { userRouter } from "./routes/user_routes";
import { AppDataSource } from "./data-source";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`Welcome to the DOLBY Backend, the source of truth in Picovico system?`);
});

app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });
