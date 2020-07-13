import React from 'react';
import './UserDisplay.scss'
import Followers from "../followers/Followers";
import Repos from "../Repos/Repos";
import About from "../About/About";
import {connect} from 'react-redux'


const UserDisplay = ({user, setUser}) => {

  return (
    <div className='user-display'>
      {!user ? <About/>
        : <div className='user-card'>
          <div className='user-card-top'>
            <div className='top-row'>
              <img src={user.avatar_url} alt="User profile" className='profile-picture'/>
              <div className='right-content'>
                <div className='name-links'>
                  <h1>{user.name}</h1>
                  <a href={user.html_url}
                     target='_blank'
                     rel="noopener noreferrer">@
                    {user.login}</a>
                </div>
                <div className='about-content'>
                  <p>{user.bio}</p>
                  <p>{user.location}</p>
                  <p>Followers: {user.followers}</p>
                  <p>Following: {user.following}</p>
                  <a href={user.blog}
                     target='_blank'
                     rel="noopener noreferrer">
                    {user.blog}</a>
                </div>
              </div>
            </div>
          </div>
        </div>}
      <div className='bottom-content'>
        {user ?
          <Repos reposURL={user.repos_url}/>
          : null}
        {user ?
          <Followers
            // followersURL={user.followers_url}
            //          setUser={setUser}
          />
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

// export default UserDisplay;
export default connect(mapStateToProps)(UserDisplay)