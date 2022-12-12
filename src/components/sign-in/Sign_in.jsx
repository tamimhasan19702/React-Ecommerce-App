import React, { Component } from 'react';
import './sign_in.style.scss'

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
        <input 
        name='email' 
        value={this.state.email} 
        required 
        onChange={this.handleChange}
        type='email'/>
        <label htmlFor="email">Email</label>
        
        <input 
        name='password' 
        value={this.state.password} 
        required
        onChange={this.handleChange} 
        type='password'/>
        <label htmlFor="password">Password</label>

        <input type="submit" value='Submit Form'/>
       </form>

      </div>
    )
  }
}

export default SignIn