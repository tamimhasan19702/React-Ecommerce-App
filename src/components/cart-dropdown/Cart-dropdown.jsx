import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './cart-dropdown.scss'

function CartDropdown(){
  return (
    <div className="cart-dropdown">
        <div className="cart-items" />
            <CustomButton>Go To Checkout</CustomButton>
    </div>
  )
}

export default CartDropdown