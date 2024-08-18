import React from 'react'

import '../styles/Projects.css'

const Project = () => {
  return (
    <div className='projects__lists'>
      <div className='project'>
        <div className='project__thumbnail'>
          <p>image project</p>
        </div>
        <div className="project__description">
          <h3 className='project__description__title'>Project to My Portfolio</h3>
          <p className='project__description__text'>This is a project.</p>
        </div>
      </div>
      <div className='project'>
        <div className='project__thumbnail'>
          <p>image project</p>
        </div>
        <div className="project__description">
          <h3 className='project__description__title'>Project to My Portfolio</h3>
          <p className='project__description__text'>This is a project.</p>
        </div>
      </div>
      <div className='project'>
        <div className='project__thumbnail'>
          <p>image project</p>
        </div>
        <div className="project__description">
          <h3 className='project__description__title'>Project to My Portfolio</h3>
          <p className='project__description__text'>This is a project.</p>
        </div>
      </div>
    </div>
  )
}

export default Project