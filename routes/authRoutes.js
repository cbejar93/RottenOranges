const passport = require("passport");


module.exports = (app) => {
    // This redericts people to the Google servers.
    app.get("/auth/google", passport.authenticate("google", {scope:["profile", "email"] }));

    // This catches the rederict from the google servers.
    app.get("/auth/google/callback", passport.authenticate("google"));

}