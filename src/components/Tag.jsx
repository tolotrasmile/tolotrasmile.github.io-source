import React from 'react'
import classNames from 'classnames'

const Tag = ({ name }) => {
  return <span className={classNames('tag', `tag__${name.toLowerCase()}`)}>{name}</span>
}

export default Tag
