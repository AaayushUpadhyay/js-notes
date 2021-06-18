console.log('Welcome to tut 46');

// Regular Expression

let re = /ayush/;// this is regular expression literal in js.
// re = /ayush/g;// if we use g flag then global search is performed.
// re = /ayush/i;// i matlab case-insensitive.
// Regular expression functions
let s = "My name is ayush. My full name is ayush upadhyay."
// s = "My name is aYush. My full name is AyUsh upadhyay."
// 1. exec() - this function returns an Array if a match is found or returns null if no match is found.
/*
let result = re.exec(s);
console.log(result);
// ["ayush", index: 11, input: "My name is ayush. My full name is ayush upadhyay.", groups: undefined]
// when global search is performed.
let result1 = re.exec(s);
console.log(result1);
// ["ayush", index: 34, input: "My name is ayush. My full name is ayush upadhyay.", groups: undefined]
let result2 = re.exec(s);
console.log(result2);
// null.

// ["ayush", index: 11, input: "My name is ayush. My full name is ayush upadhyay.", groups: undefined].

// when i is used.
// result = ["aYush", index: 11, input: "My name is aYush. My full name is AyUsh upadhyay.", groups: undefined]*/

// 2. test() - returns true or false

// let result = re.test(s);
// console.log(result);

// 3. match()-it will return an array of results or null.

// let result = s.match(re);
// console.log(result);

// // when i is used then
// re = /ayush/i;
// console.log("My name is ayUsh. My full name is ayush upadhyay".match(re));

// when i is used then
// re = /ayush/g;
// console.log("My name is ayush. My full name is ayush upadhyay".match(re));

// now we will get an array (2) ["ayush", "ayush"] becoz there are 2 ayush

// 4. search()- return index of first match else -1.

// let result = s.search(re);
// console.log(result);

// 5. replace()- to replace a part of a string with another string

s.replace('subham','ayush')
console.log(s);


