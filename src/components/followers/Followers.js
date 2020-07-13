import React, {useState, useEffect} from 'react';
import axios from 'axios'
import FollowerCard from "../FollowerCard/FollowerCard";
import './Followers.scss'
import {connect} from "react-redux";
import {getUser} from "../../actions";
import {getFollowers} from "../../actions";

const Followers = ({followersURL, setUser, getUser, getFollowers, followers}) => {

  const [userFollowers, setUserFollowers] = useState([]);

  const fetchFollowers = () => {
    axios.get(followersURL)
      .then(res => {
        setUserFollowers(res.data)
      })
      .catch(err => console.error())
  };

  useEffect(() => {
    window.scrollTo(0,0);
    // fetchFollowers();
    getFollowers(followersURL);
  }, [followersURL]);


  return (
    <div className='followers'>
      <h2>Followers</h2>
      {!followers ? null :
      <div className='followers-list'>
        {followers.map(follower => (
          <FollowerCard key={follower.id} follower={follower} setUser={setUser}/>
        ))}
      </div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    followers: state.followers
  }
};

// export default Followers;
export default connect(mapStateToProps, {getFollowers})(Followers)