// Function 
function sayHello(){
    console.log("hello");
}
sayHello()

//parameters
function add(a, b){
    return a+b
}

let result = add(2,4)
console.log("Sum: ", result);

//__________________________________________

function addNumbers(){
    // console.log(arguments)
    let ans = 0
    for(let i=0; i<arguments.length; i++){
        ans = ans+arguments[i];
    }
    return ans
}

let ans = addNumbers(10,20,30,40,50)
console.log(ans);

//___________________________________________

function addNumbersV2(...numbers){
    // console.log(numbers)
    let ans = 0
    for(let i=0; i<numbers.length; i++){
        ans = ans+numbers[i];
    }
    return ans
}
let ans2 = addNumbersV2(10,20,30,40,50)
console.log(ans2);

