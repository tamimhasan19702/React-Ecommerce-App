import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-svgrepo-com.svg';
import './cart-icon.scss';

const CartIcon = () => (
    <div className="cart-icon">
        <div className="shopping-icon">
            <span className='item-count'>0</span>
        </div>
    </div>
)