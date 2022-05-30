import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import './authenticationPage.scss';

export const Authentication = () => {
    return (
        <div className='sign-page'> 
            <SignIn/>
            <SignUp/>
        </div>
        
    )
}
