import ReactDOM from 'react-dom';
import './config/configureMobX';
import React from 'react';
import MainPage from 'pages/MainPage';

ReactDOM.render(
    <MainPage />,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept();
}