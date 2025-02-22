// Higher order function
function add(a, b, cb){
    let result = a+b;
    cb(result);
}

function showResult(result){
    console.log(result);
}
add(2,4,showResult)

add(10,20, function(val){
    console.log(val);
})

add(5, 10, (val) => console.log(val));

//___________________________________________________________
function sub(a, b, cb){
    let result = a-b;
    cb(result);

    return () => console.log(result)
}
let resultFunction = sub(400, 50, () => {});
resultFunction();

