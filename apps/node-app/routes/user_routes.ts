import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const userRouter = Router();

const routePrefix = "users";
userRouter.route(`/${routePrefix}/create`).post(UserController.createUser);
userRouter.route(`/${routePrefix}/get`).get(UserController.getUser);
