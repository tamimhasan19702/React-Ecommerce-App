import React from 'react';
import './sign-in-sign-up.style.scss';
import SignIn from '../../components/sign-in/Sign_in';
import SignUp from '../../components/sign-up/SignUp';

function Sign_in_sign_up() {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Sign_in_sign_up
