import React from "react";
import './search-panel.css'


class SearchPanel extends React.Component{

    render(){

        return (
            <input 
            type="text" 
            className="form-control search-input"  // form-control search-input = bootstrap
            placeholder="trouver un membre"
            />
        )
    }
}

export default SearchPanel;


