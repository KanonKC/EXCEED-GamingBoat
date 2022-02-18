import React from 'react'
import NavbarAddtime from '../components/NavbarAddtime'

const AddTime = () => {
  return (
    <div className='popup'>
        <NavbarAddtime/>
        <form className='add-form'>
            <div className='form-date'>
                <div className='day-list'>
                    <label className='add-label'>Day : </label>
                    <select className='add-day'>
                        <option value={'Sunday'}>Sunday</option>
                        <option value={'Monday'}>Monday</option>
                        <option value={'Tuesday'}>Tuesday</option>
                        <option value={'Wednesday'}>Wednesday</option>
                        <option value={'Thursday'}>Thursday</option>
                        <option value={'Friday'}>Friday</option>
                        <option value={'Saturday'}>Saturday</option>
                    </select>
                </div>
                <div className='time-list'>
                    <label className='add-label'>Time : </label>
                    <input className='add-time' type={"time"}></input>
                </div>
            </div>
            <div className='form-btn'>
                <button className='btn-add add-cancel'>Cancel</button>
                <button className='btn-add add-save'>Save</button>
            </div>
        </form>
    </div>
    
  )
}

export default AddTime