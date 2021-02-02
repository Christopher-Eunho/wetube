import express from "express";
import { 
    deleteVideos, 
    editVideos, 
    getUpload, 
    home,
    postUpload,
    videoDetail } from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, home);


videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videosDetail(), videoDetail);  // videodetail is a function now

videoRouter.get(routes.editVideos, editVideos);
videoRouter.get(routes.deleteVideos, deleteVideos);

export default videoRouter;