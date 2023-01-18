import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../components/redux/cart/cart.selector';
import CartItem from '../../components/cart-item/Cart-item';


const Checkout = ({cartItems, total}) => {
  return (
    <div className='checkout-page'>
          <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
          </div>

         {
            cartItems.map(CartItem => CartItem.name)
         }

         <div className='total'>
            <span>TOTAL: $ {total} </span>
         </div>

    </div>
  )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItems
})

export default connect(mapStateToProps)(Checkout)