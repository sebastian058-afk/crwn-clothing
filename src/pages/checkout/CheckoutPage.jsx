import React from 'react';
import { useContext } from 'react';
import { CheckoutItem } from '../../components/checkoutItem/CheckoutItem';
import { CartContext } from '../../contexts/cart.context';
import './checkoutPage.scss';

const CheckoutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <h1>CheckoutPage</h1>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                })
            }
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}


export default CheckoutPage;