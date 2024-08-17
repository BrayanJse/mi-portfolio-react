import React from 'react';
import { Link } from 'react-router-dom';

// 
import './Header.css'

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-container conta">
        <div className="logo">
          <h4 className="logo__text">BrayanJse</h4>
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