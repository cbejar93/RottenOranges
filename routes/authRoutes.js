const passport = require("passport");


module.exports = (app) => {
    // This redericts people to the Google servers.
    app.get("/auth/google", passport.authenticate("google", {scope:["profile", "email"] }));

    // This catches the rederict from the google servers.
    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get("/api/logout", (req, res)=>{
            req.logout();
            res.send(req.user);
    })

    app.get("/api/user", (req,res)=>{
        res.send(req.user);
    }) 

}