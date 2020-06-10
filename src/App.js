import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cat-facts">Cat facts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const AboutPage = () => {
  return (
    <div>
      About page
    </div>
  );
}

const CatFactsPage = () => {
  return (
    <div>
      Cat facts page
    </div>
  );
}

const HomePage = () => {
  return (
    <div>
      Home page
    </div>
  );
}

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

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
