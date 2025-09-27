// scope defins the visibility and accessibiity of variable and function within different part of our code
// types of scope 
// 1. global :  Variables declared Globally (outside any block or function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.

const aishat = 4

console.log(aishat);
  

const func = () => {
     console.log( aishat);
}

if (0 < 1) {
  console.log(aishat)
  func()
}


// 2. local : these are variable or function declare within a function,
// they can declare only be accessed within the function it was declared
 
const globalFunction = () => {

    const segun = 10;
    console.log( segun);
}
globalFunction()


// declare a function that brings a print result of 
// variable in the local scope and global scope of the function in its console.


//1. global
const global = "i am global"

//2. local : it cannot be console outside the function
const showHello = () => {
  const hello = 'my name is'
  console.log(hello);
}
showHello()

//3.block : it cannot be console outside the block
let age = 20

if (age >= 18) {
    console.log("you are old enough to vote")
}else {
    console.log("sorry, you are too young to vote.")
}

if (0 < 1) {
    const block = "i am a block variable"
    console.log(block);
    console.log(global);
}


//4. Lexical scope 

// this scope shows interaction between variable from 
// the diffrent scopes.so basically inner functions have
// access to their parent function variable and function
// but the parent functions do not have access to the inner
// function variable or function. 


// lexcal explains that inner function have access to parent function but parent function cannot have access to the inner function.


const globalVar = "i am a global var"

const outter = () =>{
    const outerVar = " i am outter val"

    const inner = () => {
        const innerVar = 'i am the innner var'
        console.log(outerVar)
         console.log(outerVar);
         console.log(innerVar);
    }
   inner()
}
outter()


// if and else inside function 
function numbers(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(numbers(10));   
console.log(numbers(-5));   
console.log(numbers(0));  



const switchFunc = function (days) {

  switch (days) {
        case "Monday" :
        console.log("Start of the week")
        break;
    case "wednesday" :
        console.log("Third day of the week")
        break;
        default:
        console.log("just another day");
}

}




// array
// const cohorts =[
//     {
//         name : "aishat",
//         gender : "female"
//     },
//     {
//         name : "basit",
//         genders : "male"
//     }
// ]
// console.log(cohorts[0].name)