// 1. Data Types

// Q1. Declare variables for the following and print their values:

//  - Your name (string)
//  - Your age (number)
//  - Whether you are a student (boolean)
//  - A list of all examples of data types (array)
//  - An object with properties: name, age, country


let string = "Aishat"
console.log(string);
let age = 10
console.log(age);
let youAreAStudent = "true"
console.log(youAreAStudent);
let list = [0,1, 2, 3, 4];
console.log(list);
let object = {name:"Aisha", age: 50, country:"Nigeria" }
console.log(object);
//  Operators

// Q2. Write a program that takes two numbers and prints:

//  - Their sum
//  - Their difference
//  - Their product
//  - Their quotient

let numb1 = 10
let numb2 = 5
console.log(numb1 + numb2);
console.log(numb1 - numb2);
console.log(numb1 * numb2);
console.log(numb1 % numb2);



// 3. Conditionals

// Q3. Write a function checkNumber(num) that:

//  - Prints "Positive" if the number is greater than 0
//  - Prints "Negative" if the number is less than 0
//  - Prints "Zero" if the number is 0

const checkNumber = (num) => {
    if (num > 0) {
        console.log("positive"); 
    }
        else if (num < 0){
           console.log("negative");;
        }
    else{
        console.log("zero"); ;
    }
}
checkNumber(6)
checkNumber(-6)
checkNumber(0)


// 4. Write a program that checks a person’s age and prints:

//  - "You can vote" if age is 18 or above
//  - "You cannot vote" if under 18


let vote = (ages) => {
    if (ages >= 18){
        console.log("You can vote");
    }
    else
        console.log("You cannot vote");
}
vote(34)
vote(15)

// Q5. Write a for loop that prints numbers from 1 to 10.
// let count = 1

// while (count <= 10){
//     console.log(count)
//     count++;
// }


for (let i = 1; i <= 10; i++){
    console.log(i);
}


//6. Write a while loop that prints only even numbers between 1 and 20.


let count = 2

while (count <= 20){
    console.log(count)
    count += 2;
}


// 7. Write a function multiply(a, b) that returns the product of two numbers.
//  Test it with at least 3 different sets of numbers.


function multiple (a, b) {
    return a * b
}
console.log(multiple(2, 4));
console.log(multiple(1, 7));
console.log(multiple(4, 4));
console.log(multiple(2, 0));



// Q8. Write a function checkGrade(score) that:

//  - Returns "Pass" if score is 50 or more
//  - Returns "Fail" if score is less than 50

let Grade = (scores) => {
    if (scores >= 50)  {
        console.log("Pass");
    }else{
        console.log("Fail");
    }
}
Grade(70)
Grade(30)



// 9. Explain the difference between global scope and local scope and block scope in JavaScript.

//   - Then, write a small code example showing a variable in global scope, local scope and block scope.
//  - Show how lexical scope works between different scopes in a function


const global = "i am global"

// local
const showHello = () => {
  const hello = 'my name is Aishat'
  console.log(hello);
}
showHello()


// block
let aged = 20

if (aged >= 18) {
    console.log("you are old enough to vote")
}else {
    console.log("sorry, you are too young to vote.")
}
if (0 < 1) {
    const block = "i am a block variable"
    console.log(block);
    console.log(global);
}

// lexical
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



// 10. Select all the <h1> elements on your page using getElementsByTagName.

//  - Change the text of the first <h1> (index 0) to "Welcome to JavaScript!".
//  - Use a for loop to change the text of all <h1> elements to "Learning DOM is fun!".



const tagName = document.getElementsByTagName('h1')
   
tagName[0].textContent = 'Welcome to javascript'


for(let i=1; i < tagName.length; i++) {
   tagName[i].textContent = "Learning DOM is fun!"
}



// 11.  Select all <p> elements using querySelectorAll.
//  - Change the text color of the second paragraph (index 1) to "blue".
//  - Use forEach to change the background color of all paragraphs to "lightgray".


const para = document.querySelectorAll('.query')
para[1].style.color = "blue"

para.forEach(para => para.style.backgroundColor = 'lightgray')





// Q12.  Create a new <p> element with the text "Hello, DOM!" using document.createElement.
//  - Append it to the body of the page.
//  - Use a for loop to create 5 more paragraphs numbered like "Paragraph 1", "Paragraph   2", … "Paragraph 5".
//  - Append all of them to the body.

const doc = document.createElement("p")

doc.textContent = "Hello, DOM!"

document.body.appendChild(doc);

for (let i = 1; i <= 5; i++) {
  const p = document.createElement("p");
  p.textContent = `Paragraph ${i}`;
  document.body.appendChild(p);
}



