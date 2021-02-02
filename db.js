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
// export const videos = [
//     {
//         id:12345,
//         title: 'Video awesome',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creater: {
//             id: 121212,
//             name:"Chris",
//             email:"chris@gmail.com"

//         }
//     },
//     {
//         id:12422,
//         title: 'Video nicee',
//         description: 'This is something I like',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creater: {
//             id: 121212,
//             name:"Chris",
//             email:"chris@gmail.com"

//         }
//     },
//     {
//         id:11345,
//         title: 'Video cool',
//         description: 'This is something I enjoy',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creater: {
//             id: 121212,
//             name:"Chris",
//             email:"chris@gmail.com"

//         }
//     },
//     {
//         id:12415,
//         title: 'Video aight',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creater: {
//             id: 121212,
//             name:"Chris",
//             email:"chris@gmail.com"

//         }
//     }
// ]