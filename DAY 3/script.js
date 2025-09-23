// conditionals : Conditional statements are used for make decisions based on different conditions. 
let age = 20

if (age >= 18) {
    console.log("you are old enough to vote")
}else {
    console.log("sorry, you are too young to vote.")
}


let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
}else {
    console.log("Grade: F");
}


// write a program that take a temperature if temperature >= 30 it should be hot   if is >= 20 it should be nice weather  otherwise it should be cold

let temperature = 39;

if (temperature >= 30) {
    console.log("temperature: Hot");
} else if (temperature >= 20) {
    console.log("temperature: Nice weather");
} else {
    console.log("temperature: Cold");
}


// switch
let day = 'wednesday';

switch (day) {
    case "Monday" :
        console.log("Start of the week")
        break;
    case "wednesday" :
        console.log("Third day of the week")
        break;
    case "saturday" :
        console.log("for occassion")
        break;
    case "sunday" :
        console.log("New week")
        break;
        default:
        console.log("just another day");
}


// Loops (Repetition) it allows us repeat code without writing it in many times. 
//  Loops allow us to run the same code over and over again, each time with a different value.
// types of loops
// 1.for loops
// 2. while loops
// 4. of loops
// 3.do while loops



// for loops
 for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
 }

// initialization, condition, update 
for (let i = 1; i <= 12; i++){
    console.log("2 X " + i + " = " + (2 * i));
}

let count = 1 

// while
while (count <= 5){
    console.log("count is: ", count)
    count++;
}

// loop of
let fruits = ["Apple", "Banana", "Mango", "cashew"]
 
for (let fruit of fruits) {
    console.log("I like", fruits);
}

// ternary is a short way of writring if and else statement
// short way
let ages = 18

let message = age >= 18 ? "you are an adult." : "you are a minor";
console.log(message);

// long way

let number = 7;
let result = (number % 2 === 0) ? "Even number" : "Odd number"
console.log(result);


let isLoggedIn =true
let status = isLoggedIn ? "Welcome back!" : "Please log in."
console.log(status);


let isLoggedInd = false
let main = isLoggedInd ? "Welcome back!" : "Please log in."
console.log(main);




// function without parameter  meaning that function cannot be declared without parameter
function square() {
  let num = 2
  let data = num * num
  console.log(data);
}
square()


function  scores() {
   let fact = 3
   let facts = fact * fact;
   console.log(facts);
}
scores()


// function addTwoNumbers() {
//   let numOne = 10
//   let numTwo = 20
//   let sum = numOne + numTwo

//   console.log(sum)
// }
// addTwoNumbers()




// function returning value

function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())