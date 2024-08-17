import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About'
  }, [])
  
  return (
    <div className='conta'>
      <h1>About My Portfolio</h1>
      <p>This is the homepage.</p>
    </div>
  );
};

export default About;
