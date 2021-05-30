import React from 'react';

import Background from '../../assets/img/background1.jpg';
import './LayoutStyle.scss';
import Header from '../Header';
const Layout =({children}) =>{
    return(
        <>
         <div className="main-wrapper">
            <div className="background" style={{ backgroundImage: `url(${Background})`}}>
                  </div>
                  <Header />
                  <div className="header-margin"></div>
            <div>
                  <div id="layout">
                  {children}
                  </div>
                  </div>
            </div>
        </>
    )
}

export default Layout;