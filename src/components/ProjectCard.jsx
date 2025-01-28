import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'

const ProjectCard = (prop) => {
  return (
    <>
    <div className="comp-ProjectCard-base">
     <div className="comp-ProjectCard-title">{prop.title}</div>
     <div className="comp-ProjectCard-desc">{prop.description}</div>
     <div className="comp-ProjectCard-buttons">
       <Link to={prop.live} target='_blank'> 
       <div className="btn">
            <div className="logo"><img src="Magicpen.svg" alt="" /></div>
            <div className="text">Experiece it !</div>
        </div>
        </Link>
        <Link to={prop.git} target='_blank'>
        <div className="btn">
            <div className="logo"><img src="GITHUB_LOGO.svg" alt=""  /></div>
            <div className="text">see code</div>
        </div>
        </Link>
     </div>
     </div>
    </>
    
  )
}

export default ProjectCard
