import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to="/canvas-proyects/">Particulas</Link>
      <Link to="/Circle">Neon Circles</Link>
      <Link to="/Circlesonmouse">Circles</Link>
      <Link to="/Fire">Particles</Link>
      <Link to="/MoveBurbles">Ballons</Link>
      <Link to="/Pixels">Pixels</Link>
    </div>
  )
}

export default NavBar