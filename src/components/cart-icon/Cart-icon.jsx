import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-svgrepo-com.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cart.action';


const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        < ShoppingIcon />
        <span className='item-count'>0</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(
    null, 
    mapDispatchToProps)(CartIcon)