import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// da fuck!
// Error: Objects are not valid as a React child (found: object with keys {min, max}). If you meant to render a collection of children, use an array instead.
// ▶ 21 stack frames were collapsed.
// Module.<anonymous>
// src/index.js:6
//   3 | import './index.css';
//   4 | import App from './App';
//   5 | 
// > 6 | ReactDOM.render(
//   7 |   <React.StrictMode>
//   8 |     <App />
//   9 |   </React.StrictMode>,
