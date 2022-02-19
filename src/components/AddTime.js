import React from 'react'
import NavbarAddtime from './NavbarAddtime'
import { faBan, faFloppyDisk, faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { hideAddTIme,getFormData, sendFormData } from '../services/button'

const AddTime = () => {

    function submitForm(e){
        sendFormData(e)
    }

  return (
    <div id='add-pop-up' className='popup invisible'>
        <NavbarAddtime/>
        <p id='invalid-card-input' className='invisible'><FontAwesomeIcon icon={faXmark} className='mr-2'/>Schedule already exists!</p>
        <form className='add-form'>
            <div className='form-date'>
                <div className='day-list'>
                    <label className='add-label'>Day : </label>
                    <select id='select-day' className='add-day'>
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
                    <input id='select-time' className='add-time' type={"time"}></input>
                </div>
            </div>
            <div className='form-btn'>
                <button onClick={hideAddTIme} className='btn-add add-cancel'>
                    <FontAwesomeIcon icon={faBan} className='nav-boat-icon pt-1'/> CANCEL
                </button>
                <button onClick={submitForm} className='btn-add add-save'>
                    <FontAwesomeIcon icon={faFloppyDisk} className='nav-boat-icon pt-1'/> SAVE
                </button>
            </div>
        </form>
    </div>
    
  )
}

export default AddTime