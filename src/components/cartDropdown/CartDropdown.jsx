import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton/CustomButton';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cartItem/CartItem';
import './cartDropdown.scss';

const CartDropdown = () => {

  const navigate = useNavigate();
  const {cartItems} = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {
          cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)
        }
        </div>
        <CustomButton onClick={() => navigate("/checkout")}>Go to checkout</CustomButton>
    </div>
  )
}

export default CartDropdown;