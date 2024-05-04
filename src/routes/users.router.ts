import express, { NextFunction, Request, Response, Router } from "express";
import { loginService, signUpService } from "../services/users.service";
var userRouter: Router = express.Router();
/* GET users listing. */
userRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log("LOGIN CALLED");
    res.json(await loginService());
  }
);
userRouter.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.json(await signUpService());
  }
);

export default userRouter;
