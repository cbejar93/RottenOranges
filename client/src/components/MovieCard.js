import React from "react";

const MovieCard = (props) => {
    return (
    
        <div>
            {props.movies.map((movie, index)=>(
        <div key={index} className="card horizontal">
            {/* <h4 className="header">{movie.title}</h4> */}
                <div className="card-image">
                            <img src={movie.poster}/>
                </div>
                <div className="card-stacked">
                {/* <h4 className="header">{movie.title}</h4>  */}

                    <div className="card-content">
                    <h4 className="header">{movie.title}</h4>

                            <p>{movie.plot}</p>
                    </div>
                    <div className="card-action">
                        <div className="col">
                            <p>{movie.year}</p>
                        </div>
                        <div className="col">
                            {/* <button type="button" onClick={props.saveMovie} className="btn waves-effect waves-light">Post</button> */}
                        </div>
                    </div>  
                </div>
        </div>
          ))} 
        </div>

    )
}

export default MovieCard; 