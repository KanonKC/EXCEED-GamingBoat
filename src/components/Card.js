import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { formatTime } from '../services/timeformatter'
import { Day } from '../services/day'

const Card = (props) => {

  function deleteSchedule(){
    console.log(props.day)
    console.log(props.time)
  }

  return (
      <div className='card my-5'>
        <div className='day-box' style={{
          "backgroundColor" : Day[props.day].color
        }}>
            <p className='day mt-1 drop-shadow-md'>{props.day[0].toUpperCase()}</p>
        </div>
        <p className='dayName'>{Day[props.day].name}</p>
        <p className='time'>{props.time}</p>
        <Button className='card-btn-edit' size='' disableElevation variant="contained" startIcon={<FontAwesomeIcon icon={faPen}/>}>EDIT</Button>
        <Button onClick={deleteSchedule} className='card-btn-delete' size='' disableElevation color="error" variant="contained" startIcon={<FontAwesomeIcon icon={faTrash}/>}>DELETE</Button>
      </div>    
  )
}

export default Card