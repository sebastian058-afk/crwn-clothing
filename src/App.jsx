import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './pages/homepage/HomePage';
import { ShopPage } from './pages/shop/ShopPage';
import { SignPage } from './pages/sign-in-sign-up-page/Sign-page';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}>
          <Route path=':itemId' element={<ShopPage/>}/>
        </Route>
        <Route path='signin' element={<SignPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
