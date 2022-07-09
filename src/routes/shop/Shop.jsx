import { Routes, Route } from 'react-router-dom';
import { CategoriesPreview } from '../../pages/categoriesPreview/CategoriesPreview';
import Category from '../../pages/category/Category';
import './shop.scss';

export const ShopPage = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}
