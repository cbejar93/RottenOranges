import React, { Component } from "react";
import API from "../utils/API";
import Form from "./Form";
import Display from "./Display";
// import ArticleCard from "./components/ArticleCard";
// import SavedCard from "./components/SavedCard";

class Nyt extends Component {
  constructor () {
    super();
    this.state = {
      movies: [],
      savedArticles: [],
      title: "",
      click: 0
     
    };
    this.handleChange = this.handleChange.bind(this);
  }

  saveMovie= (event)=> {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({click: 0});
    console.log("hello");
    this.movieCreator();
    // let i = event.target.value;
    // this.hellothere(i);
  }

//   removeArticle = (event) => {
//     event.preventDefault();
//     console.log(event.target.value);
//     let id = event.target.value;
//     this.helloagain(id)
//   }

//   helloagain = (x) => {
//     console.log(x);
//     API.deleteArticle(x);
//   }

  movieCreator = ( ) => {
    // console.log(x);
    let saveMovie = this.state.movies;
    let title = saveMovie.Title;
    let plot = saveMovie.Plot;
    let poster = saveMovie.Poster;
    let year = saveMovie.Year
    let bodyreq = {title, plot, poster, year};
    console.log(bodyreq);
    API.createMovie(bodyreq);
  }

//   databaseArticles = () => {
//     API.getSavedArticles()
//     .then(res =>{
//     this.setState({savedArticles: res.data})
//     console.log(this.state.savedArticles);
//     })
//     .catch(err =>{console.log(err)})
//   }

  handleFormSubmit= event => {
      event.preventDefault();
      this.setState({[event.target.name]: [event.target.value]});
      this.setState({click: 1});
      console.log(this.state.title);
      this.loadMovies();
      this.setState({title: ""});
  
  }

  handleChange = event => {
      console.log(event.target.value);
      console.log(event.target.name)
      this.setState({[event.target.name]: [event.target.value]});
  }

  loadMovies = () => {
    API.sendOMDB(this.state.title)
    .then(res=>{
        console.log(`${res} this one`);
        this.setState({movies: res.data});
        console.log(`${this.state.movies.Title} this is the movie stored in the state.` );
        console.log(`${this.state.movies} movie array`)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col">

                    <Form
                    handleChange= {this.handleChange}
                    handleFormSubmit = {this.handleFormSubmit}
                    />
                </div>
                <div className="col">
          
          {this.state.click > 0 ?  <Display
               movies = {this.state.movies}
               saveMovie = {this.saveMovie}
            />:<div></div> }
            {/* <Display
               movies = {this.state.movies}
               saveMovie = {this.saveMovie}
            />  */}

            </div>
            

          
          </div>
        </div>
      </div>
    );
  }
}

export default Nyt;