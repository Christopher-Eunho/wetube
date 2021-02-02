
// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USERS_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
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
    users_detail : USERS_DETAIL,
    edit_profile : EDIT_PROFILE,
    change_password : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videos_detail : VIDEOS_DETAIL,
    edit_videos : EDIT_VIDEOS,
    delete_videos : DELETE_VIDEOS
}

export default routes;