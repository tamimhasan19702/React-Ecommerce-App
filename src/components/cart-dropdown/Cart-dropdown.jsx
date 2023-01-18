import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './cart-dropdown.scss'
import CartItem from '../cart-item/Cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


function CartDropdown({cartItems, history}){
  return (
    <div className="cart-dropdown">
        <div className="cart-items">
          {
          cartItems.length ?  
          (cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
          )
          :
          (<span className='error-message'>Your Cart is Empty</span>)
          }
        </div>
            <CustomButton onClick={() => history.push("/checkout")}>Go To Checkout</CustomButton>
    </div>
  )
}

const mapDispatchToProps = createStructuredSelector({
   cartItems: selectCartItems
})


export default withRouter(connect(mapDispatchToProps)(CartDropdown))