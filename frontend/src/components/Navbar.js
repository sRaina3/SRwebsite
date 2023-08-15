import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </label>
      <div className="wrapper">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Portfolio">Portfolio</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
