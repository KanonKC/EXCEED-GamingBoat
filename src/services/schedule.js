const axios = require('axios')

async function getSchedule(){
    const response = await axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-schedule')
    return response.data
}

async function addSchedule(day,minute){
    const response = await axios.post('https://ecourse.cpe.ku.ac.th/exceed08/api/create-schedule',{
        "day_name": day,
        "time": minute
    })
    return response.data.status
}

async function editSchedule(day,minute,old_day,old_minute){
    const response = await axios.put('https://ecourse.cpe.ku.ac.th/exceed08/api/edit-schedule',{
        "day_name": day,
        "time": minute,
        "old_day_name": old_day,
        "old_time": old_minute 
    })
    return response.data.status
}

async function deleteSchedule(day,minute){
    axios.delete('https://ecourse.cpe.ku.ac.th/exceed08/api/delete-schedule',{
        data: {
        "day_name": day,
        "time": minute
    }})
}

module.exports = {
    getSchedule,addSchedule,deleteSchedule,editSchedule
}