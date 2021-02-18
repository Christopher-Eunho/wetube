import routes from "./routes";
import multer from "multer";


export const localsMiddleware = (req, res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null; 
    next();
};


export const isWorking = (req, res, next) => {
    console.log("it has reached here");
    next();
}

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
        res.redirect(routes.home);
    }
}

const multerVideo = multer({ dest: "uploads/videos/"}); // this means save the url of the video to this directory
const multerAvatar = multer({ dest: "uploads/avatars/"});

export const uploadVideo = multerVideo.single("videoFile"); // single means take only one videoFile
export const uploadAvatar = multerAvatar.single("avatar")