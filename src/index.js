import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './components/redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={Store}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Provider>
  
);




