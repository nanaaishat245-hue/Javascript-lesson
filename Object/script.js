// Object method 
const cohorts = {
    name : "segun",
    age : 92,
    gender: "male"
}

// object.keys - is used to retrieve keys from an object (property named), it return an array of the object key
console.log(Object.keys(cohorts));


// Object.Values - is used to retrive an object and returns an array of the value from the object.
console.log(Object.values(cohorts));


// object.entries - used to retrive key and value pairs in an object , it retuns each and value pair odf an object in an array
console.log(Object.entries(cohorts));

// object.fromEntries - used to form an object from the key and value pair, it returns an object from an array of key and value pair array.

const entries = [["id" ,1], ["name", "segun"]]
console.log(Object.fromEntries(entries))

// object.assign - is used to assign the property of one object to the
//  other it is argued by the object that is to receive the property 
// followed by the object that gives out its property.

const basit = {
    name : "segun",
    gender: "male"
}
const age = {
    age: 50
}
Object.assign(basit, age)
console.log(basit);


// object.freeze -prevent ADDING, removng or changing properties of an objects.

let Car= {
    brand: "toyota"
}
Object.freeze(Car)
Car.brand = "BENZ"
console.log(Car);


// object.seal - prevent ADDING, removng but allows changing properties of an objects.

let dlt= {
    address: "pegamut"
}
Object.seal(dlt)
dlt.members = 100
dlt.address = "not pegamut"
console.log(dlt);



// object.create - allows to create a new object with the giving prototype 
let animal = {eats: true} // prototype 

let dog = Object.create(animal)
dog.bark = true
console.log(dog.eats);


// object.hasOwn check if an object owns a property,
// it is argurd with the object followed by the property in search of

let book = {title: "js Guide"} 
console.log(Object.hasOwn(book, "title"));
console.log(Object.hasOwn(book, "page"));


// object.getOwnPropertyNames-RETURN all property name of an object and return them in an array

let anate ={
    age: 6,
    name: "anate",
    gender: "male"
}
console.log(Object.getOwnPropertyNames(anate));



// object.getOwnPeopertySymbols -  returns an array of all symbol properties found directly on an object.

let secret = Symbol("secret");
let obj = {
  name: "Bob",
  [secret]: "hidden value"
};

console.log(Object.keys(obj));             
console.log(Object.getOwnPropertySymbols(obj)); 


// Object.getPrototypeOf(obj)  - returns the prototype (also called the “parent”) of the given object.


class Cars {
  drive() {
    console.log("Driving...");
  }
}

let myCar = new Cars();

console.log(Object.getPrototypeOf(myCar)); 
console.log(Object.getPrototypeOf(myCar) === Cars.prototype);


// Object.defineProperty(obj, key, descriptor)  _ Adds a new property to an object or changes an existing one, with fine control over how it behaves (for example, whether it can be changed, listed, or redefined).

let person = {};

Object.defineProperty(person, "name", {
  value: "Alice",
  writable: false,    
  enumerable: true,    
  configurable: false 
});

console.log(person.name); 

person.name = "Bob";
console.log(person.name);



// Object.fromEntries(iterable)  - converts a list of key–value pairs (an iterable like an array or Map) into an object.
// It’s basically the opposite of Object.entries().


let map = new Map([
  ["brand", "Toyota"],
  ["model", "Corolla"],
  ["year", 2022]
]);

let car = Object.fromEntries(map);

console.log(car);

 
// Object.is(a, b)   - compares two values to see if they are the same value.

function areSame(a, b) {
  if (Object.is(a, b)) {
    console.log("They are the same value!");
  } else {
    console.log("They are different values!");
  }
}

areSame(NaN, NaN);   
areSame(+0, -0);



// Object.isFrozen(obj)  checks whether an object is frozen

let card = { brand: "Toyota", year: 2022 };

Object.freeze(card);

console.log(Object.isFrozen(car)); 

card.year = 2023;  
card.color = "red"; 
delete card.brand;
console.log(card);


// Object.isSealed(obj)  checks if an object is sealed

let phone = { model: "iPhone", price: 1000 };

Object.seal(phone);
console.log(Object.isFrozen(phone)); 
console.log(Object.isSealed(phone)); 

phone.price = 900;


// Object.isExtensible(obj)  checks if new properties can be added to the given object.

let item = { name: "Phone" };

Object.seal(item);
console.log(Object.isExtensible(item)); // false

Object.freeze(item);
console.log(Object.isExtensible(item)); // false


