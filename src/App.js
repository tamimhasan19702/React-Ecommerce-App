import React from 'react';
import './App.css';
import { Switch ,Route } from 'react-router-dom';
import Homepage from './pages/homepage/hompage.component';
import shopComponent from './pages/shop/shop.component';


function App () {
  
    return (
      <div>
        <Switch >
          
            <Route exact path='/'  component={Homepage} /> 

            <Route path='/shop' component={shopComponent}/> 

        </Switch>
       
            </div>
    );
}

export default App;
