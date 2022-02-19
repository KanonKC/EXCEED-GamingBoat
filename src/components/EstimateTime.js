import React, { useEffect, useState } from 'react'
import { getEstimateTime } from '../services/estimatetime'
import { convertTo2Digit } from '../services/timeformatter'

const EstimateTime = () => {
  
  const [estTime,setEstTime] = useState("00:00")

  useEffect(()=>{
    const timer = setInterval(()=>{
      getEstimateTime().then((data)=>{
        const intEst = Math.floor(data.estimate_time)
        const minute = Math.floor(intEst/60)
        const second = intEst%60
        setEstTime(`${convertTo2Digit(minute)}:${convertTo2Digit(second)}`)
      })
    },1000)
    return () => clearInterval(timer)
  })

  return (
    <div className='estimate-time mx-auto'>
        <p className='est-time'>{estTime}</p>
        <p className='est-text pb-2'>Estimate Time</p>
    </div>
  )
}

export default EstimateTime