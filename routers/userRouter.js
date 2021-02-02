import express from "express";
import routes from "../routes";

const userRouter = express.Router();

export default userRouter;

// when sombody goes to a user
// below is how to define an arrow function without naming it
userRouter.get(routes.home, (req, res) => res.send("user index"));
userRouter.get(routes.users_detail, (req, res) => res.send("user detail"));
userRouter.get(routes.edit_profile, (req, res) => res.send("edit profile"));
userRouter.get(routes.change_password, (req, res) => res.send("change password"));