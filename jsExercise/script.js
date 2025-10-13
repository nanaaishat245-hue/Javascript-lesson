// 1. Write a program that checks whether a number entered by the user is positive, negative, or zero

let  number = 0

if (number > 0) {
    console.log("positive");
} else if (number < 0) {
  console.log("negative");
}else if (number ===0 ){
 console.log("zero");
}else{
    console.log("invalid number");
}
    
// 2. Write a program that asks the user for the day of the week (e.g., "Monday", "Tuesday", etc.) and prints:
// “Weekday” if it’s Monday to Friday
// “Weekend” if it’s Saturday or Sunday
// “Invalid day” if it’s not a day of the week


const day = "saturday"

if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
  console.log("Weekday");
} else if (day === "saturday" || day === "sunday") {
  console.log("Weekend");
} else {
  console.log("Invalid day");
}

// 3.  Write a program that asks the user for their role in a company and prints:
// “Admin Access” if role is “admin”
// “Editor Access” if role is “editor”
// “Viewer Access” if role is “viewer”
// “No Access” for anything else

const program = "viewer"
    if (program === "admin") {
        console.log("Admin Access");
    } else if (program === "editor"){
        console.log("Editor Access");
    }else if (program === "viewer") {
        console.log("Viewer Access");
    }else{
        console.log("No Access");
    }

// 4. Ask the user for their age and display:
// “You are a child” if below 13,
// “You are a teenager” if between 13 and 19,
// “You are an adult” if between 20 and 59,
// “You are a senior” if 60 or above.

let age = 30

if (age < 13) {
    console.log("You are a child");
} else if (age <= 19) {
    console.log("You are a teenager");
}else if(age <= 59 ) {
    console.log("You are an adult");
}else {
    console.log("You are a senior");
}


// 5. Create a program that asks for a student’s exam score and prints the grade using these conditions:
// 70–100 → “A”
// 60–69 → “B”
// 50–59 → “C”
// 40–49 → “D”
// Below 40 → “F”.


const grade =39

if (grade >= 70) {
    console.log("A");
} else if (grade >= 60 ){
    console.log("B");
} else if (grade >= 50 ){
    console.log("c");
} else if  (grade >= 40){
    console.log("D");
} else {
    console.log("F");
}


// 6. Write a program that checks the status of a ticket and prints:
// “Valid ticket” if status is “confirmed”
// “Pending ticket” if status is “pending”
// “Invalid ticket” if status is anything else


let ticket = "successful"

if (ticket === "confirmed") {
    console.log("Valid ticket");
} else if(ticket === "pending"){
    console.log("Pending ticket");
}else {
    console.log("Invalid ticket");
}


// 7. Using a switch statement, write a program that prints the day of the week based on a number (1–7).
  
const days = "sunday"

switch (days) {
    case "monday":
        console.log(1);
        break;
    case "tuesday":
        console.log(2);
        break;
    case "wednesday":
        console.log(3);
        break;
    case "thursday":
        console.log(4);
        break;
    case "friday":
        console.log(5);
        break;
    case "saturday":
        console.log(6);
        break;
    case "sunday":
        console.log(7);
        break;
    default:
}

// 8. Create a program that checks the weather temperature (in °C) and prints:
// “Cold” if less than 15
// “Warm” if between 15 and 30
// “Hot” if above 30.

let weather = "30"

if (weather >= 30) {
    console.log("Hot");
}else if(weather >= 15){
   console.log("Warm"); 
}else{
    console.log("cold");
}


// 9. Write a program that asks for a password and prints:
// “Access Granted” if it matches the correct password
// “Access Denied” otherwise.


const password = 67

if (password === 678) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// 10. Write a program that asks for a traffic light color (“red”, “yellow”, or “green”) and prints:
// “Stop” for red
// “Ready” for yellow
// “Go” for green
// “Invalid color” for anything else.

let color = "yellow"

if (color === "red") {
    console.log("stop");
} else if(color === "yellow"){
    console.log("Ready");
}else{
    console.log("Go");
}

// LOGICAL OPERATORS
// 	1. Write a program that checks if a person is eligible to vote.
// The person must be 18 years or older and a citizen to vote.
//  Use the && operator in your condition.

// Ask the user for their age and citizenship
let ages = 86 
let isCitizen = "yes"

if (ages >= 18 && isCitizen === "yes") {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}


// 2. Create a program that checks if a person can enter a movie.
// The movie is for adults (18+) or for those who have parental permission.
//  Use the || operator to combine both conditions.

let check = 13
let hasParentalPermission = "yes";

if (check >= 18 || hasParentalPermission === "yes") {
    console.log("permitted");
} else {
    console.log("Not Permitted");
}

// 3. Write a program that checks if a number is not between 10 and 20.
//  Use logical operators (!, &&, or ||) to perform the check.

let numbers = 2; 

if (!(numbers >= 10 && numbers <= 20)) {
  console.log("The number is not between 10 and 20.");
} else {
  console.log("The number is between 10 and 20.");
}

// 4. Ask the user for their age and hasID status (true or false).
//  Print “Allowed” if the person is 18 or older and has an ID, otherwise print “Not allowed”.


let user = 87
let hasID = "true"

if (user >= 18 && hasID === "true") {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}


// 5. Write a program that checks if a student qualifies for a scholarship.
// The student’s score must be at least 80
// And their attendance must be above 75
//  Use the && operator to determine if both conditions are met, otherwise print “Not qualified”.


let scholarship = 90
let attendance = 75 

if (scholarship >= 80 && attendance === 75) {
    console.log("Qualify");
} else {
   console.log("Not Qualify"); 
}


// A function declaration is a way of defining a named function in JavaScript (or other programming languages). It specifies the function’s name, parameters, and the block of code that runs when the function is called. function is the keyword used to declare the function

function greet() {
  console.log("Hello, world!");
}
greet()


function score(){
    console.log("20 scores");
}
score()




// A function expression is a way of defining a function and storing it inside a variable. Unlike a function declaration, it does not have to have a name (though it can), and it is created as part of an expression.
// function() defines an anonymous function (a function without a name).
// That function is assigned to the variable greet.
// You can then call it using the variable name: greet().



const greets = function() {
  console.log("Hello, world!");
};
greets()

const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); 



// An arrow function is a shorter and simpler way to write a function in JavaScript. it is often used because it makes your code cleaner and easier to read. An arrow function does the same job as a normal function, but it uses an arrow => instead of the word function.

const greetArr = () => {
  console.log("Hello!");
};
greetArr()

const addArr = (a, b) => {
  return a + b;
};
console.log(addArr(5, 3));




