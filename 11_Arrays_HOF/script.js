const students = ['Tithi', 'Trisha', 'Krish']

// function print(n){
//     console.log(n)
// }
// print(students)

// forEach()
students.forEach((val) => console.log(val))

// map()
const numbers = [1,2,3,4,5,6]
let newNum = []
numbers.map((val) => {
    newNum.push(val*2)
})
console.log(newNum)


function cube(n){
    return n**3
}
let cubeNum = numbers.map(cube)
console.log(cubeNum)


//find()
let ans = numbers.find(num => num === 4) // finds an element in array
console.log(ans)//4

let ans2 = numbers.findIndex(num => num === 4)//finds the index
console.log(ans2)//3


// filter()
let filteredArr = numbers.filter((num) => num % 2 == 0)
console.log(filteredArr)


// slice()
let slicedArr = numbers.slice(2,5) // array slicing
console.log(slicedArr)

// splice()
let splicedArr = numbers.splice(1,4) // 1 to 4th index elements will be deleted
console.log(numbers)