import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import AboutPage from './AboutPage';
import CatFactsPage from './CatFactsPage';
import HomePage from './HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/cat-facts">
        <CatFactsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default Routes;
