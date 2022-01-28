import React from 'react';
import './customButton.scss';

export const CustomButton = ( { children, isGoogleSignIn, ...otherProps } ) => (
    <button className={`${isGoogleSignIn && 'google-sign-in'} custom-button`} {...otherProps} >
        {children}
    </button>
)
