
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
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEOS = "/:id/edit";
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
    
    videosDetail : id => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEOS_DETAIL;
        }
    },
    editVideos : EDIT_VIDEOS,
    deleteVideos : DELETE_VIDEOS
};

export default routes;