import  {Router} from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router()

const routePrefix='user'
userRouter.route(`/${routePrefix}/create`).get( UserController.createUser);

export default userRouter;