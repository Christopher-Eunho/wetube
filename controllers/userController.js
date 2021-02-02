import routes from "../routes";

export const getJoin = (req, res) => {
    res.render('join', { pageTitle : "Join"});
}

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2}
    } = req;
    if(password !== password2){
    res.status(400);
    res.render('join', { pageTitle : "Join"});
} else {
    //TO do : register user
    //TO do : Log user in
    res.redirect(routes.home)
}
}
export const home = (req, res) => res.render("home", { pageTitle : "Home"});
export const usersDetail = (req, res) => res.render("userDetail", { pageTitle : "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", { pageTitle : "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", { pageTitle : "Change Password"});



export const getLogin =  (req, res) => res.render('login', { pageTitle : "Login"});
export const postLogin =  (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    //To Do : Process Logout
    res.redirect(routes.home)
};