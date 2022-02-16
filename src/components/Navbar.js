import { faSailboat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Navbar = (props) => {

  function test(){
    props.history.push("/schedule")
  }

  return (
    <div id='navbar' className='p-4 flex'>
        <FontAwesomeIcon icon={faSailboat} className='nav-boat-icon mr-5' size='3x'/>
        <p id='project-title'>WATERING BOAT</p>
        <a className='nav-btn' onClick={test}>Home</a>
        <a className='nav-btn'>Schedule</a>
    </div>
  )
}

export default Navbar