import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
  return <div className='hero'>
    <div className='personal__info'>
      <img className='avatar' src={logo} alt={logo} />
      <h1 className='name'>Tolotra Raharison</h1>
      <h3 className='role'>Software developer</h3>
      <p className='about-me'>Code with ❤️ and JavaScript</p>
    </div>
  </div>
}
export default Hero
