import axios from 'axios'

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getUser = user => dispatch => {
  dispatch({type: FETCH_START});
    axios.get(`https://api.github.com/users/${user}`)
      .then (res => {
        let user = (res.data);
        dispatch({type: FETCH_SUCCESS, payload: user})
      })
      .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err})
      })
};