import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-svgrepo-com.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cart.action';
import { selectCartItemsCount } from '../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';



const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        < ShoppingIcon />
        <span className='item-count'>{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps =createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(CartIcon);