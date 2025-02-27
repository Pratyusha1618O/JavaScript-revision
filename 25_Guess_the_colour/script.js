const colorCode = document.getElementById("colorCode");
const optionsContainer = document.getElementById('options-container')
let randomColor = null;
let score = 0

function generateRandomNum(min, max){
    return min + Math.floor(Math.random() * (max-min + 1))
}

function generateRandomColorRGB(){
    const r = generateRandomNum(0, 255)
    const g = generateRandomNum(0, 255)
    const b = generateRandomNum(0, 255)
    return `rgb(${r}, ${g}, ${b})`;
}
// console.log(generateRandomColorRGB())

function incrementScore(){
    score++;
    document.getElementById('score').innerText = score

}
function validateResult(el){
    // console.log(el.target)
    const selectedColor = el.target.style.backgroundColor;
    if(selectedColor === randomColor){
        incrementScore();
    }
    else{
        score = 0
    }

    window.localStorage.setItem('Score', score)
    startGame()
}


function startGame(){
    optionsContainer.innerHTML = null

    randomColor = generateRandomColorRGB();
    colorCode.innerText = randomColor

    const ansIndex = generateRandomNum(0, 5)

    for(let i=0; i<6; i++){
        const div = document.createElement('div')
        div.addEventListener('click', validateResult)

        div.style.backgroundColor = 
            i === ansIndex ? randomColor : generateRandomColorRGB();
        optionsContainer.append(div);
    }
}

window.addEventListener("load",() => startGame())