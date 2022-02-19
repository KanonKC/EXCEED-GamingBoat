const axios = require('axios')

async function getSchedule(){
    const response = await axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-schedule')
    return response.data
}

async function addSchedule(day,minute){
    axios.post('https://ecourse.cpe.ku.ac.th/exceed08/api/create-schedule',{
        "day_name": day,
        "time": minute
    })
}

async function deleteSchedule(day,minute){
    axios.delete('https://ecourse.cpe.ku.ac.th/exceed08/api/delete-schedule',{
        "day_name": day,
        "time": minute
    })
}

module.exports = {
    getSchedule,addSchedule,deleteSchedule
}