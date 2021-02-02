import express from "express";
import { 
    delete_videos, 
    edit_videos, 
    home,
    upload,
    video_detail } from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, home);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videos_detail, video_detail);
videoRouter.get(routes.edit_videos, edit_videos);
videoRouter.get(routes.delete_videos, delete_videos);

export default videoRouter;