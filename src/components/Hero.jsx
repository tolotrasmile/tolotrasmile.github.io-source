import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
  return <div className='hero'>
    <div className='personal__info'>
      <img className='avatar' src={logo} alt={logo} />
      <h1 className='name'>Tolotra Raharison</h1>
      <h3 className='role'>Software developer</h3>
      <p className='about-me'>Développeur depuis plus de 3 ans dans le domaine des applications mobiles et
      JavaScript, passionné par le développement, rigoureux et méthodique dans
      l’application des bonnes pratiques du dev.
      </p>
    </div>
  </div>
}
export default Hero
