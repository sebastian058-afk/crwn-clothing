import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cartIcon.scss';

const CartIcon = ({ ...props }) => {

  const {cartCount} = useContext(CartContext)

  return (
    <div className='cart-icon-container' {...props}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;
