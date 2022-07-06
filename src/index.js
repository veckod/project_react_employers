import React from 'react';
import ReactDOM from 'react-dom';                                                    
import './index.css';                                                      
import App from './components/app/app'; // pas obligé extension "js"                                                                                           


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
        <App />                                                                            
    </React.StrictMode>,
  );
 

