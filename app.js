// getting 'express' module in a modern JS way using Babel 
// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";  // how to import a non default


const app = express()
 
// function handleProfile(req, res) {
//     res.send("You are on profile page")
// }
// In an errow function format
// const handleProfile = (req, res) => res.send("You are on my profile2");

// const betweenHome = (req, res, next) => {
//     console.log("Between");
//     next(); // call the next function
// }

// Setting the view engine of app
app.set("view engine", "pug");

// default middlewares for any access to the localhost:PORT
// These are to process data ( eg. change format or ensure security)
app.use(
    helmet({
    contentSecurityPolicy: false,
    })
    );
    
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));
app.use(morgan("dev"));

// Create global variables to use throughout the app using a middleware. 
// This should be before the usage of the variables (i.e. router) 
app.use(localsMiddleware);

// how to navigate users from /user page using a router as a middleware

// Router for the global page address : http://localhost:PORT/"something"
app.use(routes.home, globalRouter);
// Router for the user page address : http://localhost:PORT/user/"something"
app.use(routes.users, userRouter);
// Router for the user page address : http://localhost:PORT/video/"something"
app.use(routes.videos, videoRouter);



// when imported from other file, it will export the app object
export default app;