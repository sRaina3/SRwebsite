import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import LinkedIn from '../images/linkedIn.png'
import Github from '../images/github-mark-white.png'
import Profile from '../images/profile-pic.png'
import './Home.css'

const Home = () => {
  const [curTitle, setCurTitle] = useState(0)

  const titles = ['Full Stack Software Developer', 'AWS Serverless Architect', 'MERN Stack Developer', 
                  'UT Austin Student', 'Frontend Web Developer', 'Multi-Language Programmer', 'AWS Certified Developer']
  
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#E60D1A', '#FF33E9', '#008000', '#f2d658']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurTitle((curTitle + 1) % 7)
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [curTitle]);

  return (
    <div className='Home-container'>
      <div className="Home-info">
        <h1 className="name-text">Saransh Raina</h1>
        <p className={`my-titles`} style={{ color: colors[curTitle] }}>
          {titles[curTitle]}
        </p>
        <div className='white-bar'></div>
        <div className="buttons-container">
          <Link to="/Portfolio"><button className="portfolio-button">Portfolio</button></Link>
          <Link to="/Contact"><button className="contact-button">Contact</button></Link>
        </div>
        <div className='logos-container'> 
          <a href="https://www.linkedin.com/in/saransh-raina-34708a229/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn Logo" className="linkedin-logo" />
          </a>
          <a href="https://github.com/sRaina3" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="LinkedIn Logo" className="github-logo" />
          </a>
        </div>
      </div>
      <div className='profile-pic'>
        <img src={Profile} alt="Saransh Raina" className="profile-img" />
      </div>
    </div>
  );
};

export default Home;