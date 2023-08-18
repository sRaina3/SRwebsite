import { Link } from 'react-router-dom'
import { useState } from 'react'
import Dev from '../images/certdev.png'
import CP from '../images/cloudprac.png'
import Node from '../images/node-js.png'
import HTMLLogo from '../images/html.png'
import Java from '../images/java.png'
import JSLogo from '../images/javascript.png'
import Lambda from '../images/lambda.png'
import CSSLogo from '../images/css.png'
import AWSLogo from '../images/aws.png'
import Clang from '../images/c.png'
import Cplus from '../images/c++.png'
import Python from '../images/python.png'
import reactLogo from '../images/react.png'
import Mongo from '../images/mongo-db.png'
import AlamoCup from '../images/alamocup.png'
import AlamoInf from '../images/alamo-inf.png'
import ViewBoard from '../images/viewboard-logo.png'
import ViewBoardInf from '../images/viewboard-rm.png'
import SkillCheck from '../images/skill-check.png'
import SkillInf from '../images/skill-inf.png'
import './Portfolio.css'

const Portfolio = () => {
  const [options, setOptions] = useState([0,0,0])

  const handleDescChange = (event) => {
    let newOptions = options
    newOptions[event.target.id] = 0;
    setOptions(newOptions)
  }

  const handleInfChange = (event) => {
    let newOptions = options
    newOptions[event.target.id] = 1;
    setOptions(newOptions)
  }

  return (
    <div className='port-page-container'>
      <div className="port-buttons-container">
        <Link to="/"><button className="port-home-button">Home</button></Link>
        <Link to="/Contact"><button className="port-contact-button">Contact</button></Link>
      </div>
      <h1 className='portfolio-title'>My Portfolio</h1>
      <div className='gold-bar'>&nbsp;</div>
      <div className='portfolio-container'>
        <div className="skills-container">
          <div className="skills-column-left">
            <h2 className="category-header">Certifications</h2>
            <div className="certification-container">
              <div className="certification-item">
                <img src={CP} alt="Certification 1" />
                <p>AWS Certified Cloud Practitioner</p>
              </div>
              <div className="certification-item">
                <img src={Dev} alt="Certification 2" />
                <p>AWS Certified Developer (Associate)</p>
              </div>
            </div>
          </div>
          <div className="vertical-divider"></div>
          <div className="skills-column-right">
            <h2 className="category-header">Technologies</h2>
            <div className="certification-container">
              <div className='exp-display' style={{color: '#f13b38'}}>4+ Years</div>
              <div className="tech-item"><img src={Java} alt="Java" /><p>Java</p></div>
              <div className="tech-item"><img src={Cplus} alt="Cplus" /><p>C++</p></div>
              <div className="tech-item"><img src={Clang} alt="Clang" /><p>C</p></div>
              <div className="tech-item"><img src={HTMLLogo} alt="HTML" /><p>HTML</p></div>
              <div className='exp-display' style={{color: 'goldenrod'}}>2+ Years</div>
              <div className="tech-item"><img src={Node} alt="Node" /><p>Node JS</p></div>
              <div className="tech-item"><img src={JSLogo} alt="JS" /><p>JavaScript</p></div>
              <div className="tech-item"><img src={Python} alt="Python" /><p>Python</p></div>
              <div className="tech-item"><img src={CSSLogo} alt="CSS" /><p>CSS</p></div>
              <div className='exp-display' style={{color: '#0ca447'}}>1+ Years</div>
              <div className="tech-item"><img src={Mongo} alt="Mongo" /><p>MongoDB</p></div>
              <div className="tech-item"><img src={reactLogo} alt="react logo" /><p>React</p></div>
              <div className="tech-item"><img src={Lambda} alt="Lambda" /><p>Lambda</p></div>
              <div className="tech-item"><img src={AWSLogo} alt="AWS" /><p>AWS</p></div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='project-title'>Check Out My Projects</h1>
      <div className='project-container'>
        <div className='proj'>
          <div className='proj-content'>
            <div className='proj-info'>
              <a href="https://alamocup.dev/" target="_blank" rel="noopener noreferrer">
                <img className='proj-image' src={AlamoCup} alt="Proj1"/>
              </a>
            </div>
            <div className='proj-desc'>
              <div className='proj-buttons'>
                <button id='0' className='toggle-btn' onClick={handleDescChange}>Description</button>
                <button id='0' className='toggle-btn' onClick={handleInfChange}>Architecture</button>
              </div>
              {options[0] === 0 
                ? 
                  <div className="description"> 
                    Website that displays statistics for the Alamo Cup event in the game Trackmania. Used by
                    hundreds of players to track various leaderboards and easily view individual progress in the 
                    Alamo Cup competition. Started off as a Texas competition, but quickly grew to have a global
                    userbase.
                    <br></br> <br></br>
                    Information is automatically updated daily at midnight UTC, and AWS Cloudfront is utilized 
                    to speed up loading times for global users.
                  </div>
                : 
                  <img className="inf-image" src={AlamoInf} alt="Inf1"/>
              }
            </div>
          </div>
        </div>
        <div className='proj'>
          <div className='proj-content'>
            <div className='proj-info'>
              <a href="https://sraina3.github.io/view-board/" target="_blank" rel="noopener noreferrer">
                <img className='proj-image' src={ViewBoard} alt="Proj2"/>
              </a>
            </div>
            <div className='proj-desc'>
              <div className='proj-buttons'>
                <button id='1' className='toggle-btn' onClick={handleDescChange}>Description</button>
                <button id='1' className='toggle-btn' onClick={handleInfChange}>Architecture</button>
              </div>
              {options[1] === 0 
                ? 
                  <div className="description"> 
                    Web App that allows users to find streaming availabilities and information for mosts shows and
                    movies. Provides users with direct links to all available locations where their requested
                    piece of media can be viewed or purchased.
                    <br></br> <br></br>
                    Also displays information about upcoming shows and movies including release date, movie poster,
                    and IMDb information.
                  </div>
                : 
                <img className="inf-image" src={ViewBoardInf} alt="Inf2"/>
              }
            </div>
          </div>
        </div>
        <div className='proj'>
          <div className='proj-content'>
            <div className='proj-info'>
              <a href="https://sraina3.github.io/skill-check/" target="_blank" rel="noopener noreferrer">
                <img className='proj-image' src={SkillCheck} alt="Proj3"/>
              </a>
            </div>
            <div className='proj-desc'>
              <div className='proj-buttons'>
                <button id='2' className='toggle-btn' onClick={handleDescChange}>Description</button>
                <button id='2' className='toggle-btn' onClick={handleInfChange}>Architecture</button>
              </div>
              {options[2] === 0 
                ? 
                  <div className="description"> 
                    Web App that contains various simple browser games for the user to enjoy. Comes fully fitted
                    with sound effects, instructions, and the ability to track highscores.
                    <br></br> <br></br>
                    Gives Users the option to play games as guests, or instead create their own account to save
                    scores using a custom sign-up/log-in system that does not require any external account.
                  </div>
                : 
                <img className="inf-image" src={SkillInf} alt="Inf3"/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio