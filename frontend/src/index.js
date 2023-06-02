import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import  {Navbar,App,Title}  from './App.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
//import App1 from './App1';
import Appc from './App_comp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Appc/>
  </React.StrictMode>
);


reportWebVitals();
