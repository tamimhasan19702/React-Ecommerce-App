import React, {Component} from 'react';
import './App.scss';
import { Switch ,Route, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/hompage.component';
import shopComponent from './pages/shop/shop.component';
import HeaderComponent from './components/header/Header.component';
import Sign_in_sign_up from './pages/sign-in-and-sign-up/Sign-in-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './components/redux/user/user.action';

 
class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount(){

      const {setCurrentUser} = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){

            const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
              setCurrentUser ({
               
                id: snapshot.id,
                ...snapshot.data()
               
              });

           });
           
         } 
           setCurrentUser(userAuth) ;
        })
    }


  
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    // test comment

    render(){
        return (
            <div>
              <HeaderComponent />
      
              <Switch >
                  <Route exact path='/'  component={Homepage} /> 
                  <Route path='/shop' component={shopComponent}/> 
                   
                  <Route exact path='/signIn' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Sign_in_sign_up />)}/>  
              </Switch>
             
                  </div>
          );
    }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
 
   setCurrentUser: user => dispatch(setCurrentUser(user))

})


export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App);
