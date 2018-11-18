import React from "react";

const Form = props => (
<form>
    <div className="card">
    <   div className="card-content">
        <span className="card-title">Look for your favorite movie!!</span>
            <div className="input-field">
                <input className="form-control" name="title" placeholder= "Movie Name" onChange={props.handleChange} type="text" {...props} />
                <button type="button" onClick={props.handleFormSubmit} className="btn waves-effect waves-light">Search</button>
            </div>
        </div>
    </div>
  

</form>
  );
  
  export default Form;