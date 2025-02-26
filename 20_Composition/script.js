// Compose too many functions and arguments

function add(a, b){
    return a+b;
}

function square(val){
    return val * val
}

function multiply(args){
    return args[0] * args[1];
}

/*
function composeTwoFunc(fn1, fn2){
    return function(a, b){
        return fn2(fn1(a, b)) 
        // square(add(a, b)) = square(add(2,4)) = square(6) = 36
    }
}
*/

const composeTwoFunc = (fn1, fn2) => (a, b) => fn2(fn1(a,b))

const task = composeTwoFunc(add, square) 
console.log(task(2, 4)) //36

//____________________________________________________________________________
//............For multiple functions and multiple arguments...................

/*
function compose(...fns){
    return function (...values){
        return fns.reduce((a, b) => b(a), values)
    }
}
*/

const composeAll = (...fns) => (...values) => fns.reduce((a,b) => b(a), values)

const c2f = composeAll(multiply, square, val => val+2) 
console.log(c2f(3, 1)) // 9+2 = 11

