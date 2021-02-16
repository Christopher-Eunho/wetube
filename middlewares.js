import routes from "./routes";
import multer from "multer";


export const localsMiddleware = (req, res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: false,
        id: 1
    };
    next();
};

const multerVideo = multer({ dest: "uploads/videos/"}); // this means save the url of the video to this directory
export const uploadVideo = multerVideo.single("videoFile"); // single means take only one videoFile