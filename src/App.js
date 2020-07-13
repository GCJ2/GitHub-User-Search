import React from 'react';
import UserDisplay from "./components/UserDispaly/UserDisplay"
import Search from './components/Search/Search'
import Header from './components/header/Header'
import './App.css';

const App = () => {

  return (
    <div className='app'>
      <div className='header-container'>
        <Header/>
        <Search/>
      </div>
      <UserDisplay/>
    </div>
  );
};

export default App;