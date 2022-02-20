import React, { useEffect, useState } from 'react'
import { getBoatData, SAILING } from '../services/boat'

const Clock = (props) => {

    const [second,setSecond] = useState(0)
    const [minute,setMinute] = useState(0)
    const [isSail,setIsSail] = useState(true)

    useState(()=>{
        // if(SAILING){
        //     getBoatData().then((data)=>{
        //             setHold(true)
        //             const diffTime = Math.floor((Date.now()-data.start_time)/1000)
        //             setMinute(Math.floor(diffTime/60))
        //             setSecond(diffTime%60)                
        //     })
        // }
        getBoatData().then((data)=>{
            const diffTime = Math.floor((Date.now()-data.start_time)/1000)
            setMinute(Math.floor(diffTime/60))
            setSecond(diffTime%60)
            setIsSail(data.is_sailing)
        })
    })


    useEffect(()=>{
        const timer = setInterval(()=>{
        getBoatData().then((data)=>{
            setIsSail(data.is_sailing)
        })
        if(!isSail){
            setSecond(second+1)
            if(second == 59){
            setSecond(0)
            setMinute(minute+1)
            }
        }
        else{
            setSecond(0)
            setMinute(0)
            console.log("Hello?")
            // setHold(false)
        }
        },1000)
        return () => clearInterval(timer)
    })

    return (
        <div className='clock'>
            <div className='time-box my-10'>
                <div className='time-border-head'>
                    <span className='time-border pl-2 mx-2'>{minute < 10 ? '0':String(minute)[0]}</span>
                    <span className='time-border pl-2 mx-2'>{minute < 10 ? String(minute)[0]:String(minute)[1]}</span>:
                    <span className='time-border pl-2 mx-2'>{second < 10 ? '0':String(second)[0]}</span>
                    <span className='time-border pl-2 mx-2'>{second < 10 ? String(second)[0]:String(second)[1]}</span>
                </div>
            </div>
        </div>
    )
}

export default Clock