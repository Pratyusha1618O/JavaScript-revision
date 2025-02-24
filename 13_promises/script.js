let a = 10
let b = 20

let result = a+b

async function getData(){
    let resultFromServer = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    )
    // console.log(resultFromServer)
    console.log(await resultFromServer.json())

}

getData()

//_____________________________________________________________

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data)=>{console.log(data)})
    .catch((err)=> {console.log(err)})

console.log(result)


//______________________________________________________________

let resultFromServer = fetch(
    "https://jsonplaceholder.typicode.com/posts"
)

console.log(resultFromServer)