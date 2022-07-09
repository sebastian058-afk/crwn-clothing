import React from 'react';
import './customButton.scss';

export const CustomButton = ( { children, buttonType, ...otherProps } ) => (
    <button className={`${buttonType === 'google' ? 'google-sign-in' : buttonType === 'inverted' && 'inverted'} custom-button`} {...otherProps} >
        {children}
    </button>
)
