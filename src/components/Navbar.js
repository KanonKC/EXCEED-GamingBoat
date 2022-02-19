import { faSailboat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <div id='navbar' className='p-4 grid grid-cols-12'>
        <FontAwesomeIcon icon={faSailboat} className='nav-boat-icon ml-5 pt-1' size='3x'/>
        <p id='project-title' className='col-start-2 col-end-6'>WATERING BOAT</p>
        <Link to="/" className='nav-btn col-start-10'>Home</Link>
        <Link to="/schedule" className='nav-btn col-start-11'>Schedule</Link>
    </div>
  )
}

export default Navbar