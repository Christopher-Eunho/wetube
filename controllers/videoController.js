import Video from "../models/Video";
import Comment from "../models/Comment";
import routes from "../routes";


export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1});  
        res.render("home", { pageTitle : "Home", videos});
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle : "Home", videos: []});
    } // In case of an error, catch the error and show it to me. and proceed with an empty video array.v 
};// giving a template variable as a second argument


// Register Video View
export const postRegisterView = async (req, res) =>{
    const {
        params: {id}
    } = req; 

    try{
        const video = await Video.findById(id);
        video.views ++;
        video.save();
        res.status(200);
    } catch(error){
        res.status(400);
    } finally{
    res.end();
    }
};


// Add Comment

export const postAddComment = async(req, res) => {
    const {
        params: { id },
        body: {comment},
        user
    } = req;
    try{
        const video = await Video.findById(id);
        const newComment = await Comment.create({
            text: comment,
            creator: user.id
        });
        video.comments.push(newComment._id);
        video.save();
    } catch(error){
        res.status(400);
    } finally{
    res.end()
    }
}


export const getUpload = (req, res) => res.render('upload', { pageTitle : "Upload"});




export const postUpload = async (req, res) => {
    const {
        body: { title, description},
        file : { path }
    } = req;

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
        creator: req.user.id
    }); // Add a video on MongoDB using Video model.
    req.user.videos.push(newVideo.id) // add the id of the video that user uploaded 
    req.user.save();
    res.redirect(routes.videoDetail(newVideo.id)) // direct to the videoDetail page of the uploaded video with Video id
};


export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;  // Grab the :id from url and save it in the variable "id"
    try {
        const video = await Video.findById(id).populate('creator').populate('comments'); // Find the data in Mongodb using the id. Populate means to bring the whole object of 'creator' using its id.
        res.render("videoDetail", { pageTitle : `${video.title} Detail`, video}); // send video to the frontend
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }    
};



export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);

        if(String(video.creator) !== String(req.user.id)){
            throw Error();
        } else{
        res.render("editVideo", { pageTitle : `Edit ${video.title} Video`, video });
        }
    } catch(error){
        console.log(error);
        res.redirect(routes.home)
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, {title, description});
        res.redirect(routes.videoDetail(id));
    } catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }
};


export const deleteVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        if(String(video.creator) !== String(req.user.id)){
            throw Error();
        } else{
            await Video.findByIdAndRemove({ _id: id});
        } 
    } catch(error) {
        console.log(error)
    };
    res.redirect(routes.home);
}


export const search = async (req, res) => {
    const {
        query: {term : searchingBy} 
    }= req;
    let videos = [];
    try{
        videos = await Video.find({
            title: { $regex: searchingBy, $options: "i"}
        }); 
    } catch(error){
        console.log(error);
    }
    res.render("searchVideos", { pageTitle : "Search Videos", searchingBy, videos}); // w/o Babel, we should pass searchingBy: searchingBy
}