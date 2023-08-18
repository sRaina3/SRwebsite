import { Link } from 'react-router-dom';

import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="cont-buttons-container">
        <Link to="/"><button className="cont-home-button">Home</button></Link>
        <Link to="/Portfolio"><button className="cont-portfolio-button">Portfolio</button></Link>
      </div>
      <h1 className='header-text'>Currently Under Construction</h1>
    </div>
  )
}

export default Contact