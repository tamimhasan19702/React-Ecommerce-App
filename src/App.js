import React, {Component} from 'react';
import './App.scss';
import { Switch ,Route } from 'react-router-dom';
import Homepage from './pages/homepage/hompage.component';
import shopComponent from './pages/shop/shop.component';
import HeaderComponent from './components/header/Header.component';
import Sign_in_sign_up from './pages/sign-in-and-sign-up/Sign-in-sign-up';
import { auth } from './firebase/firebase.utils';
 
class App extends Component {

    constructor(){
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        })
    }
  
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }


    render(){
        return (
            <div>
              <HeaderComponent currentUser={this.state.currentUser}/>
      
              <Switch >
                  <Route exact path='/'  component={Homepage} /> 
                  <Route path='/shop' component={shopComponent}/>  
                  <Route path='/signIn' component={Sign_in_sign_up}/>  
              </Switch>
             
                  </div>
          );
    }
}

export default App;
