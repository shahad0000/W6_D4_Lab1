import React from 'react'
import { Link } from 'react-router'
import '../index.css';


const Navbar = () => {
  return (
    <div>
        <nav className='bg-black flex text-white'>
            <ul className="flex gap-4 m-5">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar