import React from 'react'
import Tag from './Tag'

const ProjectItem = ({ project }) => {
  return project && <div className='project__item'>
    <h4 className='title'>{project.title}</h4>
    <p className='description'>{project.description}</p>
    <ul className='project__jobs'>
      {project.roles && project.roles.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    <div className='tags'>
      {project.tags && project.tags.map((item, i) => <Tag key={i} name={item} />)}
    </div>
  </div>
}

export default ProjectItem
