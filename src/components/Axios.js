const axios = require('axios')
const PATH = 'https://ecourse.cpe.ku.ac.th/exceed08/api/create-schedule'

axios.get(PATH).then((response)=>{
    console.log(response.data)
})