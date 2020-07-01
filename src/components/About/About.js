import React from 'react';
import './About.scss'

const About = () => {
  return (
    <div className='about-section'>
      <p>A simple GitHub user search built using React, Axios, SASS, and as of now,
        some pretty egregious prop drilling.</p>
      <p>We've got some nice conditional renders as well so this message will go away once
        you look up a user.</p>
      <p>Interested in seeing the
        <a href="https://github.com/GCJ2/GitHub-User-Search"
           rel='noopener noreferrer'
           target='_blank'> code</a>?
      </p>
      <p>And if you're interested, this will be refactored thrice for better scaling
        and state management. Once for Redux, once for ContextAPI, and then
        once more with the userReducer hook.</p>
      <p>Give the repo a follow if you're curious and feel free to say hello to me here:</p>
      <div className='contact-links'>
        <a href="http://www.gregorycjohnston.com/"
           rel='noopener noreferrer'
           target='_blank'>Personal Site</a>
        <a href="https://github.com/GCJ2/"
           rel='noopener noreferrer'
          target='_blank'>GitHub</a>
        <a href="https://www.linkedin.com/in/gregorycjohnston/"
           rel='noopener noreferrer'
          target='_blank'>LinkedIn</a>
        <a href="http://www.twitter.com/gregisliving"
           rel='noopener noreferrer'
           target='_blank'>Twitter</a>
      </div>
    </div>
  );
};

export default About;