import React, { useState } from 'react';
import { MenuItem } from '../menu-item/MenuItem';
import { SECTIONS } from '../../constants';
import './directory.scss';

export const Directory = () => {

    const [sections] = useState(SECTIONS)

    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...OtherSectionProps }) => {
                    return <MenuItem key={id} {...OtherSectionProps} />
                })
            }
        </div>
    )
}
