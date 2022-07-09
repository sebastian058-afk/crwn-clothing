import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/homepage/HomePage';
import { ShopPage } from '../shop/Shop';
import { Authentication } from '../../pages/authentication/AuthenticationPage';
import { DefaultPage } from '../../pages/default/DefaultPage.jsx';
import { Header } from '../../components/header/Header';
import CheckoutPage from '../../pages/checkout/CheckoutPage';

const Navigation = () => {

    return (
        <>
        <Header />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='shop/*' element={<ShopPage />}/>
                <Route path='checkout' element={<CheckoutPage/>}/>
                <Route path='signin' element={<Authentication />} />
                <Route path="*" element={<DefaultPage/>} />
            </Routes>
        </>
    )
}

export default Navigation;