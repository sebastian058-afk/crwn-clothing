import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './categoryPreview.scss';

const CategoryPreview = ({title, products}) => {
  return (
    <div className='category-preview-container'>
        <h2>
            <span className='title'>{title.toUpperCase()}</span>
        </h2>
        <div className='preview'>
            {
                products
                .filter((_, index) => index < 4)
                .map((product) => <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </div>
  )
}

export default CategoryPreview;