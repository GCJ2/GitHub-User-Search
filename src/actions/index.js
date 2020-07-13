import axios from 'axios'

export const FETCH_START = "FETCH_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_FOLLOWER_SUCCESS = "FETCH_FOLLOWER_SUCCESS";
export const FETCH_REPO_SUCCESS = "FETCH_REPO_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getUser = user => dispatch => {
  dispatch({type: FETCH_START});
    axios.get(`https://api.github.com/users/${user}`)
      .then (res => {
        dispatch({type: FETCH_USER_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err})
      })
};

export const getFollowers = followersURL => dispatch => {
  dispatch({type: FETCH_START});
  axios.get(`${followersURL}`)
    .then (res => {
      dispatch({type: FETCH_FOLLOWER_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE, payload: err})
    })
};

export const getRepos = reposURL => dispatch => {
  dispatch({type: FETCH_START});
  axios.get(`${reposURL}`)
    .then (res => {
      dispatch({type: FETCH_REPO_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE, payload: err})
    })
};
