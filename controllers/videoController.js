import {videos} from "../db";
import routes from "../routes";

export const home = (req, res) => { 
    res.render("home", { pageTitle : "Home", videos});
};// giving a template variable as a second argument

export const getUpload = (req, res) => res.render('upload', { pageTitle : "Upload"});
    
export const postUpload = (req, res) => {
    const {
        body : { file, title, description }
    } = req;
    // To DO : upload video and save it
    res.redirect(routes.videoDetail(213213))
};


export const videoDetail = (req, res) => res.render("videosDetail", { pageTitle : "Video Detail"});
export const editVideos = (req, res) => res.render("editVideos", { pageTitle : "Edit Videos"});
export const deleteVideos = (req, res) => res.render("deleteVideos", { pageTitle : "Delete Videos"});


export const search = (req, res) => {
    const {
        query: {term : searchingBy} 
    }= req; // same as const SearchingBy = req.query.term (an old version) 
    res.render("searchVideos", { pageTitle : "Search Videos", searchingBy, videos}); // w/o Babel, we should pass searchingBy: searchingBy
}