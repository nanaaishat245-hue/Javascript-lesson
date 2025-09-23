//  1.  comment can make code readable
// 2.  Welcome to 30DaysOfJavaScript
// 3.comments can make code readable,

// easy to reuse and informative

// 4 Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
// Using typeof operator
console.log( "Aishat");   
let boolean =true
console.log(boolean); 
let age
console.log(age);     
let names =null
console.log( names);       



// datatypes.js
// 5 Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

// String
let myString = "Hello World";
console.log(typeof myString)

// Number
let myNumber = 42;
console.log(typeof myNumber);

// Boolean
let myBoolean = true;
console.log(typeof myBoolean);

// Undefined
let myUndefined;
console.log(typeof myUndefined);

// Null
let myName = null;
console.log(typeof myName);


// Object
let myObject = { name: "Alice", age: 25 };
console.log(typeof myObject);

// Array
let myArray = [0,1, 2, 3, 4];
console.log(typeof myArray); // returns "object"


// Function
let myFunction = function() {
   "I am a function";
};
console.log(typeof myFunction);


// 6 Declare four variables without assigning values
let variableOne;
let variableTwo;
let variableThree;
let variableFour;


// 7 Declaring four variables with assigning values
let firstName = "John";
let ages =20;
let agirl= true;
let city = "Abuja";

console.log(firstName);
console.log(age);     
console.log(agirl); 
console.log(city);   

// 8 Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstNames = "Aishat";
let lastName = "Abiodun";
let maritalStatus = "Single";
let country = "Nigeria";
let aged = 22;

// 9 Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName1 = "Aishat", lastName1 = "Abiodun", maritalStatus1 = "Single", country1 = "Nigeria", age1 = 50;


// 10 Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
let myAge = 72;
let yourAge = 30;

console.log(myAge);
console.log(yourAge);






// caiculate the area of a circle that has teh radius of 9.897
// make sure you make use of const and let the keyword for declaration
// formular: πr2

const PI = 3.142
let radius = 9.8987


let areaOfACircle = PI *radius **2
console.log (areaOfACircle)



// operators in javascript and its categories
// 1.Arithemetic 
// 2.logical
// 3.Assignment (=, +=  -= -*)
// 4.comparison
        

//1. increment and decrement in arithemetic operator
let a = 90
a++
// ++a
console.log(a)

// decreament
let b=30
--b
b--
console.log(a)


let IncrementValue = 40;
let postdecrements = IncrementValue++;
console.log(postdecrements)


let IncrementValues = 40;
let predecrements =  ++IncrementValues;
console.log(predecrements)


let DecrementValue = 80;
let postdecrement = DecrementValue--;
console.log(postdecrement)


let DecrementValues = 80;
let predecrement =  --DecrementValues;
console.log(predecrement)


// 3.Assignment operator
let plusAssignment =20;

plusAssignment = plusAssignment + 15
plusAssignment += 15;
console.log(plusAssignment)


let minusAssignment = 60;
minusAssignment = minusAssignment + 10;
// minusassignment -= 10
console.log(minusAssignment)


let modulus =89
modulus %= 3;
console.log(modulus)

// Comparison Operators: Compare two values and return a Boolean (true or false) result.
// Equal to (==)
// Strictly equal to (equal value and equal type) (===)
// Not equal to (!=)
// Strictly not equal to (!==)
// Greater than (>)
// Less than (<)
// Greater than or equal to (>=)
// Less than or equal to (<=)
// Logical Operators: Combine or manipulate Boolean values.
// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)
// Nullish Coalescing (??)
// */


// strict mode checks both the value and the typeof 
let comparion = 3 === 3;
let comparion1 = 5 >= 3;
console.log(comparion)


// NotEqual to
let notComparison = 3 !== 3;
console.log(notComparison)


// Greater than (>)
let Greaterthan   = 6 > 3;
console.log(Greaterthan )


// Less than (<)
let Lessthan = 4 < 7;
console.log(Lessthan)


// Greater than or equal to (>=)
let Greaterthanorequalto = 10
let num = 5+5 >= 10;
console.log(num)


//  Less than or equal to (<=)
let  Lessthanorequalto =  20;
let nub = 10+
console.log(Lessthanorequalto)


