import React, { Component } from 'react';
import './sign_in.style.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

  constructor(props){
    super(props)
  
  this.state = {
    email: '',
    password: '',
  }
}

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''})
    }catch(error){
      console.log(error);
    }

  }

  handleChange = e => {

    const { value, name } = e.target;

    this.setState({ [name]: value })
  }


  render() {
    return (
      <div className='sign-in'>
       <h2>I already have an account</h2>
       <span>Sign in with your email and password</span>


       <form onSubmit={this.handleSubmit}>
        
        <FormInput 
        name='email' 
        value={this.state.email} 
        required 
        handleChange={this.handleChange}
        type='Email'
        label='Email'/>
        

        <FormInput 
        name='password' 
        value={this.state.password} 
        required
        handleChange={this.handleChange} 
        type='password'
        label='Password'/>
        

        <div className="buttons">

        <CustomButton type="submit"> Sign In</CustomButton>

        <CustomButton 
        onClick={signInWithGoogle}
        isGoogleSignIn
        >
           Sign In With Google
           </CustomButton>

        </div>

       </form>

      </div>
    )
  }
}

export default SignIn