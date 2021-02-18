import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => {
    res.render('join', { pageTitle : "Join"});
}

export const postJoin = async (req, res, next) => {
    const {
      body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
      res.status(400);
      res.render("join", { pageTitle: "Join" });
    } else {
        try{
            const user = await User({
                name,
                email
            });
            await User.register(user, password); // Save the user in db
            next();
        } catch(error){
            console.log(error);
            res.redirect(routes.home);
        }
        
    }
  };

export const getMe =  (req, res) => res.render("userDetail", { pageTitle : "User Detail", user: req.user});

export const usersDetail = async (req, res) => {
    const { params: {id} } = req;
    try{
        const user = await User.findById(id);
        res.render("userDetail", { pageTitle : "User Detail", user });
    } catch(error) {
        res.redirect(routes.home);
    }
};
    
export const getEditProfile = (req, res) => {
    res.render("editProfile", { pageTitle : "Edit Profile"});
};
export const postEditProfile = async (req, res) =>{

    const {
        body: {name, email},
        file
    } = req ;
    try{
        const user = await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            avatarUrl : file ? file.path : req.user.avatarUrl
        })
        res.redirect(routes.me);
    }catch(error){
        res.redirect(routes.editProfile);
    }
};

export const getChangePassword = (req, res) => {
    res.render("changePassword", { pageTitle : "Change Password"});
};

export const postChangePassword = async (req, res) => {
    console.log(req.body)
    const {
        body: {oldPassword, newPassword, newPassword1 }
    } = req;
    try{
        if(newPassword !== newPassword1){
            res.status(400); // to prevent browser from saving a wrong password
            res.redirect(`/users/${routes.changePassword}`);
            return;
        }
        await req.user.changePassword(oldPassword, newPassword);
        res.redirect(routes.me);
    } catch(error){
        console.log(error)
    res.status(400);
    res.redirect(`/users/${routes.changePassword}`);
    }
};

export const getLogin =  (req, res) => res.render('login', { pageTitle : "Login"});

export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
}) // this is how to athenticate passport


export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
    const { 
        _json: { id, avatar_url, name, email } 
    } = profile;
    console.log(profile);
    try{
        const user = await User.findOne({ email }); // Find User from db
        if(user){
            // update db with found information
            user.githubId = id;
            user.save();
            return cb(null, user); // put it in the cookie
        }
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl: avatar_url
        });
        return cb(null, newUser);
    } catch(error)  {
        return cb(error);
    }
};

export const postGithubLogin = (req, res) => {
    res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken, refreshToken, profile, cb);
}


export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
}
export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};