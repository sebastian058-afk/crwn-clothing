import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './pages/homepage/HomePage';
import { ShopPage } from './pages/shop/ShopPage';
import { SignPage } from './pages/sign-in-sign-up-page/Sign-page';
import { auth } from './firebase/firebase.utils';
import { DefaultPage } from './pages/default/DefaultPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />}>
            <Route path=':itemId' element={<ShopPage />} />
          </Route>
          <Route path='signin' element={<SignPage />} />
          <Route path="*" element={<DefaultPage/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
