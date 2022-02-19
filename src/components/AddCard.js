import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { addButton, showAddTime } from '../services/button'

const AddCard = () => {

  function addTime(){
    addButton()
  }

  return (
    <div className='add-card' onClick={addTime}>
        <FontAwesomeIcon className='add-sch-icon mx-auto' size='3x' icon={faPlus}/>
    </div>
  )
}

export default AddCard