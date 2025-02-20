import "reflect-metadata";
import { DataSource } from "typeorm";
import { dirname } from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  logging: true,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "mysecretpassword",
  database: process.env.POSTGRES_DB || "mydb",
  entities: [dirname + "/entities/*.ts"],
  synchronize: true,
});
