import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getRepos} from "../../actions";
import RepoCard from "../RepoCard/RepoCard";
import './Repos.scss'

const Repos = ({reposURL, repos, getRepos}) => {

  useEffect(() => {
    getRepos(reposURL)
  }, [reposURL]);

  return (
    <div className='repos'>
      <h2>Repos</h2>
      {!repos ? null :
      <div>
        {repos.map (repo =>(
          <RepoCard key={repo.id} repo={repo}/>
        ))}
      </div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    repos: state.repos,
    reposURL: state.reposURL
  }
};

export default connect(mapStateToProps, {getRepos})(Repos)