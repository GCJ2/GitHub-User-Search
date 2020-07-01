import React from 'react';
import './FollowerCard.scss'

const FollowerCard = ({follower, setUser}) => {
  const handleClick = () => {
    setUser(follower.login)
  };

  return (
    <div className='follower-card' onClick={handleClick}>
      <img src={follower.avatar_url} alt=""/>
      <p>{follower.login}</p>
      {/*<a href={follower.html_url}>{follower.login}</a>*/}
    </div>
  );
};

export default FollowerCard;