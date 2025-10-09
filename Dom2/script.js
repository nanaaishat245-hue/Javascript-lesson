let fruits = ["Apple", "Orange", "Banana", "Apple"]
console.log(fruits[0]);


fruits.push("Mango")
console.log(fruits);

// loop
    for(let fruit of fruits){
        console.log("i like",fruit);
    }


    let student = {
        name: "aishat",
        age:  35,
        course: "computer science",
    }
    console.log(student.name);
    console.log(["course"]);

student.grade = "A"
console.log(student);

student.age = "22"
console.log(student);


// array of object

const students = [
    {name: "Aishat", age :"21", course: "computer science"},
    {name: "Ade", age :"27",  course:  "computer science"},
    {name: "ola", age : "29" ,course: "computer science"}
]

students.forEach(student => {
   console.log(student.name + " is studying " + student.course);
})