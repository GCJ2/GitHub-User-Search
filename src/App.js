import React, {useState} from 'react';
import axios from 'axios';
import UserDisplay from "./components/UserDispaly/UserDisplay"
import Search from './components/Search/Search'
import Header from './components/header/Header'
import './App.css';
import {connect} from "react-redux";
import {getUser} from "./actions";


const App = (props) => {
  const {getUser, user} = props;
  console.log(user);

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

  // useEffect(() => {
  //   fetchUser()
  // },[])


  return (
    <div className='app'>
      <div className='header-container'>
        <Header/>
        <Search/>
      </div>
      <UserDisplay
      setUser={fetchUser}/>
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


// export default App;
export default connect(mapStateToProps, {getUser})(App)
