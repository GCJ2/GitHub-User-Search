import {
  FETCH_START,
  FETCH_USER_SUCCESS,
  FETCH_FOLLOWER_SUCCESS,
  FETCH_FAILURE, FETCH_REPO_SUCCESS
} from "../actions";

const initialState = {
  user: null,
  followersURL: '',
  followers: '',
  reposURL: '',
  repos: '',
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        followersURL: action.payload.followers_url,
        reposURL: action.payload.repos_url
      };
    case FETCH_FOLLOWER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        followers: action.payload
      };
    case FETCH_REPO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        repos: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state
  }
};

export default reducer;