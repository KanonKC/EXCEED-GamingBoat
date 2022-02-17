import React from 'react'

const Node = (props) => {
  return (
    <div className='node-circle' style={{
      "marginRight":`${props.mr}px`
    }}>
        {props.isChecked>0 && <div className='node-circle-inside mx-auto'></div>}
    </div>
  )
}

export default Node