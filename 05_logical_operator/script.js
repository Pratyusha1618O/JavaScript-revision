// Logical Operator
// AND (&&) Both conditions have to be true
const sem = 6
const dept = 'CS'

if(sem >= 5 && dept == 'CS'){
    console.log("Final Year, CS");    
}

// OR (||) one of the conditions have to be true
if(sem >= 5 || dept == 'Electronics'){
    console.log("Final Year");    
}

// NOT (!)
const num = 5
if(num % 2 != 0){
    console.log('Odd');  
}

console.log(!true); // false
console.log(!false); // true

