import React from "react";

const MovieCard = (props) => {
    return (
    
        <div>
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>

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
                            {/* <button data-target="modal1" value={movie._id} onClick={props.postID} class="btn modal-trigger">Modal</button> */}

                        </div>
                    </div>  
                </div>
        </div>
          ))} 
        </div>

    )
}

export default MovieCard; 