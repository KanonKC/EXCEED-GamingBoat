import { addSchedule, editSchedule } from "./schedule"
import { formatTime, unitTime } from "./timeformatter"
var addDay,addTime,selectedCard,oldTime,oldDay,cardInput
let state = ''


export function hideAddTIme(e){
    e.preventDefault()
    selectedCard = document.getElementById("add-pop-up")
    selectedCard.classList.add('invisible')
}

export function showAddTime(){
    cardInput = document.getElementById('invalid-card-input')
    cardInput.classList.add('invisible')
    selectedCard = document.getElementById("add-pop-up")
    selectedCard.classList.remove('invisible')
}

export function addButton(){
    state = 'ADD'
    showAddTime()
}

export function editButton(day,time){
    console.log(day,time)
    showAddTime()
    state = 'EDIT'
    addDay = document.getElementById('select-day')
    addTime = document.getElementById('select-time')
    addDay.value = day
    addTime.value = time
    oldDay = day
    oldTime = unitTime(time)
}

export function getFormData(e){
    e.preventDefault()
    addSchedule(addDay.value,unitTime(addTime.value))
    hideAddTIme(e)
}

export function addCardData(e){
    e.preventDefault()
    addSchedule(addDay.value,unitTime(addTime.value))
    hideAddTIme(e)
}

export function editCardData(day,time,e){
    e.preventDefault()
    // console.log(addDay.value,unitTime(addTime.value),oldDay,oldTime)
    editSchedule(addDay.value,unitTime(addTime.value),oldDay,oldTime)
    hideAddTIme(e)
}

export async function sendFormData(e){
    e.preventDefault()
    addDay = document.getElementById('select-day')
    addTime = document.getElementById('select-time')
    cardInput = document.getElementById('invalid-card-input')
    if(state == 'EDIT'){
        var result = await editSchedule(addDay.value,unitTime(addTime.value),oldDay,oldTime)
    }
    else{
        var result = await addSchedule(addDay.value,unitTime(addTime.value))
    }
    console.log(result)
    if(result == "The provided new schedule combination already exists!" || result == "Schedule already exists!"){
        cardInput.classList.remove('invisible')
    }
    else{
        hideAddTIme(e)
    }
}