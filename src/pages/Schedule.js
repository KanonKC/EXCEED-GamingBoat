import React, { useEffect, useState } from 'react'
import AddCard from '../components/AddCard'
import AddTime from '../components/AddTime'
import Card from '../components/Card'
import { showAddTime } from '../services/button'
import { getSchedule } from '../services/schedule'

const Schedule = () => {

  const [schedule,setSchedule] = useState([])
  const [addTrans,setAddTrans] = useState(false)

  useEffect(()=>{
    getSchedule().then((data)=>{
      setSchedule(data.schedules)

    })
  })

  return (
    <div className='card-list my-10 mx-auto'>
      <AddTime/>
      {schedule.map((sch)=>(
        <Card day={sch.day_name} time={sch.time}/>
      ))}
      <AddCard/>
    </div>
    
  )
}

export default Schedule