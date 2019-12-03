import React from 'react';
import {Route ,Switch} from 'react-router-dom';

import './App.scss';
import { Homepage } from './pages/homepage/Homepage.component';


const HatsPage = () => (
  <div>
      <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Homepage} />
        <Route  path = '/Hats' component = {HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
