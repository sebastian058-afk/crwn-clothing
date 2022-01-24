import React, { useMemo, useState } from 'react';
import { CollectionItem } from '../CollectionItem/CollectionItem';

import './collection-preview.scss';

export const CollectionPreview = ({ title, items}) => {

    const [products, setProducts] = useState(items)

    const FilterItems = () => {
        useMemo(() => {
            setProducts(items.slice(0, 4));
        }, [])
    }

    FilterItems();

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    products.map(({id, ...otherItemProps}) => {
                        return (
                            <CollectionItem key={id} {...otherItemProps} />
                        )
                    })
                }
            </div>
        </div>
    )
}