import { DolbyService } from "./../services/dolby_service";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/user";
import { UserService } from "../services/user_service";
import { DolbyEndpoints } from "../dolby_endpoints";

export class UserController {
  static dolby = DolbyService;
  static async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        res.status(400).json({ message: "Name and email are required" });
        return;
      }

      const newUser = new User();
      newUser.name = name;
      newUser.email = email;

      try {
        await DolbyService.post(DolbyEndpoints.createUser, newUser);
      } catch (e) {
        console.log((e as Error).message);
        return;
      }
      const savedUser = await UserService.createUser(newUser);
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
        return;
      }

      const userByName = await UserService.findUserByName(name);
      res.status(201).json(userByName);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
