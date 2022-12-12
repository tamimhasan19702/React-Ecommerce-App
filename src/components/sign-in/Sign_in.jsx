import React, { Component } from 'react';
import './sign_in.style.scss'

class Sign_in extends Component {

  constructor(props){
    super(props)
  
  this.state = {
    email: '',
    password: '',
  }
}


  render() {
    return (
      <div className='sign-in'>
       <h2>I already have an account</h2>
       <span>Sign in with your email and password</span>


       <form>
        <input name='email' value={this.state.email} required type='email'/>
        <label htmlFor="email">Email</label>
        
        <input name='password' value={this.state.password} required type='password'/>
        <label htmlFor="password">Password</label>

        <input type="submit" value='Submit Form'/>
       </form>

      </div>
    )
  }
}

export default Sign_in