// traditional function
function greet(name){
    return "hello" + name
}
console.log(greet("Ola"));

// modern function
// const greetArrow =(name) => "Hello" + name
// console.log(greetArrow("DLT Africa"));

//  destructuring is used to unpack value from array or object easely
// Array of destruction
const  name = ["shade", "segun", "basit"]
const [first, second, third] = name
console.log(first);
console.log(second);

// Array of object
const students = {names: "Alice", course: "Javascript", level: "cohort7"}
const {names, course,} = students
 console.log(`${names} is learning ${course}`);

// spread operator is used to expand array or object

const frontend = ["HTML", "CSS", "JAAVASCRIPT"]
const backend = ["Node", "MongoDB"]
const fullstack = [...frontend, ...backend]
console.log(fullstack);

// spread operator with object
const user = {name: "segun", country: "korean"}
const info ={course: "javascript"}
const profile ={...user, ...info}
console.log(profile);

// template literals it make stringe creation easier and more dynamic

const people = "Basit"
const subject = "React"
console.log(`Hello ${people}, welcome to your ${subject} class at DLT Africa.`);

// classes 

class Student {
    constructor(name, course){
        this.name = name
        this.course = course
    }

    introduce(){
        console.log(`Hi I'm ${this.name}, learning ${this.course} at DLT africa!`);
    }
}
const Basit = new Student ("Basit", "React")
Basit.introduce()


// 

class fav {
    constructor(name, hobbie, country){
        this.name = name
        this.hobbie = hobbie
        this.country = country
    }
    introduce(){
        console.log(`hello my name is ${this.name}, my hobbie is ${this.hobbie} and i'm from ${this.country}`);
    }
}
const Aishat = new fav ("Aishat", "football", "Nigeria")
Aishat.introduce()



const colour = ["blue", "black", "red", "orange", "white"]
const [one, two, three, four, five] = colour
console.log(three);


const users = {firstname: "dammy", country: "nigeria", age: "34", lastname: "dele"}
const usersdata = {...users}
console.log(usersdata);

// OR

const person = {firstname: "dammy", country: "nigeria", age: "34", lastname: "dele"}
const {firstname, ...others} = person
console.log('first name', first);
console.log('other details', others);
