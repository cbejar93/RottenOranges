const express = require('express');
const authRoutes = require("./routes/authRoutes");
const app = express();
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");

authRoutes(app);


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/oranges");



app.listen(PORT);