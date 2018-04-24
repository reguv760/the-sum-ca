import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';


//setup multi-page website (4 steps)
//Step 1: Create Router component <reference Content.js>
//Render Router component in ReactDOM
render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
