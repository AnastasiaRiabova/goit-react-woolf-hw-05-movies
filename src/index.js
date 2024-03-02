import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { BASE_NAME } from './constants';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_NAME}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
