import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AddCard = () => {

    function add(){
        alert("Added!")
    } 

  return (
    <div onClick={add} className='add-card'>
        <FontAwesomeIcon className='add-sch-icon mx-auto' size='3x' icon={faPlus}/>
    </div>
  )
}

export default AddCard