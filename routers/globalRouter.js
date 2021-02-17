import express from "express";
import { 
    getLogin,
    postLogin,
    logout, 
    getJoin,
    postJoin,
    githubLogin,
    postGithubLogin,
    getMe,
    } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";
import routes from "../routes";
import passport from "passport";


const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);


globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.search, search);


globalRouter.get(routes.github, githubLogin );

globalRouter.get(
    routes.githubCallback, 
    passport.authenticate("github", { failureRedirect: "/login"}),
    postGithubLogin
    );

globalRouter.get(routes.me, onlyPrivate, getMe);
export default globalRouter;

  