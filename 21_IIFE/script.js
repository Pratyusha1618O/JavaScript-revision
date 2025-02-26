//IIFE => Immediately Invoked Function Expression
// Runs as soon as it is defined.

(function add(a, b){
    let age = 21;
    console.log(a + b);
})(2, 3);


(function say(){
    console.log("Hey");
})();


(()=> console.log("I am ES6"))();


const value = (() => 100)();
console.log(value);

// const data = (async () => await fetch())();

//________________________________________________________________

const atm = function (initialBalance) {
    let balance = initialBalance;
    function withdraw(amt){
        if(amt > balance){
            console.log("Are you kidding?");
        }
        else{
            balance -= amt;
            return balance;
        }
    }
    return {withdraw};
};

const pratyu = atm(1000);
console.log(pratyu.withdraw(100));
console.log(pratyu.withdraw(100));
console.log(pratyu.withdraw(1000));


