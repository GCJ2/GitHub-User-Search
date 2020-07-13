import React from 'react';
import {connect} from 'react-redux'
import {getUser} from "../../actions";
import './FollowerCard.scss'

const FollowerCard = ({follower, getUser}) => {

  const handleClick = () => {
    getUser(follower.login)
  };

  return (
    <div className='follower-card' onClick={handleClick}>
      <img src={follower.avatar_url} alt=""/>
      <p>{follower.login}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

// export default FollowerCard;
export default connect(mapStateToProps, {getUser})(FollowerCard)