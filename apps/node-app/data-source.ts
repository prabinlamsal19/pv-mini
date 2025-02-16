import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "node-db", // matches the service name in docker-compose.yml
  port: 5432,
  username: "myuser",
  password: "mypassword",
  database: "mydatabase",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
