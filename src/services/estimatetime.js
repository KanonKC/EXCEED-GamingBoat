const axios = require('axios')

async function getEstimateTime(){
    const response = await axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-time-estimate')
    return response.data
}

async function postEstimateTime(second){
    axios.post('https://ecourse.cpe.ku.ac.th/exceed08/api/update-time-estimate',{
        t: second
    })
}

module.exports = {
    getEstimateTime,postEstimateTime
}
