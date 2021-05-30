import React from 'react';
import { Link } from 'react-router-dom';

import '../components/HeaderStyle.scss'
const Header = () => {
return (
      <header className="header">
      <div className="nav__link">
        <Link className="mainHeader nav__link" to="/">
        Steven Ngo
        </Link>
          </div>
      <nav className="nav">
        <Link className="nav__link" to={process.env.PUBLIC_URL +"/"}>About</Link>
        {/* <Link className="nav__link" to="/blog">Blog</Link>
        <Link className="nav__link" to="/my-work">My work</Link> */}
        <Link className="nav__link" to={process.env.PUBLIC_URL +"/contact"}>Contact me</Link>
      </nav>
    </header> 
)
}
export default Header;