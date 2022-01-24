import React from 'react'
import { CollectionPreview } from '../../components/CollectionPreview/CollectionPreview'
import { SHOP_DATA } from '../../constants';

const collections = SHOP_DATA;

export const ShopPage = () => {
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...OtherCollectionProps}) => {
                    return <CollectionPreview key={id} {...OtherCollectionProps} />
                })
            }
        </div>
    )
}
