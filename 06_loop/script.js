// Loop

// for loop
for(let i=1; i<=10; i++){
    console.log("Pratyu" + i);  
}

// While loop
let i = 0
while(i != 20){
    i++;
    console.log("steps taken "+i);
}

// Do while
let j = 0
do{
    console.log("Step "+ j);
    j++;
}while(j <= 5)


// Guess the number
let number = 40
let guess = 0
do{
    guess = parseInt(prompt("Guess a number: "))
    if(guess == number){
        alert('Winner');
        break;
    }
}while(guess != 0)