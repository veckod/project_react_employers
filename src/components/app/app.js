import './app.css';   
import React from 'react'                                     
import AppInfo from '../app-info/app-info';                          


class App extends React.Component{ 
    render(){
        return(
            <div className="app"> 
                    <AppInfo/>                                        
            </div>
        )
    }  
}

export default App;


//2eme methode via les fonctions


//import './app.css';   //1. on importe le css

//2. creation du component
/*
function App(){ 

    return (
        <div className="app"> 
           
        </div>
    );
};

//3. exporter le component
export default App;

*/

