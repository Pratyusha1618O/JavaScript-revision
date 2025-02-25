const stopBtn = document.getElementById('stopBtn')

function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    document.getElementById('time').innerText = time

    // console.log(currentTime)
    // console.log(time)
}
// showTime()

setTimeout(() => {
    console.log('hi')
}, 1000) //Prints Hi after 1 second only once

let interval = setInterval(showTime, 1000) // executes in every 1sec interval

stopBtn.addEventListener('click', ()=>{
    clearInterval(interval)
})
