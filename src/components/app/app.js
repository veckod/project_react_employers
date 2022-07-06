import './app.css';   
import React from 'react'                                     
import AppInfo from '../app-info/app-info';                          
import SearchPanel from '../search-panel/search-panel';          
import AppFilter from '../app-filter/app-filter';      
import EmployersList from '../employers-list/employers-list';   
import EmployersAddForm from '../employers-add-form/employers-add-form';                                                              


class App extends React.Component{ 
    render(){
        return(
            <div className="app"> 
                    <AppInfo/> 
                    <div className="search-panel">                                          
                     <SearchPanel/>   
                     <AppFilter/>                                                                                                                           
                    </div>
                    <EmployersList/> 
                    <EmployersAddForm/>                                                                                                                                                
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

