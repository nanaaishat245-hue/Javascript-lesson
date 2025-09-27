// function : function can be define as a reusable block of code that perform a specific task
console.log("Welcome to function")

function greet (name) {
    return "hello " + name;
}
console.log(greet("ola"));


function add (x, y) {
  return x + y
}
console.log(add(10, 12 ));


// while do we need functions in js
// 1. reusability : it make use reuse a certain code many times.
// 2 . organization : it break complex task into smaller usable part
// 3. Maintainability
// 4. Dry principle :theres is a principle in programing dry principle


// 1.Without Function  
console.log("The area is .....:", 7 * 5);
console.log("The area is .....:", 10 * 5);
console.log("The area is .....:", 25 * 5);


// 2. with function 

function area(length, breath) {
    return length * breath 
}
console.log("The area is ...", area(8, 2) );
console.log("The area is ...", area(10, 5) );


console.log(greet("dada"));
console.log(add(7,10));


// part of a function
function example (a, b) {
    return a /b 
}

// function can be regarded as --> keyword
// example //     //           --> example
// (a ,b)   //    // --> placeholder for argument oR [parameter]
// return //   body OF the function 
// return statement ---> return the result



// write function that return the larger number between two values, make it reusable for up to like 5 values .
 function largest (d, h) {
       return d > h ? d :h
 }
console.log(largest(15,20));
console.log(largest(30,35));
console.log(largest(18,18));
console.log(largest(70,90));
console.log(largest(10,20));


// adding two number together and give us true of false 
 function twonumber(k, l) {
       return k + l ==8;
 }
 console.log(twonumber(4, 4));
 console.log(twonumber(1, 3));

//  OR

 function addTwoNumbers(p, u) {
  return  p === u ? true : false;
}
console.log(addTwoNumbers(25, 25))
console.log(addTwoNumbers(2, 25))
console.log(addTwoNumbers(5, 25))

// types of function 
// 1.Function declaration 
// 2. expression 
// 3. anonymous 
// 4. arrow
// 5. immediately invoke function expression


// funtion declaration : without a parameter
function sayHello() {
  console.log("Hello");
}
sayHello();

function conditions() {
  console.log("How are you my friend");
}
conditions();



// Function expression 
const showHello = function () {
  console.log("function expression example 1");
}
showHello()


const multiple = function (d, e) {
  const result = d * e;
  console.log(result)
}
multiple(2, 3)

// different between declaration and expression 
// because in declaration function the keyword use is function while in expression we  assign a new
// variable to return the value from the function we should call the variable



// ARROW FUNCTION: Arrow function uses arrow instead of the keyword function to declare a function.
//  Arrow functions are not hoisted. They must be defined before they are called.

// FUNCTION EXPRESSSION:are not hoisted in the same way as declarations.
//  Only the variable holding the function is hoisted, not the function itself.
//  They can only be invoked after the line where they are defined.

// DECLARARION : Function declarations are hoisted, 
// meaning they are moved to the top of their scope during the compilation phase. 
// This allows them to be called before their actual definition in the code.


// ARROW FUNCTION
const arrowFunction = () => console.log('Arrow function');
arrowFunction();


const arrowTwo = (num) => {
  return num * num;
};
console.log(arrowTwo(5));


// ANONYMOUS FUNCTION
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
anonymousFun()