import React, {useRef, useEffect} from 'react';
import Typed from 'typed.js';

import './ContactStyle.scss';
import './PortfolioStyle.scss';

import Background from '../assets/img/background.jpeg';

import Header from '../components/Header';

function Contact() {
  return (
    <React.Fragment>
      <div className="main-wrapper">
          <div className="background" style={{ backgroundImage: `url(${Background})`}}>
          </div>
          <Header />
      <div className="header-margin"></div>
      <div id="layout">
      <h1 class="contacts__header">Contact me here:</h1>
    <h3 class="contacts__subheader"><span>Phone:</span>(+61) 0410856101</h3>
    <h3 class="contacts__subheader"><span>Email:</span> thinhngo.1798@gmail.com</h3>
      </div>
    </div>
    </React.Fragment>
    
  );
}
export default Contact;

