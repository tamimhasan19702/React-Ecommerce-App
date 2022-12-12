import React, { Component } from 'react';
import './sign_in.style.scss';
import FormInput from '../form-input/FormInput';

class SignIn extends Component {

  constructor(props){
    super(props)
  
  this.state = {
    email: '',
    password: '',
  }
}

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: ''})
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
        
        <input type="submit" value='Submit Form'/>
       
       </form>

      </div>
    )
  }
}

export default SignIn