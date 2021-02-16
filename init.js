import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 11000; // use 11000 if PORT is not found 
const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`)

app.listen(PORT,handleListening)