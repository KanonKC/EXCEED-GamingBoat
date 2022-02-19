function convertTo2Digit(num){
    return num < 10 ? `0${num}` : String(num)
}

function formatTime(second){
    const hour = Math.floor(second/60)
    const minute = second % 60
    return `${convertTo2Digit(hour)}:${convertTo2Digit(minute)}`
}

function unitTime(time){
    const result = time.split(':')
    return Number(result[0])*60 + Number(result[1])
}

module.exports = {
    convertTo2Digit,formatTime,unitTime
}