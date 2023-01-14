import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './cart-dropdown.scss'
import CartItem from '../cart-item/Cart-item';
import { connect } from 'react-redux';


function CartDropdown({cartItems}){
  return (
    <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
            <CustomButton>Go To Checkout</CustomButton>
    </div>
  )
}

const mapDispatchToProps = ({cart: {cartItems}}) => ({
  cartItems
})


export default connect(mapDispatchToProps)(CartDropdown)