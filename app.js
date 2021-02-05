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


app.use(
    helmet({
    contentSecurityPolicy: false,
    })
    );    
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));
app.use(morgan("dev"));

app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);



export default app;