import React from 'react'

const Edge = (props) => {



  return (
    <div className='edge' style={{
      "backgroundColor": props.bColor,
      "width": `${props.w}px`
    }}>
    </div>
  )
}

export default Edge