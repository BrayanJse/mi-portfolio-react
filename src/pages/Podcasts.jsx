import React, { useEffect } from "react"
import Podcast from '../components/Podcast'

const Podcasts = () => {

  useEffect(() => {
    document.title = 'Podcasts'
  }, [])
  
  return (
    <div className="">
      <h1>Podcasts</h1>
      <div className="">
        <Podcast />
      </div>
    </div>
  )
}

export default Podcasts