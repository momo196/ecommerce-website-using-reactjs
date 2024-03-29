import React from 'react';
import {Route ,Switch} from 'react-router-dom';

import './App.scss';
import { Homepage } from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = '/' component = {Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
