import React, {useState} from 'react';
import * as Icon from 'react-feather'
import './Search.scss'
import {connect} from "react-redux";
import {getUser} from "../../actions";

const Search = ({fetchUser, getUser}) => {
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(user);
    setUser('');
  };

  return (
    <div className='search-component'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter a user'
          value={user}
          onChange={handleChange}
        />
        <Icon.Search className='search-icon' onClick={handleSubmit}/>
      </form>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     isFetching: state.isFetching,
//     error: state.error
//   }
// };

// export default Search;
export default connect(null, {getUser})(Search)