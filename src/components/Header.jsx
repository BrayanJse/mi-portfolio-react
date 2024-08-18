import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// 
import './Header.css'

// 
import { IconDev } from './Icons'

const HeaderComponent = () => {

  useEffect(() => {
    const icon = document.querySelector('.iconDevLogo')
    if (icon) {
      icon.setAttribute('stroke', '#fff')
    }
  })
  
  return (
    <header className="header">
      <div className="header-container conta">
        <div className="header-logo logo">
          <div className='header-logo__icon icon'>
            <IconDev />
          </div>
          <h4 className="header-logo__text logo__text">BrayanJse</h4>
        </div>
        <nav className="header-nav">
          <ul className="header-nav__container">
            <li className="header-nav__li"><Link className="header-nav__link" to="/">Home</Link></li>
            <li className="header-nav__li"><Link className="header-nav__link" to="/about">About</Link></li>
            <li className="header-nav__li"><Link className="header-nav__link" to="/projects">projects</Link></li>
            <li className="header-nav__li"><Link className="header-nav__link" to="/podcasts">Podcasts</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;