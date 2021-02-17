// for passport with local strategy
import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy()); // shortcut for creating a local strategy 

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());