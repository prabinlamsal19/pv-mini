import express, {Request, Response} from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
const app = express();

app.get('/', (req, res) => {
  res.send(`Welcome to the DOLBY Backend, the source of truth in Picovico system?`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`)
});


createConnection().then(async connection => {
  console.log("Connected to the database!");

  const userRepository = connection.getRepository(User);

  // Create a new user
  const user = new User();
  user.name = "John Doe";
  user.email = "john.doe@example.com";

  // Save the user to the database
  await userRepository.save(user);

  console.log("User has been saved:", user);

}).catch(error => console.log(error));