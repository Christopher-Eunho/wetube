import express from "express";
import { getChangePassword, getEditProfile, postChangePassword, postEditProfile, usersDetail } from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";
import routes from "../routes";

const userRouter = express.Router();


// when sombody goes to a user
// below is how to define an arrow function without naming 

userRouter.post("/change-password", postChangePassword);
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);


userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);



userRouter.get(routes.usersDetail(), onlyPrivate, usersDetail);
export default userRouter;