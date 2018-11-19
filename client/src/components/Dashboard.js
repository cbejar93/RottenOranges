import React, {Component} from "react";
import MovieCard from "./MovieCard";
import API from "../utils/API";

class Dashboard extends Component{
    constructor(){
        super();
        this.state ={
            movies: []
        }
    }

    componentDidMount (){
            this.MovieMaker();

    }

    MovieMaker = () => {
        API.getMovie()
            .then(res=>{console.log(res.data)
                this.setState({movies: res.data})
            
                })

    }




    
  render (){  
    return (
        <div className="container">
        <h1>Movie Discussion </h1>
            <MovieCard
                movies={this.state.movies}

            />


        
        </div>
    );
  }


};

export default Dashboard;