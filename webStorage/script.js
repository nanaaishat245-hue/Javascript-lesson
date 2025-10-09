// LOCAL STORAGE

// local storage is part of the web storage API that allows web application to store data in the browser the data store their will remain available even if the user close the browser or restart the computer until it is deleted.

// OBJECT
localStorage.setItem('myObject', JSON.stringify({name: 'Bola', age: 10}))
const storeObject = JSON.parse(localStorage.getItem('myObject'))
console.log(storeObject);

// ARRAY
localStorage.setItem('myArray', JSON.stringify([200, 6]))
const newArray = JSON.parse(localStorage.getItem('myArray'))
console.log(newArray);

const newObject = {
    name: "Aishat",
    gender: "female"
}


// OBJECT
localStorage.setItem('myObj', JSON.stringify({newObject}))
const getObject = JSON.parse(localStorage.getItem('myObj'))
console.log(getObject);



// ARRAY
const FRIUTS = ['apple', 'mango', 'cashew']

localStorage.setItem('myFruits',JSON.stringify({FRIUTS}))
const Arr = JSON.parse(localStorage.getItem('myFruits'))
console.log(FRIUTS);



localStorage.setItem('theme', 'dark')
localStorage.setItem('fontsize', '10px')

const getObject1 = localStorage.getItem('theme')
console.log(getObject1);
const getObject2 = localStorage.getItem('fontsize')
console.log(getObject2);




// section storage store data only for the duration of the page section data disappear whwn the user closes the browser tab


// session for object
sessionStorage.setItem('formData', JSON.stringify({name: 'segun', age: '30'}))
const getData = JSON.parse(sessionStorage.getItem('formData'))
console.log(getData.name);
console.log(getData.age);

// session for array
sessionStorage.setItem('formDat', JSON.stringify([ '6', 'u']))
const getArr = JSON.parse(sessionStorage.getItem('formDat'))
console.log(getArr);


sessionStorage.setItem('form', JSON.stringify({
    email: "holaolu@emial.com" ,
    message: "hello how are you"
}))

const reciver = JSON.parse(sessionStorage.getItem("form"))
console.log(reciver);

// OR

sessionStorage.setItem('user', JSON.stringify({
    name: "Basit" ,
    age: 4,
    country: 'nigeria'
}))

const userData = JSON.parse(sessionStorage.getItem("user"))
console.log(userData);


// session of an Array
const food = ['rice', 'beans', 'yam', 'egg']

sessionStorage.setItem('myFood', JSON.stringify({food}))
const foods = JSON.parse(sessionStorage.getItem("myFood"))

console.log(foods);
console.log(food[2]);




// if (age) {
//     age >= 20 ("you are young ")
// }else ("you are old")
// console.log(age);



// ! means (not)






let age = 18
if (!age === 18) {
    console.log("you can vote ")
}else if(age > 18){
    console.log('you can older to vote');
}else{
    console.log('you are still a kid');
}

 let isRaining = false
if (!isRaining) {
    console.log('take umbrella');
} else {
    console.log('ITS SUNNY');
}
    

 
const arrFunction = (num , add) => {
    return num + add
}
console.log(arrFunction(5, 6));





