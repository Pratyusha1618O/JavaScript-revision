// Arrow Function
//____________________________________________________________
// 1. Syntax
const Hello = () => {
    console.log("say hello");
}
Hello()

//............................
const add = (a,b) => {
    return a+b;
}
console.log(add(2,3))

const addV2 = (a,b) => a+b // one liner arrow function
console.log(addV2(10,20));

//___________________________________________________________
// 2. 'arguments' keyword : can not be used here
const addNumbers = (...nums) => {
    console.log(nums)
}

addNumbers(1,2,3,4)

//___________________________________________________________
// 3. Hoisting

// sayHi();
const sayHi = () => {
    console.log("hii")
}
sayHi();

//___________________________________________________________
// 4. This keyword
const obj = {
    value: 20,
    myFunction: function(){ // pointing this particular object
        console.log("Value is: ", this)
    },

    myArrowFunc: () => { // pointing window object/ global object
        console.log(this)
    }

}

obj.myFunction();
obj.myArrowFunc()
