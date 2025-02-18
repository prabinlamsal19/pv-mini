import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserSevice } from "../services/user_service";

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        res.status(400).json({ message: "Name and email are required" });
        return
      }

      const newUser = new User();
      newUser.name = name;
      newUser.email = email;

      const savedUser = await UserSevice.createUser(newUser);
      res.status(201).json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      const { name } = req.body;

      if (!name) {
        res.status(400).json({ message: "Name and email are required" });
        return
      }

      const userByName= await UserSevice.findUserByName(name);
      res.status(201).json(userByName);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}