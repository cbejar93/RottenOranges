import axios from "axios";

export default {
    sendOMDB: function(title){
        return axios.get(`https://www.omdbapi.com/?t=${title}&y=&plot=full&apikey=trilogy`)
    },
    createMovie: function(movieData){
        // console.log(`${movieData.title} this is from front end api `);
        return axios.post("/api/articles", movieData);
    },

    getMovie: function(){
        return axios.get("/api/articles");
    }


}