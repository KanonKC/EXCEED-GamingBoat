import React from 'react'

const AddTime = () => {
  return (
    <div className='popup'>
        <form>
            <label>Day : </label>
            <select className='add-day'>
                <option value={'Sunday'}>Sunday</option>
                <option value={'Monday'}>Monday</option>
                <option value={'Tuesday'}>Tuesday</option>
                <option value={'Wednesday'}>Wednesday</option>
                <option value={'Thursday'}>Thursday</option>
                <option value={'Friday'}>Friday</option>
                <option value={'Saturday'}>Saturday</option>
            </select>

            <label>Time : </label>
            <input className='add-time' type={"time"}></input>
            
            <button className='btn-add add-cancel'>Cancel</button>
            <button className='btn-add add-save'>Save</button>
        </form>
    </div>
    
  )
}

export default AddTime