import React from "react";
import './app-filter.css'

class AppFilter extends React.Component{                                                

    render(){
        return(
            <div className="btn-group">
                <button className="btn btn-light"
                type="button">
                    Tous les membres
                </button>
                <button className="btn btn-outline-light"
                type="button">
                    les membres aux salaire plus grand
                </button>
                <button className="btn btn-outline-light"
                type="button">
                    les membres qui ont plus de 2.000 euro
                </button>
            </div>
        )
    }
}

export default AppFilter;