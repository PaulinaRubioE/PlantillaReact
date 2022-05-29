import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LeftMenu from './componnents/menu';
import Login from './componnents/account/login';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(

    <LeftMenu />,

  document.getElementById('LeftMenu')
);

reportWebVitals();



