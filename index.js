const bodyParser = require('body-parser');
const express = require('express');
const authRoutes = require("./routes/authRoutes");
const cookieSession = require('cookie-session');
const passport = require("passport");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const articleRoutes = require("./routes/articleRoutes");
require("./models/User");
require("./services/passport");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(articleRoutes);
authRoutes(app);

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/oranges", { useNewUrlParser: true });

app.listen(PORT);