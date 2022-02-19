import React from 'react'

const Card = (props) => {
  return (
      <div className='card my-5 grid grid-cols-12'>
        <div className='day-box col-start-1 col-end-2' style={{
          "backgroundColor" : props.color
        }}>
            <p className='day mt-1 drop-shadow-md'>{props.day[0]}</p>
        </div>
        <p className='dayName col-start-3 col-end-6'>{props.day}</p>
        <p className='time'>{props.time}</p>
      </div>    
  )
}

export default Card