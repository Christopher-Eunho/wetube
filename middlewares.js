import routes from "./routes";
import multer from "multer";


export const localsMiddleware = (req, res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null; 
    next();
};


export const onlyPublic = (req, res, next) => {
    // if req.user exists, it means the user is logged in
    if(req.user){
        res.redirect(routes.home);
    } else {
        next();
    }
}

export const onlyPrivate = (req, res, next) => {
    if(req.user){
        next()
    } else {
        res.redirect(route.home);
    }
}

const multerVideo = multer({ dest: "uploads/videos/"}); // this means save the url of the video to this directory
export const uploadVideo = multerVideo.single("videoFile"); // single means take only one videoFile