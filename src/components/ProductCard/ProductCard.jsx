import React, { useContext } from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import './productCard.scss';
import { CartContext } from '../../contexts/cart.context';

export const ProductCard = ({ product }) => {

    const {imageUrl, name, price } = product;

    const {addItemToCart}  = useContext(CartContext)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'> {name} </span>
                <span className='price'> $ {price} </span>
            </div>
            <CustomButton onClick={() => addItemToCart(product)} buttonType='inverted' >Add to cart</CustomButton>
        </div>
    )
}
