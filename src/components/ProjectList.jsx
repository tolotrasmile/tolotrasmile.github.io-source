import React from 'react'
import ProjectItem from './ProjectItem'
import projects from '../data/projects'

const ProjectList = () => {
  return <div className='content'>
    <h2>Projects</h2>
    {projects.map((project, index) => <ProjectItem key={index} project={project} />)}
  </div>
}

export default ProjectList
