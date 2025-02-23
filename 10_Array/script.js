// Arrays

const students = ['Raj', 'Pratyu', 'Khusi']
console.log(students)
console.log(students.length) //3
console.log(students[2]);
console.log(students[4]); // undefined

students[0] = 'Rajdip'
console.log(students)

students.push('Riya') // push value at the end
console.log(students)

const myArray = [1, true, "Tithi", "😁"]
console.log(myArray);

myArray.push({name: 'Raka'})
console.log(myArray);
console.log(myArray.indexOf("Tithi")); //2 // if not found then it will be -1

students.pop() // pop
students.reverse(); // reverse the array

console.log(students)







