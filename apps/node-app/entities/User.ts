import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "string" })
  password!: string;
}
