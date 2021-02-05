
// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USERS_DETAIL = "/:id";
const EDIT_PROFILE = "/user-detail";
const CHANGE_PASSWORD = "/change-password";

//Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEOS = "/:id/delete";

// To export all route variables in one object
const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,

    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    
    usersDetail : id => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USERS_DETAIL;
        }
    },
    
    videoDetail : id => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo : (id) => {
        if(id){
            return `/videos/${id}/edit`;
        } else{
            return EDIT_VIDEO;
        }
        
    },
    deleteVideo : id => {
        if (id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEOS
        }
    }
};

export default routes;