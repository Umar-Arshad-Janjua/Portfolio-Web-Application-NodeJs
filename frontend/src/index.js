import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux'; 

const root = createRoot(document.getElementById('root')); // Using createRoot from react-dom/client
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
