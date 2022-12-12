import React from 'react';
import './App.css';
import { Switch ,Route } from 'react-router-dom';
import Homepage from './pages/homepage/hompage.component';
import shopComponent from './pages/shop/shop.component';
import HeaderComponent from './components/header/Header.component';

 
function App () {
  
    return (
      <div>
        <HeaderComponent />

        <Switch >
          
            <Route exact path='/'  component={Homepage} /> 

            <Route path='/shop' component={shopComponent}/> 

            

        </Switch>
       
            </div>
    );
}

export default App;
