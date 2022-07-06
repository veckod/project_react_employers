import React from "react";
import './employers-add-form.css';                                                                                                                                                  


class EmployersAddForm extends React.Component{                                                                                         

    render(){
        return(
          <div className="app-add-form">
            <h3>Add a new user</h3>
            <form className="add-form d-flex" action="">
                <input type="text" className="form-control new-post-label" placeholder="what's his(her) name" />
                <input type="number" className="form-control new-post-label" placeholder="salary/month $"/>
                <button type="submit" className="btn btn-outline-light">add</button>
            </form>
          </div>
        )
    }       
    
}

export default EmployersAddForm;


