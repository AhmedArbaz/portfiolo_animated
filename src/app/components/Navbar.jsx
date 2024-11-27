'use client'
import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'


const navLinks = [
{
    title:"About",
    path:"#about",
},
{
    title:"Projects",
    path:"#projects",
},
{
    title:"Contact",
    path:"#contact",
}
// ham nay dynamically links ko props say pass kia ak alag file may bana dia hay links ko nichay use kia hay

]
const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex justify-wrap items-center justify-between mx-auto p-8 px-4'>
        <Link href="/" className='text-2xl md:text-5xl font-bold text-white'>LOGO</Link>
            <div className="mobile-menu block md:hidden">
                {}
            </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
            {/* Navlink may dala tha links ko as props pass kar rahy hain yaha aur .map kar kay values ko nikal rahy hain  */}
            <ul className='flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              {
                navLinks.map((link,index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                  </li>
                ))
              }
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
