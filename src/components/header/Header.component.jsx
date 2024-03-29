import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/084 crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {  connect  } from 'react-redux';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/cart/cart.selector';
import { selectCurrentUser } from '../redux/user/user.selectors';



function HeaderComponent({currentUser, hidden}) {
  return (
    <div className='header'>
      <Link to="/" className='logo-container'>
      <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className='option' to="/shop">
          SHOP
        </Link>
        <Link className='option' to="/contact">
         CONTACT
        </Link>
        {
          currentUser ? 
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {
       hidden ? null :
      <CartDropdown />
      }

    </div>
  )
}


const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser,
  hidden: selectCartHidden

})


export default connect(mapStateToProps)(HeaderComponent)
