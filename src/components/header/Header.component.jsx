import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/084 crown.svg';

function HeaderComponent() {
  return (
    <div className='header'>
      <Link to="/" className='logo-container'>
      <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className='option' to="/shop">
          SHOP
        </Link>
        <Link className='option' to="/shop">
         CONTACT
        </Link>
      </div>
    </div>
  )
}

export default HeaderComponent
