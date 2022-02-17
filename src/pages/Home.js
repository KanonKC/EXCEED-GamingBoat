import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Edge from '../components/Edge'
import Node from '../components/Node'
import { getBoatData } from '../services/boat'

const Home = () => {
  const [Current,setCurrent] = useState(0)
  const Meter = [0,450,750,1000]

  useEffect(()=>{
    getBoatData().then((data)=>{
      setCurrent(data.passed)
    })
  })

  return (
    <div>
        <p className='status mt-10 mb-20'>STATUS: <span className='status-label'>Offline</span></p>
        <div className=''>
          <div className='flex path-graph'>
              <Edge bColor="white" w="1000"/>
              <Edge bColor="#3D5A80" w={Meter[Current]}/>
              <Node mr='134' isChecked={true}/>
              <Node mr='134' isChecked={Math.floor(Current/1)}/>
              <Node mr='134' isChecked={Math.floor(Current/2)}/>
              <Node mr='0' isChecked={Math.floor(Current/3)}/>
          </div>
        </div>
        
    </div>
  )
}

export default Home