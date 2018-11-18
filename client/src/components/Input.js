import React from "react";


const Input = props => (

    <form>
          <div className="card">
                            <div className="card-content">
                                <span className="card-title">Look for your favorite movie!!</span>
                                <div className="input-field">
                                    <input id="first_name" name="title" placeholder="Movie Name" id="title" onChange={props.handleChange} type="text" className="validate" {... props}/>
                                    
                                    <button onClick={props.formSubmit} className="btn waves-effect waves-light" id="submit" name="title" type="submit" name="action">Search
                                    </button>
                                </div>
                            </div>
        
                        </div>
    </form>


);

export default Input;