import axios from 'axios'

export async function getEstimateTime(){
    const response = await axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-time-estimate')
    return response.data
}
