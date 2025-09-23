let challenge = '30 Days Of JavaScript';

console.log("Hello, World!");

//3. lenght
let challenges = "30 Days Of JavaScript";
console.log(challenges.length);

//4. uppercase
let string = 'javascript'
console.log(string .toUpperCase() )


//5.lowercase
let strings = 'javascript'
console.log(strings .toLowerCase() )


//6.substring
let subs = 'JavaScript'
console.log(subs.substring(0,4))

//7. slice
let challenged = "30 Days Of JavaScript";
let sliced = challenged.slice(3); 
console.log(sliced);


//8.includes
let include = "30 Days Of JavaScript";
console.log(include.includes("Script"));

// 9.split
let hash = "helllo world"
console.log(hash.split())
console.log(hash.split(' '))

// 10.
let array = '30 Days Of JavaScript'
console.log(array.split())    
console.log(array.split(' '))

// 11.split(comma)
let websites = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companyArray = websites.split(', ');
console.log(companyArray);

// 12.replace
let replace = '30 Days Of JavaScript'
console.log(replace.replace('JavaScript', 'Python')) 

// 13.
let challeng = "30 Days Of JavaScript";
console.log(challeng.charAt(15));

// 14
let challen = "30 Days Of JavaScript";
console.log(challen.charAt('J'));


//15.indexOf
let index = "30 Days Of JavaScript";
console.log(index.indexOf('a'));


// 16.lastindexof
let last = "30 Days Of JavaScript";
console.log(last.lastIndexOf('a'));


// 17.indexxof
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

// 18.lastindexxof
let sentences = "You cannot end a sentence with because because because is a conjunction";
console.log(sentences.lastIndexOf("because"));


// 19.search
let search = "You cannot end a sentence with because because because is a conjunction'";
console.log(search .search ('because'))

// 20.trim
let cased = "  30 Days Of JavaScript  ";
let trimmed = cased.trim();
console.log(trimmed);


// 21.
let stringe  = "30 Days Of JavaScript"
console.log(stringe .startsWith('30'))


// 22.endwith
let stringes  = "30 Days Of JavaScript"
console.log(stringe .endsWith('Script'))


// 23.match
let challe= "30 Days Of JavaScript";
let matches = challe.match(/a/g);
console.log(matches);


// 24.concat
let part1 = "30 Days Of";
let part2 = " JavaScript";
let merged = part1.concat(part2);
console.log(merged);


// 25.
let challengeds = '30 Days Of JavaScript';
console.log(challengeds.repeat(2));



// Second exercise

// 1.
let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(quote);
 
// 2.
let print = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(print)

// 3.
let num = '10';
console.log(num ==10);

// 4.
let nums = parseFloat('9.8');
let rounded = Math.round(nums);
console.log(rounded === 10); 


// 5.
let word1 = 'python';
let word2 = 'jargon';

console.log(word1.includes('on')); 
console.log(word2.includes('on')); 

// 6.
let statement = "I hope this course is not full of jargon.";
console.log(statement.includes("jargon")); 


// 7.
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);






// third part

let word = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

let count = (word.match(/love/gi)).length;
console.log(count); // 3

