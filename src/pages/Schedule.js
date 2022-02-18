import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Day } from '../services/day'
import { getSchedule } from '../services/schedule'
import { formatTime } from '../services/timeformatter'

const Schedule = () => {

  const [schedule,setSchedule] = useState([])

  useEffect(()=>{
    getSchedule().then((data)=>{
      setSchedule(data.schedules)

    })
  })

  return (
    <div className='my-10'>
      {schedule.map((sch)=>(
        <Card color={Day[sch.day_name].color} day={Day[sch.day_name].name} time={formatTime(sch.time)}/>
      ))}
    </div>
    
  )
}

export default Schedule