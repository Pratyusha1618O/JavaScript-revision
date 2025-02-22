// If Else
const age = 21;

if (age > 18){
    console.log("Yes, you can vote");
}
else if(age == 18){
    console.log("you are eligible to vote now");
}
else{
    console.log("No, you can't vote");
}


// Ternary operator
age >= 18 ? console.log("Yes") : console.log("No");


// switch_case
const option = 1;
switch(option){
    case 1:
        console.log("Java");
        break;
    case 2:
        console.log("Python");
        break;
    case 3:
        console.log("C");
        break;
    default: console.log("invalid option");
                   
}
