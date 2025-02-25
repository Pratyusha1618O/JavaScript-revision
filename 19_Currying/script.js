function add(a){
    return function add(b){
        return function add(c){
            return a + b + c;
        }
    }
}
console.log(add(2)(3)(5))


const addition = (a) => (b) => (c) => a+b+c; // we can write this instead of above function
console.log(addition(10)(20)(30))

//____________________________________________________________________________

/*
function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`sending email to ${to} with subject ${subject}: ${body}`)
        }
    }
}

let step1 = sendAutoEmail('pratyu@gmail.com')
let step2 = step1("New order confirmation")
step2('Hey Pratyu, here is something for you')
*/

const sendAutoEmail = to => subject => body =>
    `sending email to ${to} with subject ${subject}: ${body}`

let step1 = sendAutoEmail('pratyu@gmail.com')
let step2 = step1("New order confirmation")
console.log(step2('Hey Pratyu, here is something for you'))