import express from "express";
import { changePassword, editProfile, usersDetail } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();


// when sombody goes to a user
// below is how to define an arrow function without naming 
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.usersDetail(), usersDetail);
userRouter.get(routes.changePassword, changePassword);


export default userRouter;