import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 py-5 bg-black text-white items-center'>
        <div className='text-4xl font-semibold'>
            LOGO
        </div>
        <div className='flex justify-center gap-3'>

        <NavLink to={'/'}><p>HOME</p></NavLink>
        <NavLink to={'/cart'}><p>CART</p></NavLink>
            
            
        </div>
    </nav>
  )
}

export default Navbar
