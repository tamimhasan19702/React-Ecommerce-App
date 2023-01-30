import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor} from './components/redux/Store.js';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
      <App/>
      </PersistGate>
      </BrowserRouter>
    </Provider>
  
);




