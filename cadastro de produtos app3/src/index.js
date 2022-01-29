import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootswatch/dist/cerulean/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
