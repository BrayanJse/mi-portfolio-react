import './styles/App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Podcasts from './pages/Podcasts';

const App = () => {

  useEffect(() => {
    document.title = 'Mi Portfolio'

    // 
    const rootElement = document.getElementById('root')
    if (rootElement) {
      rootElement.classList.add('app-test')
    }

    return () => {
      if (rootElement) {
        rootElement.classList.remove('app-test')
      }
    }
  }, [])
  
  return (
    <Router>
      <Header />
      <div className='asdsa conta'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;  // Asegúrate de que sea exportado por defecto
