import axios from "axios"

export async function getBoatData(){
    const response = await axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-status')
    return response.data
}