import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

function Navbar() {
  return (
    <div className=' bg-blue-600 '>
      <div className="container mx-auto flex justify-between ">
        <nav className='flex '>
           <NavLink 
           activeClassName="text-white"
           className='inline-flex items-center py-6 px-3 mx-4 ml-8 hover:text-gray-800 text-4xl font-bold tracking-widest ' to={'/'}> Edyting</NavLink> 
           <NavLink activeClassName="text-white bg-yellow-800"
           className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-white  focus:text-white active:text-white ' to={'/post'}> Blog Posts</NavLink>
           <NavLink activeClassName="text-white"
           className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-white   focus:text-white active:text-white' to={'/project'}> Projects</NavLink>
           <NavLink activeClassName="text-white"
           className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-white  focus:text-white active:text-white' to={'/about'}> About Me!</NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url='https://github.com/edyting' fgColor='#fff' className='mr-4'  target='_blank' style={{height:35,width:35}} />
            
            <SocialIcon url='https://github.com/edyting' fgColor='#fff' className='mr-4'  target='_blank' style={{height:35,width:35}} />

            <SocialIcon url='https://github.com/edyting' fgColor='#fff' className='mr-4'  target='_blank' style={{height:35,width:35}} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
