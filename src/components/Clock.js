import React, { useEffect, useState } from 'react'

const Clock = (props) => {

    const [second,setSecond] = useState(0)
    const [minute,setMinute] = useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>{
        if(props.isEnable){
            setSecond(second+1)
            if(second == 59){
            setSecond(0)
            setMinute(minute+1)
            }
        }
        else{
            setSecond(0)
            setMinute(0)
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