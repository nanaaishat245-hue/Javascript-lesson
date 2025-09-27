// DOM : doucument object model.
// dom is a programming interface that repreent the structure of a webpage so
//  that programming language (e.g) can interact with it.

    //  getElementById : Unique to the first one only
    //  getElementByClassName : 
    //  getElementByTagName
    //  querySelector
    //  querySelectorAll


const id = document.getElementById('mainId')
const group = document.getElementsByClassName('mainItem')

// converting the html collection to an array method in order to use array metthod to style it.
const tagName = Array.from(document.getElementsByTagName('p'))
const headings = document.getElementsByTagName('h3')
 
const selector = document.querySelector('.spanItem')
const selectorId = document.querySelector('#spanId')
  
const selectAll = document.querySelectorAll('.con')

// elementById
id.textContent = 'Hi'
id.style.color = 'red'
id.style.backgroundColor = 'blue'

// elementByclassName
group[0].innerHTML = 'good'
group[1].innerText = 'fair'
group[2].innerHTML = 'good'



for(let i=0; i<group.length; i++) {
    group[i].textContent = '2!!!'
    group[i].style.color = 'green'
    console.log((i));
}

// elementbyTagName
for(let i=0; i < tagName.length; i++) {
   tagName[i].style.border = "1px solid black"
}

// headings[0].textContent = 'hello!!!!'
// headings[0].style.color = 'red'
// headings[0].style.backgroundColor = 'green'

// styling for each element in html collection
tagName.forEach(item => item.style.border = '2px solid black')


selector.textContent = 'bad'

selectorId.style.color = 'brown'
selectorId.style.backgroundColor = 'black'
selectorId.style.padding = '3px '


selectAll[0].textContent = 'you'
selectAll[1].textContent = 'her'
selectAll[2].textContent = 'you' 

selectAll.forEach(con => con.style.color = 'blue')








const one = document.getElementsByClassName('myDiv')

one[0].textContent = 'A'
one[0].style.color = 'pink'



const head = document.getElementsByTagName('h4')
head[0].textContent = 'hello!!!!'
head[0].style.color = 'red'
head[0].style.backgroundColor = 'green'


const mySpan = document.getElementById('mySpan')

mySpan.textContent = 'Hi'
mySpan.style.color = 'red'
mySpan.style.backgroundColor = 'whine'










// grade using if and else
// function student(grade) {
//   if (grade >= 90) {
//     return "A";
//   } else if (grade >= 70) {
//     return "B";
//   } else if (grade >=50) {
//     return "C";
//   } else {
//     return "D";
//   }
// }
// console.log(student(20));   
// console.log(student(90));   
// console.log(student(60));  


// // if and else 
// let ageFun =  (age) => {

// if (age >= 18) {
//     console.log("you are old enough to vote")
// }else {
//     console.log("sorry, you are too young to vote.")
// }
// }
// ageFun(10)




// // switch for days
// const switchFunc = function (days) {

//   switch (days) {
//         case "Monday" :
//         console.log("Start of the week")
//         break;
//     case "Tuesday" :
//         console.log("second day of the week")
//         break;
//     case "wednesday" :
//         console.log("Third day of the week")
//         break;
//     case "thursday" :
//         console.log("fouth day of the week")
//         break;
//     case "friday" :
//         console.log("weekend")
//         break;
//         default:
//         console.log("just another day");
// }

// }
// switchFunc('Monday')
// switchFunc('friday')
// switchFunc('sunday')



// // Grade using ternary 
// function getGrade(score) {
//   return score >= 70 ? "A" : score >= 60 ? "B" : score >= 50  ? "C" : score >= 40 ? "D" : "F"
// }
// console.log(getGrade(85)); 
// console.log(getGrade(62)); 
// console.log(getGrade(47)); 
// console.log(getGrade(30));