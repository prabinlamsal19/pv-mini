import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserSevice } from "../services/user_service";

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
      }

      const newUser = new User();
      newUser.name = name;
      newUser.email = email;

      const savedUser = UserSevice.createUser(newUser);

      return res.status(201).json(savedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}