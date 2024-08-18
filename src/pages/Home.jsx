import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../styles/Home.css'

// 
import Projects from './Projects'
import Project from '../components/Project'

const HomePage = () => {
  return (
    <div className='page-home'>
      <div className="page-home__container">
        <div className="page-home__content">
          <h1 className='page-home__description__title'>Welcome to My Portfolio</h1>
          <p className='page-home__description__text'>This is the homepage.</p>
        </div>
      </div>

      <div className='page-projects'>
        <div className="page-projects__header">
          <h2 className='page-projects__header__title'>Latest Projects</h2>
        </div>
        <Project />
      </div>
    </div>
  )
}

export default HomePage;
