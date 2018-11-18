import React from "react";

const MovieCard = (props) => {
    return (
    
        <div>
            {/* {props.movies.map((movie, index)=>( */}
        <div className="card horizontal">
            {/* <h4 className="header">{props.movies.Title}</h4> */}
                <div className="card-image">
                            <img src={props.movies.Poster}/>
                </div>
                <div className="card-stacked">
                {/* <h4 className="header">{props.movies.Title}</h4> */}

                    <div className="card-content">
                    <h4 className="header">{props.movies.Title}</h4>

                            <p>{props.movies.Plot}</p>
                    </div>
                    <div className="card-action">
                        <div className="col">
                            <p>{props.movies.Year}</p>
                        </div>
                        <div className="col">
                            <button type="button" onClick={props.saveMovie} className="btn waves-effect waves-light">Post</button>
                        </div>
                    </div>
                </div>
        </div>
         {/* ))}  */}
        </div>

    )
}

export default MovieCard; 