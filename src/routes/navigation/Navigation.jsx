import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/homepage/HomePage';
import { ShopPage } from '../../pages/shop/ShopPage';
import { Authentication } from '../../pages/authentication/AuthenticationPage';
import { DefaultPage } from '../../pages/default/DefaultPage.jsx';
import { UserContext } from '../../contexts/user.context';
import { Header } from '../../components/header/Header';

const Navigation = () => {

    const { currentUser } = useContext(UserContext)
    console.log('currentUser', currentUser)

    return (
        <>
        <Header currentUser={currentUser} />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />}>
                    <Route path=':itemId' element={<ShopPage />} />
                </Route>
                <Route path='signin' element={<Authentication />} />
                <Route path="*" element={<DefaultPage/>} />
            </Routes>
        </>
    )
}

export default Navigation;