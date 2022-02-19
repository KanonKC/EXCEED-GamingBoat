import React from 'react'
import NavbarAddtime from '../components/NavbarAddtime'
import { faBan, faFloppyDisk} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddTime = () => {
  return (
    <div className='popup'>
        <NavbarAddtime/>
        <form className='add-form'>
            <div className='form-date'>
                <div className='day-list'>
                    <label className='add-label'>Day : </label>
                    <select className='add-day'>
                        <option value={'sun'}>Sunday</option>
                        <option value={'mon'}>Monday</option>
                        <option value={'tue'}>Tuesday</option>
                        <option value={'wed'}>Wednesday</option>
                        <option value={'thu'}>Thursday</option>
                        <option value={'fri'}>Friday</option>
                        <option value={'sat'}>Saturday</option>
                    </select>
                </div>
                <div className='time-list'>
                    <label className='add-label'>Time : </label>
                    <input className='add-time' type={"time"}></input>
                </div>
            </div>
            <div className='form-btn'>
                <button className='btn-add add-cancel'>
                    <FontAwesomeIcon icon={faBan} className='nav-boat-icon pt-1'/> Cancel
                </button>
                <button className='btn-add add-save'>
                    <FontAwesomeIcon icon={faFloppyDisk} className='nav-boat-icon pt-1'/> Save
                </button>
            </div>
        </form>
    </div>
    
  )
}

export default AddTime