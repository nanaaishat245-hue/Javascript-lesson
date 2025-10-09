// stringe is a sequences of character enclose in quote
// A string is a linear sequence of symbols or characters, most commonly used to represent text in computer programming and linguistics.


let name = "DLT Africa"
let mission = 'innovating through web3'
let message = `Welcome to ${name}!` //templateLiteral  OR  backticks 
console.log(message,mission);

// stringe properties 
// lenght
let word = "DLT Africa"
console.log(word.length);

// COMMON STRING METHOD 
// toUppercase() and  toLowerCase(

let lang = "Javascript"
console.log(lang.toLowerCase());
console.log(lang.toUpperCase());

// trim() method is used to remove whitespace characters from both ends (leading and trailing) of a string.

// trim(), trimStart(), trimEnd()


let msg =" DLT Africa"
console.log(msg.trim());
console.log(msg.trimStart());
console.log(msg.trimEnd());

// The includes() method in JavaScript is used to determine whether a string contains a specific value.

let text = "Welcome to DLT africa"
console.log(text.includes("DLT"));
console.log(text.includes("crossFi"));

// The startsWith() and endswith method in JavaScript is a built-in string method that determines whether a string begins or end with the characters of a specified string. 


let school ="DLT Africa Academy"
console.log(school.startsWith("DLT"));
console.log(school.endsWith("Africa"));



//  the indexOf() method is a function used to find the index of the first occurrence of a specified value within a string. 

let phrase = "We Love Africa and Africa love us "
console.log(phrase.indexOf("Africa"));
console.log(phrase.lastIndexOf("Africa"));


// the slice() method is used to extract a portion of a string and return it as a new entity, without modifying the original.

let topic = "Javascript Masterclass"
console.log(topic.slice(0, 10));
console.log(topic.slice( -10));


// substring (start, end)
let course = "Frontend developer"

console.log(course.substring(0, 8));

// replace () and replaceAll

let texts =" We love DLT. DLT is the best"
console.log(texts.replace("DLT", "CROSSFI"));
console.log(texts.replaceAll("DLT","crossfi")); 

// SPLIT
let sentence = "welcome guys"
let words = sentence.split(" ")
console.log(words);


// concat()
let a = "DLT"
let b = " Africa"
console.log(a.concat(b));

// chartAT
let example = "DLT"
console.log(example.charAt(1));

//write a programming that take a sentences from the user count how many words it has  CONVERT IT TO UPPER and replACE JAVASCRIPT TO JS

// let letter = "DLT  africa Javascript "
 
// let alpha = letter.split(" ")

// console.log(letter.length);
// console.log(letter.toUpperCase());
// console.log(letter.replaceAll("Javascript", "js"));



let sentences = prompt("Enter a sentence")
let term = sentences.trim().split("")
let wordCount = term.length
let UpperCase = sentences.toLowerCase()
let replaceSentence = UpperCase.replaceAll("Javascript", "js")
console.log(`word count: ${wordCount}`);
console.log(`modified sentences: ${replaceSentence}`);

