const express = require('express');
const authRoutes = require("./routes/authRoutes");
const cookieSession = require('cookie-session');
const passport = require("passport");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");


app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/oranges");



app.listen(PORT);