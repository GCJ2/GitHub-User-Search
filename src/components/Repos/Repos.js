import React, {useState, useEffect} from 'react';
import axios from 'axios'
import RepoCard from "../RepoCard/RepoCard";
import './Repos.scss'

const Repos = ({reposURL}) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = () => {
    axios.get(reposURL)
      .then(res => {
        // console.log(res.data)
        setRepos(res.data)
      })
      .catch(err => console.error())
  };

  useEffect(() => {
    fetchRepos()
  }, [reposURL]);

  return (
    <div className='repos'>
      <h2>Repos</h2>
      {repos.map (repo =>(
        <RepoCard key={repo.id} repo={repo}/>
      ))}
    </div>
  );
};

export default Repos;