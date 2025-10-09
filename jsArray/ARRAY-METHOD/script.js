// mutating method :is used to modify the original array
// non mutating method : wii not modify the original array but will create a new array instead



//1. Array-push (el) : used to add an element to the end of array

const fruits = ["Apple", "Orange", "Banana", "Apple" ]
console.log(fruits);
fruits.push('pineapple')
console.log(fruits);


// 2. array-pop ()- used to remove the last element of an array

fruits.pop()
console.log(fruits);

//3. ARRay-unshift (el) used to add an element to the beginning of an array

fruits.unshift('pineapple')
console.log(fruits);
 
//4. ARRay-shift (el) used to remove the first  element of  an array

fruits.shift()
console.log(fruits);

// 5.ARRAY-SPLICE : (start, delete , ...items) used to add or remove element anywhere in an array

fruits.splice(1, 2, 'pineapple')
console.log(fruits);



// (B) . Accessing / combining elements

const num = [1,2,3]
const ber= [4,5,6]
const even= [2,4,6,8]


// 1. array.concat() - used to join two or more arrays.

const ans = num.concat(ber, even)
console.log(ans);

// ARRAY.slice(start, end ) - used to copy a portion of an array.

const slicedArr = ans.slice(3, 5)
console.log(slicedArr);

// ARRAY.at (INDEX) IS USED TO GET ELEMENT BY INDEX

const arrAt = ans.at(2)
console.log(arrAt);


// (C). searching elements


// 1. array.indexOf(value) used to get first index of value 
const strings = ['rice', 'oil', 'garri', 'milk', 'beans' ]


const index= strings.indexOf('garri')
console.log(index);

// 2.array.LastIndexOf(value) is used to get the last index of value

const LastIndex = strings.lastIndexOf('beans')
console.log(LastIndex);

// 3. array.include(value) used to check if a value exists in an array

const include = strings.includes('garri')
console.log(include);

// 4. array.find(callback)- is used to find the first matching element in an array

const numbers = [1, 2, 4, 7, 2 ,5, 3]
 
const find = numbers.find(num => num > 2)
console.log(find);

//5. array.findLastIndexOf (callaback)

const findIndex = numbers.findIndex(num => num > 5)
console.log(findIndex);

// (D.)Transforming element
 
const numberArry = [1, 2, 3, 4]

const mappedArr = numberArry.map((num) => (num * 2))
console.log(mappedArr);


const users = [
    {name: 'aishat', age : 20, isStudent:true},
    {name: 'basit', age : 20, isStudent:true},
    {name: 'segun', age : 20, isStudent:true},
]
 const mappedusers = users.map(user => {
    return user
 })
console.log(mappedusers);

// 2. array.filter(callback) - create a new array of element that passes the condition.

const filterArr = users.filter(user =>{
    return user.name === 'segun'
})
console.log(filterArr);


// 3. arr.reduce(callback, initialvalue) - used to accumulate all values to a single value (non-mutating)

const nums = [10, 20, 30, 40, 50]
const reduceArr = nums.reduce((num,val) => num + val, 0)
console.log(reduceArr);


// 4.array.flat(depth) used to flatter nested array(non-mutating)

const myArr = [1, 2,[3, [4, [5,6],7]]]

console.log(myArr);

const nestedArr = myArr.flat(3)
console.log(nestedArr);

// (E.) sorting/reversing element

// 1. array-sort(compareFn)- used to sort element in ascending or descending order(mutable)


const myNum = [4, 6, 2, 7, 8, 3, 4, 1, 5, 6]
myNum.sort((start, end) => end-start)
console.log(myNum);

//2. ARRay.reverse() - used to reverse element of an array (mutable)

myNum.reverse()
console.log(myNum);


// (F). Iterating helper
// 1. Array foreach(callback) - executes a function once for each element(non- mutating)

const helpNUM = [1, 2, 3, 4]
helpNUM.forEach(num => {
    console.log(num * 2);
})

//2. Array.some(callback) - returns true if at least one element satisfied the condition (non-mutating)


const hasEven = helpNUM.some(even => even % 2===0)
console.log(hasEven);


// 3. Array.every (callback)- only return true if every element satisfied the condition

const hasOdd = helpNUM.every(num => num > 2)
console.log(hasOdd);


// (G). converting elements

// array.join(seperator) - convert all element of an array into a string, separate by a specific delimeter(non mutating)

const colors =['blue', 'black', 'white','red']
const joinArr = colors.join(" ")
console.log(joinArr);

// 2.Array.tostring()- convert element of an array to string

const strArr = colors.toString()
console.log(strArr);