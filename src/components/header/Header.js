import React from 'react';
import './Header.scss'
import * as Icon from 'react-feather'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <Icon.GitHub/>
        <h1>GitHub User Search</h1>
      </div>
    </div>
  );
};

export default Header;