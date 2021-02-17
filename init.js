import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User"

const PORT = process.env.PORT || 11000; // use 11000 if PORT is not found 
const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`)

app.listen(PORT,handleListening)