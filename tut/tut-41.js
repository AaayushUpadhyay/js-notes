console.log('Welcome to tut-41');

// const fun = ()=>{   // arrow function.
//     console.log('yess');
// }

// fun();/* this function is same as  const fun = function sample(){
//     console.log('yess);
// }*/

/* Arrow functions can also be used to write one liners.When writing one liners we dont need to write braces or return
const greet = ()=>console.log('yess');
greet();// we don't need to put braces.
const greet = ()=>'yess';
console.log(greet);//we dont need to write return*/

// returning object through one-liners.


// const greet = ()=>({'name':"harry"});

// console.log(greet());


// when giving one-parameter parentheses is not required.

greet = name=> 'good morning ' +name;

console.log(greet("ayush"));

// but when giving more than one-argument parnthesis is required.

greet = (name,age)=> 'good morning '+name+' '+age;

console.log(greet("ayush",13));