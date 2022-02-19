import React, { useEffect, useState } from 'react'
import Clock from '../components/Clock'
import Edge from '../components/Edge'
import EstimateTime from '../components/EstimateTime'
import Node from '../components/Node'
import { getBoatData, initCounter, SAILING } from '../services/boat'

function setZero(num){
  return num < 0 ? 0 : num
}

const Home = () => {
  const [Current,setCurrent] = useState(0)
  const [BoatStatus,setBoatStatus] = useState(0)
  const [isStarted,setIsStarted] = useState(false)
  const Meter = [0,450,750,1000]
  const Status = [
    {label: "Offline",color: "red"},
    {label: "Returning",color: "#ffb300"},
    {label: "Sailing",color: "#0cf200"}
  ]

  useEffect(()=>{
    const timer = setInterval(() => {
      getBoatData().then((data)=>{
        setCurrent(setZero(data.passed))
        if(!SAILING){
          SAILING = true
          initCounter()
        }
        else if(SAILING && data.where == -1){
          SAILING = false
        }
        if(data.where == -1){
          setBoatStatus(0)
        }
        else if(data.where == 1){
          setBoatStatus(1)
        }
        else{
          setBoatStatus(2)
        }
      })
    },1000)

    return () => clearInterval(timer)
  })

  console.log(BoatStatus)

  return (
    <div>
        {/* <p>Where {BoatStatus} BoatStatus {Current}</p> */}

        <p className='status mt-10 mb-20'>STATUS: <span style={{"color": Status[BoatStatus].color}}>{Status[BoatStatus].label}</span></p>

        <div className=''>
          <div className='flex path-graph'>
              <Edge bColor="white" w="1000"/>
              <Edge bColor="#3D5A80" w={BoatStatus == 0 ? 0 : Meter[Current]}/>
              <Node mr='134' isChecked={true
              } label="START"/>
              <Node mr='134' isChecked={BoatStatus!=0 && Math.floor(Current/1)} label="CHECKPOINT 1"/>
              <Node mr='134' isChecked={BoatStatus!=0 && Math.floor(Current/2)} label="CHECKPOINT 2"/>
              <Node mr='0' isChecked={BoatStatus!=0 && Math.floor(Current/3)} label="DESTINATION"/>
          </div>
        </div>

        <Clock isEnable={BoatStatus!=0}/>
        {/* <Clock isEnable={true}/> */}
        <EstimateTime/>
        
    </div>
  )
}

export default Home