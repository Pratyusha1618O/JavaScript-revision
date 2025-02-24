const btn = document.getElementById('btn')
const username = document.getElementById('username')
const myname = document.getElementById('myname')

btn.addEventListener('click', ()=>{
    const value = username.value;
    localStorage.setItem('name', value) // setItem in local storage
    location.reload() // reload window
})

window.addEventListener('load', ()=>{
    const value = localStorage.getItem('name'); // getItem from local storage
    myname.innerText = value;
})