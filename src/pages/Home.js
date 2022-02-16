import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Edge from '../components/Edge'
import Node from '../components/Node'

const Home = async () => {
  const [Current,setCurrent] = useState(0)

  
  useEffect(()=>{
    axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-status').then((response)=>{
      setCurrent(response.data.passed)
    })
  })
  

  
  const Meter = [0,450,750,1000]

  return (
    <div>
        <h1>Home</h1>
        <div className='flex ml-20'>
            <Edge bColor="white" w="1000"/>
            <Edge bColor="#3D5A80" w={Meter[Current]}/>
            <Node isChecked={true}/>
            <Node isChecked={Math.floor(Current/1)}/>
            <Node isChecked={Math.floor(Current/2)}/>
            <Node isChecked={Math.floor(Current/3)}/>
        </div>
        
    </div>
  )
}

export default Home