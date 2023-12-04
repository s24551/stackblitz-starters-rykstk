import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import JSXRules from './JSXRules';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
