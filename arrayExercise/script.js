// 1
const carts = [1200, 2500, 800, 4000]

const number = carts.reduce((num,val) => num + val, 0)
console.log(number);

// 2
let scores =[35, 80, 25, 90, 60, 45]
let score = scores.filter(scores => {
    return scores >= 50
})
console.log(score);

// 3
let todos = ["Read", "Exercise", "Code","Sleep"]

let todo = todos.at(-1)
console.log(todo);

// 4

let nested = [1,[2,[3, 4]], 5]

function flattenArr (nest){
    return nest.flat(Infinity)
}
console.log(flattenArr(nested));


// 5
let students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 }
];

const student= students.map(students => {
    return students.name
 })
console.log(student);

// OR

const getStudentsName = function (student) {
    return student.map((std) =>{
        return std.name
    })
}
console.log(getStudentsName(students));



// 6
let names = ["Alice", "Bob", "Charlie"];

const greetNames = (arr) =>{
  arr.forEach(name => console.log(`Hello, ${name}!`)) 
  
}
greetNames(names);

// OR

const greetName = (name) => {
    return name.forEach((nm) =>{
        console.log(`Hello ${nm}!`);
    })
}
greetName(names)