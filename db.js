import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// where is the database stored
mongoose.connect(process.env.MONGO_URL,
                {
                    useNewRulParser: true,
                    sueFindAndModify: false
                }
                ); 

const db = mongoose.connection;

const handleOpen = () => console.log("✅connected to DB");
const handleError = error => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
