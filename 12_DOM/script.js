// ______________________querySelector___________________________

// const body = document.querySelector("body")
// body.innerHTML = "<h2>Hacked</h2>"
// console.log(body.innerHTML)


const div = document.querySelector("div")
// div.innerHTML = "<h1>Hii<h1>"

// const username = document.querySelector("#username")
// username.innerText = "Khusi"
// username.innerHTML = "<h2>Khusi<h2>"

const ele = document.querySelectorAll(".paragraph")
console.log(ele);
ele.forEach(elem => {
    console.log(elem.innerHTML); 
})


// ___________________getElementById__________________________

const elem = document.getElementById("username")
console.log(elem)

// elem.setAttribute("aria",123)
// elem.remove()

elem.innerText = "Kido"
elem.classList.add("red-color")
console.log(elem.classList);

elem.style.textDecoration = 'underline';
elem.style.color = "tomato"

// elem.parentElement.style.background = 'yellow'



// ______________getElementsByClassName________________________

const el = document.getElementsByClassName("block")
for(let i=0; i<el.length; i++){
    el.item(i).style.color = "blueviolet"
}



// _____________________eventListener___________________________

const btn = document.getElementById("btn")

btn.onclick = function(){
    console.log("Button is clicked");
    // alert("button clicked")
}

const nameBlock = document.getElementById('name-block')
// btn.addEventListener('click', ()=>{
//     nameBlock.style.color = "Blue"
//     console.log(nameBlock.style.color)
// })

btn.addEventListener('click', ()=>{
    if(nameBlock.style.color === "blue"){
        nameBlock.style.color = "red"
    }else{
        nameBlock.style.color = "blue"
    }
    
    // console.log(nameBlock.style.color)
})



//________________create elements dynamically____________________

const button = document.getElementById('btn')
const container = document.getElementById('container')

button.addEventListener('click', ()=>{
    const el = document.createElement("h2")
    el.innerText = "Majestic Fellows"
    container.appendChild(el);
})

