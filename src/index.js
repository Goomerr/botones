import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Boton } from './components/Boton';
import { BotonOutline } from './components/BotonOutline';
import BotonText from './components/BotonText';
import BotonDisableShadow from './components/BotonDisableShadow';
import BotonDisabled from './components/BotonDisabled';
import BotonIcon from './components/BotonIcon';
import BotonSize from './components/BotonSize';
import BotonColores from './components/BotonColores';
import BotonesColoresHover from './components/BotonesColoresHover';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Boton />
    <BotonOutline />
    <BotonText />
    <BotonDisableShadow />
    <BotonDisabled />
    <BotonIcon />
    <BotonSize />
    <BotonColores />
    <BotonesColoresHover />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
