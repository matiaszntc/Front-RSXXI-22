import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavMenu } from './components/NavMenu/NavMenu';

ReactDOM.render(
  <React.StrictMode>
    <NavMenu/>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);


