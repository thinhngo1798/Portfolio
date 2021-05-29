import React from 'react';
import '../components/HeaderStyle.scss'
const Header = () => {
return (
      <header class="header">
      <div class="nav__link">
        <div class="mainHeader">
        Steven Ngo
        </div>
          </div>
      <nav class="nav">
        <a class="nav__link" to="/">About</a>
        <a class="nav__link" to="/blog">Blog</a>
        <a class="nav__link" to="/my-work">My work</a>
        <a class="nav__link" to="/contact">Contact me</a>
      </nav>
    </header> 
)
}
export default Header;