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


// // Below is how to import a non-default-exported module
// import { userRouter } from "./routers/userRouter";

const app = express()
const handleListening = () => console.log(`Listening in : http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from home");


 
// function handleProfile(req, res) {
//     res.send("You are on profile page")
// }
// In an errow function format
// const handleProfile = (req, res) => res.send("You are on my profile2");

// const betweenHome = (req, res, next) => {
//     console.log("Between");
//     next(); // call the next function
// }

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));
// helmet for security
app.use(helmet());
app.use(morgan("dev"));

// how to navigate users from /user page using a router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);



// when imported from other file, it will export the app object
export default app;