import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.js';
import './assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
