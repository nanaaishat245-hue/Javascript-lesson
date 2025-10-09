// Q11. Filter Adults
// You are given:
// let people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 21 },
//   { name: "Charlie", age: 16 },
//   { name: "David", age: 25 }
// ];

// 👉 Write a function getAdults(arr) that uses filter() to return only the people aged 18 or older.

let peoples = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 25 }
];

const filterArr = peoples.filter(people =>{
    return people.age >= 18
})
console.log(filterArr);

// OR
function getAdults(arr) {
  return arr.filter(person => person.age >= 18);
}
console.log(getAdults(peoples));
// non-mutating (it does not change the original messages array).


// Q2. Create Usernames with map
// Given:
// let users = ["John Doe", "Jane Smith", "Michael Brown"];

// 👉 Use map() to create usernames in the format:
//  ["john_doe", "jane_smith", "michael_brown"].


let users = ["John Doe", "Jane Smith", "Michael Brown"];

let usernames = users.map(user => user.toLowerCase().replace(" ", "_"));
console.log(usernames);
// non-mutating (it does not change the original array).



// 3. Shopping Cart Discounts
// You have a shopping cart:
// let cart = [120, 80, 200, 50];

// 👉 Write a function that uses map() to apply a 10% discount to all items above 100. Keep others unchanged.

let cart = [120, 80, 200, 50];


function applyDiscount(cart) {
  return cart.map(price => price > 100 ? price * 0.9 : price);
}
console.log(applyDiscount(cart));
// non-mutating (it does not change the original array).





// Count Votes with reduce
// Given:
// let votes = ["yes", "no", "yes", "yes", "no", "yes"];

// 👉 Use reduce() to count how many people voted "yes" and "no". Return an object like:
// { yes: 4, no: 2 }

let votes = ["yes", "no", "yes", "yes", "no", "yes"];

let result = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});
console.log(result);
// non-mutating (it does not change the original messages array).



//6. Find Highest Score
// You have student scores:
// let scores = [65, 92, 81, 74, 99, 58];

// 👉 Write a function getHighestScore(arr) that uses reduce() to return the highest score.


let scores = [65, 92, 81, 74, 99, 58];

function getHighestScore(arr) {
  return arr.reduce((highest, current) => {
    return current > highest ? current : highest;
  }, arr[0]);
}

console.log(getHighestScore(scores));
// non-mutating (it does not change the original messages array).


// 7. Chain Methods – Expensive Products
// Given:
// let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Book", price: 30 },
//   { name: "Headphones", price: 200 }
// ];

// 👉 Use chaining (filter + map) to get an array of product names that cost at least 500.


let products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Book", price: 30 },
  { name: "Headphones", price: 200 }
];

let expensiveProducts = products
  .filter(product => product.price >= 500)   
  .map(product => product.name);            

console.log(expensiveProducts); 
// non-mutating (it does not change the original messages array).




// 8. Toggle Completed Tasks (map + conditionals)
// Given:
// let todos = [
//   { task: "Study", completed: false },
//   { task: "Workout", completed: true },
//   { task: "Sleep", completed: false }
// ];

// 👉 Write a function toggleTasks(arr) that uses map() to flip the value of completed for each task.

let todos = [
  { task: "Study", completed: false },
  { task: "Workout", completed: true },
  { task: "Sleep", completed: false }
];

function toggleTasks(arr) {
  return arr.map(todo => {
    return { todo, completed: !todo.completed }; });
}
console.log(toggleTasks(todos));
// non-mutating (it does not change the original messages array).



// 9. Word Frequency Counter (reduce)
// Given:
// let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// 👉 Write a function wordFrequency(arr) that uses reduce() to return:
// { apple: 3, banana: 2, orange: 1 }


let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

function wordFrequency(arr) {
  return arr.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1; return count}, {});
}
console.log(wordFrequency(words));
// non-mutating (it does not change the original messages array).





// 10. Dynamic DOM Table (map + join)
// Given:
// let students = [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "C" }
// ];

// 👉 Write a function renderTable(arr) that uses map() + join() to generate a table inside <table id="studentTable">. Each student should be a new row <tr><td>Name</td><td>Grade</td></tr>.

let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" }
];

function renderTable(arr) {
  const table = document.getElementById("studentTable");

  let rows = arr
    .map(student => `<tr><td>${student.name}</td><td>${student.grade}</td></tr>`)
    .join("");

  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Grade</th>
    </tr>
    ${rows}
  `;
}
renderTable(students);





//11.  (slice) – Last 3 Messages
// You are given an array of chat messages:
// let messages = [
//   "Hello!",
//   "How are you?",
//   "Did you finish the homework?",
//   "Yes, almost done.",
//   "Great! See you later.",
//   "Bye!"
// ];

// 👉 Write a function getLastMessages(arr, count) that uses slice() to return the last count messages from the chat.


let messages = [
  "Hello!",
  "How are you?",
  "Did you finish the homework?",
  "Yes, almost done.",
  "Great! See you later.",
  "Bye!"
];

function getLastMessages(arr, count) {
  return arr.slice(-count);
}
console.log(getLastMessages(messages, 3));
// non-mutating (it does not change the original messages array).



// 12. (splice) – Remove and Replace
// You are given a class list:
// let classList = ["Alice", "Bob", "Charlie", "David", "Eve"];

// 👉 Write a function replaceStudent(arr, index, newStudent) that uses splice() to remove the student at the given index and replace them with a new one.


let classList = ["Alice", "Bob", "Charlie", "David", "Eve"];   

function replaceStudent(arr, index, newStudent) {
  arr.splice(index, 1, newStudent); 
  return arr;
}
console.log(replaceStudent(classList, 2, "Frank"));
// mutating : because it modify the original array