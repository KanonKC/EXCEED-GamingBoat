import React, { useEffect, useState } from 'react'
import AddCard from '../components/AddCard'
import Card from '../components/Card'
import { getSchedule } from '../services/schedule'

const Schedule = () => {

  const [schedule,setSchedule] = useState([])

  useEffect(()=>{
    getSchedule().then((data)=>{
      setSchedule(data.schedules)

    })
  })

  return (
    <div className='card-list my-10 mx-auto'>
      {schedule.map((sch)=>(
        <Card day={sch.day_name} time={sch.time}/>
      ))}
      <AddCard/>
    </div>
    
  )
}

export default Schedule