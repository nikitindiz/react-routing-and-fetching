import React from 'react';
import './App.css';

import Header from './routing/Header';
import Routes from './routing/Routes';


const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
