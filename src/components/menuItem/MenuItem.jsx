import React from 'react';
import './menuItem.scss';
// import { useNavigate } from 'react-router-dom';

export const MenuItem = ({ title, imageUrl, size }) => {
    // const navigate = useNavigate();
    return (
        <div
            style={{backgroundImage: `url(${imageUrl})`}}
            className={`${size} menu-item`}
        >
            <div 
                className='background-image' 
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}
