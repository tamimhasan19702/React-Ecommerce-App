import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-svgrepo-com.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cart.action';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        < ShoppingIcon />
        <span className='item-count'>{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems }}) => ({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
    )
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(CartIcon);