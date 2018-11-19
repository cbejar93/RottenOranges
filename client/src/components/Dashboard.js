import React, {Component} from "react";
import MovieCard from "./MovieCard";
import {connect} from "react-redux";
import API from "../utils/API";

class Dashboard extends Component{
    constructor(){
        super();
        this.state ={
            movies: [],
            comment: "",
            postID: "",
            auth: ""
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

    handleChange = event => {
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({[event.target.name]: [event.target.value]});
    }

    commentID = () => {
        let body = {comment: this.state.comment, post: this.state.postID};
        let id = this.state.postID;
        document.getElementById("comment").value= ""
        API.postComment(body, id);
        this.MovieMaker();
        
    }

    PostIDer = (event) => {
        event.preventDefault();
        console.log(event.target.value + "this is the IDer");
        this.setState({postID: event.target.value});
        console.log(`${this.props.auth.type} from dashboard component`);

        
    }

  render (){  
    return (
        <div className="container">
        <h1>Movie Discussion </h1>
            <MovieCard
                movies={this.state.movies}
                handleChange={this.handleChange}
                postID ={this.PostIDer}
                commentID = {this.commentID}

            />


        
        </div>
    );
  }


};

function mapStateToProps (state){
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard); 
 