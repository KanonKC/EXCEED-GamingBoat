import React, { useEffect, useRef } from 'react'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { formatTime, unitTime } from '../services/timeformatter'
import { Day } from '../services/day'
import { deleteSchedule } from '../services/schedule'
import { editButton, editCardData, showAddTime } from '../services/button'

const Card = (props) => {

  const formRef = useRef()

  function editCard(){
    editButton(props.day,formatTime(props.time))
  }

  function deleteCard(){
    deleteSchedule(props.day,Number(props.time))
  }

  return (
      <div className='card my-5'>
        <div className='day-box' style={{
          "backgroundColor" : Day[props.day].color
        }}>
            <p className='day mt-1 drop-shadow-md'>{props.day[0].toUpperCase()}</p>
        </div>
        <p className='dayName'>{Day[props.day].name}</p>
        <p className='time'>{formatTime(props.time)}</p>
        <Button onClick={editCard} className='card-btn-edit' size='' disableElevation variant="contained" startIcon={<FontAwesomeIcon icon={faPen}/>}>EDIT</Button>
        <Button onClick={deleteCard} className='card-btn-delete' size='' disableElevation color="error" variant="contained" startIcon={<FontAwesomeIcon icon={faTrash}/>}>DELETE</Button>
      </div>    
  )
}

export default Card