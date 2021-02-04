import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
  
  return <div className='navbar'>
    <ul>
      <li>
        <Link to={'/project-2/search'}>Search</Link>
      </li>
      <li>
        <Link to={'/project-2'}>Home</Link>
      </li>
    </ul>
  </div>
}