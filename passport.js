// for passport with local strategy
import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from 'passport-facebook';
import { githubLoginCallback, 
    facebookLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy()); // shortcut for creating a local strategy 

passport.use(
    new GithubStrategy(
    {
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:11000${routes.githubCallback}`
    },
    githubLoginCallback
    )
);

passport.use(
    new FacebookStrategy(
    {
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: `http://localhost:11000${routes.facebookCallback}`
    },
    facebookLoginCallback
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
    });
    
passport.deserializeUser(function(id, done){
User.findById(id, function(err, user){
done(err, user);
});
});