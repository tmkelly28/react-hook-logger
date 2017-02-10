import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

console.log('About to perform the initial ReactDOM.render');

ReactDOM.render(
  <Routes />,
  document.getElementById('app')
);
