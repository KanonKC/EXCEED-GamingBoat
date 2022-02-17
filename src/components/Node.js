import React from 'react'

const Node = (props) => {
  return (
    <div style={{
      "marginRight":`${props.mr}px`
    }}>
      <div className='node-circle'>
          {props.isChecked>0 && <div className='node-circle-inside mx-auto'></div>}
      </div>
      <p className='node-label'>{props.label}</p>
    </div>
  )
}

export default Node