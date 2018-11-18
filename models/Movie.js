const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema ({
    title: {type: String, required: true },
    plot: {type: String, required: true},
    poster: {type: String, required:true },
    year:  {type: Number, required:true }

});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;