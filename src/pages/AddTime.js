import React from 'react'

const AddTime = () => {
  return (
    <div>
        <form>
            <label>Day : </label>
            <select id='day'>
                <option value={'Sunday'}>Sunday</option>
                <option value={'Monday'}>Monday</option>
                <option value={'Tuesday'}>Tuesday</option>
                <option value={'Wednesday'}>Wednesday</option>
                <option value={'Thursday'}>Thursday</option>
                <option value={'Friday'}>Friday</option>
                <option value={'Saturday'}>Saturday</option>
            </select>
        </form>
        <button className='btn-cancel'>Cancel</button>
        <button className='btn-save'>Save</button>
    </div>
    
  )
}

export default AddTime