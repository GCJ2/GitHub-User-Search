import React, {useState} from 'react';
import axios from 'axios';
import UserDisplay from "./components/UserDispaly/UserDisplay"
import Search from './components/Search/Search'
import Header from './components/header/Header'
import './App.css';
import {connect} from "react-redux";
import {getUser} from "./actions";


const App = (props) => {
  const {user} = props;
  console.log(user);

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

const mapStateToProps = state => {
  return {
    user: state.user,
    isFetching: state.isFetching,
    error: state.error
  }
};

export default connect(mapStateToProps, {getUser})(App)
