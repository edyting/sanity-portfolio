import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' bg-red-600 '>
      <div className="container mx-auto flex justify-between ">
        <nav>
           <NavLink to={'/'}> Edyting</NavLink> 
           <NavLink to={'/post'}> Blog Posts</NavLink>
           <NavLink to={'/project'}> Projects</NavLink>
           <NavLink to={'/about'}> About Me!</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
