import React from "react";
import donnie from "../images/donnie.jpg";
import ferris from "../images/ferris.jpg";

const Landing = () =>{
    return (
        <div className="container">
            {/* <div className="row">
                <h1>Come talk about movies!</h1>
            </div> */}
            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={donnie} alt="donnie"/>
                            <span className="card-title">Movie</span>
                        </div>
                        {/* <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div> */}
                     </div>
                </div>
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={ferris} alt="ferris"/>
                            <span className="card-title">Social</span>
                        </div>
                        {/* <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div> */}
                     </div>
                </div>
            </div>            
        </div>
    );

};

export default Landing;