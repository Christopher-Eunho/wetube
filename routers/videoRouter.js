import express from "express";
import { 
    deleteVideo, 
    getEditVideo,
    postEditVideo, 
    getUpload, 
    home,
    postUpload,
    videoDetail } from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, home);

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);  // use uploadVideo as a middleware

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);  // videodetail is a function now

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
 
// Delete
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;