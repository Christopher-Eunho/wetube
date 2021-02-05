import express from "express";
import { 
    deleteVideo, 
    getEditVideo,
    postEditVideo, 
    getUpload, 
    home,
    postUpload,
    videoDetail } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, home);


videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);  // use uploadVideo as a middleware

videoRouter.get(routes.videoDetail(), videoDetail);  // videodetail is a function now

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
 

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;