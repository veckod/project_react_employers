import React from "react";
import EmployersListItem from '../employers-list-item/employers-list-item';          
import './employers-list.css'                                                                  



class EmployersList extends React.Component {                                                       

    render(){
        return(
            <ul className="app-list list-group">
                <EmployersListItem/>                                                    
                <EmployersListItem/>                                                        
                <EmployersListItem/>                                                                

            </ul>
        )
    }
}

export default EmployersList;


