import React from "react";
import './app-info.css';



class AppInfo extends React.Component{

    render(){
        return ( <div className="app-info">
            <h1>Welcom to <span className="entreprise-name">VICTOR-ENTREPRISE</span> </h1>
            <h2>Le nombres total des employés: ... </h2>
            <h2>Le nombre d'employés éligible a la prime: ... </h2>
        </div>
        )
    }  
}


export default AppInfo;



/*
const AppInfo = ()=>{

    return(
        <div className="app-info">
        <h1>Le nombres d'employers dans l'entreprise: </h1>
        <h2>Le nombres total des employers: </h2>
        <h2>La prime sera accorder pour: </h2>
    </div>
    )
}

*/




