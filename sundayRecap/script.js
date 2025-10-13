// // reduce
// const arrNum = [2,3,4,5,6]

// const arr = arrNum.reduce((Num,value)=> Num + value,  0)
// console.log(arr);


// // const arr2 = [3,4,5,6,7,8]
// // arr2.forEach(num =>{
// //     console.log(num * 1);
// // })


// const arr2 = [3,4,5,6,7,8]

// const secArr = arr2.map((value,index) => value + index)
// console.log(secArr);


// const arr3 = [2,4,5,6,7]

// const arr8 = arr3.map((value) => (value * 5))
//     console.log(arr8);


// const sum = arr3.reduce((num,value)=> num + value, 0)
// console.log(sum);

// const sums = arr3.reduce((num,value)=> num + value)
// console.log(sums * 2);


// const emp = []

//  emp.push["apple", "banana", "mango"]
// console.log(emp);

// const word = ["goat", "dog", "country", "ignorant"]

// const filterArr = word.filter(words => words.length <= 5)
// console.log(filterArr);


// const products = [
//     {name: "laptop", price: 200, inCart:true},
//     {name: "bag", price: 400, inCart:false},
//     {name: "phone", price: 400, inCart:true},
//     {name: "charger", price: 50, inCart:true},
//     {name: "glass", price: 1500, inCart:true},
//     {name:" ball", price: 250, inCart:false},
// ]

// const totalPrice = products.filter(product => product.inCart).map(product => product.price * 0.9).reduce((sum,productVal) => sum + productVal)
// console.log(`the total price of the goods added to cart after to removing the discount of 10%: ${totalPrice}`);


// const goods = [
//     {name: "laptop", price: 200, inStock:true},
//     {name: "bag", price: 400, inStock:false},
//     {name: "phone", price: 400, inStock:true},
//     {name: "charger", price: 50, inStock:true},
//     {name: "glass", price: 150, inStock:true},
//     {name: "ball", price: 250, inStock:false},
// ]

// const totalStock = goods.filter(good => good.inStock).map(good => good.price * 0.85).map(good => good * 1.05).reduce((sum,goodVal) =>  sum + goodVal)
// console.log(totalStock );


// Array Question:
//  Given an array of user objects with properties { name, age, role, isActive }, write a function that:
// Filters out inactive users,
// Groups the remaining users by their role,
// Returns an object where each key is a role and the value is an array of user names in alphabetical order.

const users = [
  { name: "Alice", age: 25, role: "admin", isActive: true },
  { name: "Bob", age: 30, role: "editor", isActive: false },
  { name: "Charlie", age: 22, role: "admin", isActive: true },
  { name: "David", age: 28, role: "editor", isActive: true },
  { name: "Eve", age: 35, role: "viewer", isActive: true }
];
 const groupActive = users => Object.fromEntries(Object.entries(users.filter(u => u.isActive).reduce((acc, { name, role }) => ((acc[role] = acc[role] || []).push(name), acc), {})).map(([role, names]) => [role, names.sort()]));
console.log(groupActive(users));


const group = users.filter(user => user.isActive)