import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';

export const Header = ( {currentUser} ) => {

    const handleSignOut = () => auth.signOut();

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
                    <div className='option' onClick={handleSignOut} >SIGN OUT</div> 
                    : 
                    <NavLink className={`${({ isActive }) => (isActive && 'active')} option`} to='/signin'>SIGN IN</NavLink>
                }
            </div>
        </div>
    )
}
