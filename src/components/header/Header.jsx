import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { signOutUser } from '../../firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import CartIcon from '../cartIcon/CartIcon.jsx'
import './header.scss';
import CartDropdown from '../cartDropdown/CartDropdown';
import { CartContext } from '../../contexts/cart.context';

export const Header = () => {
    
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen} = useContext(CartContext);

    return (
        <div className='header'>
            <NavLink className='logo-container' to="/">
                <Logo className='logo'/>
            </NavLink>
            <div className='options'>
                <NavLink className={`${({ isActive }) => (isActive && 'active' )} option`} to='/shop'>SHOP</NavLink>
                <NavLink className={`${({ isActive }) => (isActive && 'active' )} option`} to='/contact'>CONTACT</NavLink>
                
                {
                    currentUser ? 
                    <div className='option' onClick={signOutUser} >SIGN OUT</div> 
                    : 
                    <NavLink className={`${({ isActive }) => (isActive && 'active')} option`} to='/signin'>SIGN IN</NavLink>
                }
                <CartIcon onClick={() => (setIsCartOpen(!isCartOpen))}/>
                { isCartOpen && <CartDropdown/> }
            </div>
        </div>
    )
}
