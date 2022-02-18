import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NavbarAddtime = (props) => {
  return (
    <div id='navbar-addtime' className='p-4 grid grid-cols-11'>
        <FontAwesomeIcon icon={faPlus} className='nav-boat-icon ml-3 pt-1' size='3x'/>
        <p id='addtime-title' className='col-start-2 col-end-10'>Add Schedule</p>
    </div>
  )
}

export default NavbarAddtime