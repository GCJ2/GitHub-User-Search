import React, {useState, useEffect} from 'react';
import FollowerCard from "../FollowerCard/FollowerCard";
import './Followers.scss'
import {connect} from "react-redux";
import {getFollowers} from "../../actions";

const Followers = ({followersURL, getFollowers, followers}) => {

  useEffect(() => {
    window.scrollTo(0,0);
    getFollowers(followersURL);
  }, [followersURL]);


  return (
    <div className='followers'>
      <h2>Followers</h2>
      {!followers ? null :
      <div className='followers-list'>
        {followers.map(follower => (
          <FollowerCard key={follower.id} follower={follower}/>
        ))}
      </div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    followers: state.followers,
    followersURL: state.followersURL
  }
};

export default connect(mapStateToProps, {getFollowers})(Followers)