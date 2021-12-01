import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import BarraPrincipal from './BarraPrincipal';

ReactDOM.render(
  <React.StrictMode>

    <BarraPrincipal titulo="Esta es una prueba de React JS"/>
    
    
    <br/>
    <App/> 
    <br/>
    
    <App2/>
  </React.StrictMode>,
  document.getElementById('root')
);
