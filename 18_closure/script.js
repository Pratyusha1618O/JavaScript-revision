function init(){
    const name = "Pratyu" // name is a local variable created by init
    function myName(){ 
        // myName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
    }
    myName()
}
init()

//.................................
function main(){
    const name = "Pratyusha"
    function sayName(){
        console.log(name);
    }
    return sayName;
}

let fn = main()
fn()

//___________________________________________
function adder(num){
    function add(b){
        console.log(num + b)
    }
    return add;
}
const add5 = adder(5)
const add10 = adder(10)
add5(2)
add10(40)

//________________________________________________
const myname = document.getElementById('myname')
const btn = document.getElementById('btn')

function makeTextSizer(size){
    function changeSize(){
        myname.style.fontSize = `${size}px`
    }
    return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size70 = makeTextSizer(70);

btn.addEventListener('click', size20)


//_______________________________________________________
function makeCounter(){
    let count = 1;
    function increment(){
        console.log(count++)
    }
    return increment;
}

const counter1 = makeCounter();
counter1() // 1
counter1() // 2
counter1() // 3
counter1() // 4
