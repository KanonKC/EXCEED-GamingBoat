import axios from 'axios'

export async function getSchedule(){
    const response = await axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-schedule')
    return response.data
}