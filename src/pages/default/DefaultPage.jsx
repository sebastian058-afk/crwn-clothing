import React from 'react';
import { Link } from 'react-router-dom';
import { HomePage } from '../homepage/HomePage';
import './defaultpage.scss';

export const DefaultPage = () => {
  return (
  <div className='defaultpage'>
    <h1>Wooops! Seems like this page doesn't exists</h1>
    <Link className='go-home-link' to='' >Go home</Link>
  </div>)
};
