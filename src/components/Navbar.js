import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white 
        text-black relative shadow-md font-mono' role='navigation'>
            <Link to='/' className='pl-8'>SON DEP TRAI </Link>
            <div className='px-4 cursor-pointer md:hidden' >
                {/* use theme icon in heroicon.com */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"
                    strokeWidth={2}>
                    <path strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            <div className='pr-8 md:block hidden ' >
                <Link className='p-4' to='/'>
                    HOME
                </Link>
                <Link className='p-4' to='/menu'>
                    MENU
                </Link>
                <Link className='p-4' to='/about'>
                    ABOUT
                </Link>
                <Link className='p-4' to='/contact'>
                    CONTACT
                </Link>
            </div>
        </nav>
    )
}

export default Navbar