import React, {Component} from "react";
import {connect} from "react-redux";
import API from "./../utils/API";
import Input from "./Input"; 
// import Display from "./Display";



class Post extends Component {
    constructor (){
        super();
        // This is where I set the state for user input and data being passed into components
        this.state = {
            movies: [],
            title: ""    
        };
        this.handleChange = this.handleChange.bind(this);

    }

//    renderMovies(){
//        switch(this.state.movies){
//            case false:
//                 return;
//             default:
//                 return(
//                     <div>

//                          <h1>Hello there</h1>
//                         {/* {props.movies.map((movie, index)=>( */}
//                         <div className="card horizontal">
//                                 <h2 className="header">{this.state.Title}</h2>
//                                 <div className="card-image">
//                                 <img src={this.state.movies.Poster}/>
//                             </div>
//                             <div className="card-stacked">
//                                 <div className="card-content">
//                                     <p>{this.state.movies.Plot}</p>
//                                 </div>
//                                 <div className="card-action">
//                                     <p>{this.state.movies.Year}</p>
//                                 </div>
//                             </div>
//                         </div>
//                 </div>
//                 );
//             // default: 
//             //         return;

//        }
//    }
// my code from this week.
    // handleInput = event =>{
    //     // console.log(event.target.value);
    //     this.setState({title: [event.target.value]});
    //     console.log(this.state.title);
    // }

// from nyt react
    handleChange = (event) => {
        console.log(event.target.value);
        console.log("hello")
        console.log(event.target.name);
        this.setState({[event.target.name]: [event.target.value]});
        // console.log(this.state.edate);
    }

    searchOMDb = (event) => {
        event.preventDefault();
        console.log("hello");
        document.getElementById("title").value= "";
        API.sendOMDB(this.state.title)
        .then(res=>{
            console.log(res);
            this.setState({movie: res.data});
            console.log(`${this.state.movie.Title} this is the movie stored in the state.` )
        })
    }

    saveArticle= (event)=> {
        event.preventDefault();
        console.log(event.target.value);
        // let i = event.target.value;
        // this.hellothere(i);
      }

    // componentDidMount(){
    //     const self = this;
    //     let searched = this.searchOMDb();
    //     self.setState({movie: searched});

    // }

    

    render () {
        
        return (
            <div className="container">
                 <div className="row">
                    <div className="col">
                        <Input 
                            handleChange = {this.handleChange}
                            formSubmit = {this.searchOMDb}
                        />
                    </div>
                   
                    
                </div>

            </div>
        );
    }


}

function mapStateToProps (state){
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Post);

