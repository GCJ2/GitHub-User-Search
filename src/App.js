import React, {useState} from 'react';
import axios from 'axios';
import UserDisplay from "./components/UserDispaly/UserDisplay"
import Search from './components/Search/Search'
import Header from './components/header/Header'
import './App.css';

const App = () => {

  const [userInfo, setUserInfo] = useState(null);

  const fetchUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then (res => {
        setUserInfo(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  };


  return (
    <div className='app'>
      <div className='header-container'>
        <Header/>
        <Search fetchUser={fetchUser}/>
      </div>
      <UserDisplay
        user={userInfo}
      setUser={fetchUser}/>
    </div>
  );
};

export default App;

