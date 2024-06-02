import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// Use createRoot to render your app
const root = ReactDOM.createRoot(rootElement);

// Render your app inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
