import axios from "axios"
import { postEstimateTime } from "./estimatetime"

export var SAILING = false

export async function getBoatData(){
    const response = await axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-status')
    return response.data
}

export async function initCounter(){
    axios.post('https://ecourse.cpe.ku.ac.th/exceed08/api/update-status',{
        start_time: Date.now()
    })
}

export async function postDiff(){
    axios.get('https://ecourse.cpe.ku.ac.th/exceed08/api/get-status').then((response)=>{
        postEstimateTime(Math.floor((Date.now() - response.data.start_time)/1000))
    })
}