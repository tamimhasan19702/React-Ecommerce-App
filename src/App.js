import React from 'react';
import './App.scss';
import { Switch ,Route } from 'react-router-dom';
import Homepage from './pages/homepage/hompage.component';
import shopComponent from './pages/shop/shop.component';
import HeaderComponent from './components/header/Header.component';
import Sign_in_sign_up from './pages/sign-in-and-sign-up/Sign-in-sign-up';
 
function App () {
  
    return (
      <div>
        <HeaderComponent />

        <Switch >
            <Route exact path='/'  component={Homepage} /> 
            <Route path='/shop' component={shopComponent}/>  
            <Route path='/signIn' component={Sign_in_sign_up}/>  
        </Switch>
       
            </div>
    );
}

export default App;
