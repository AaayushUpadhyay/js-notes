console.log('Welcome to tut-57');

// Maps- we can use any datatype for keys and values.

let myMap = new Map();
let key1='mystr',key2='myobj',key3='myfun';
myMap.set(key1,'this is a string');
myMap.set(key2,{});
myMap.set(key3,function(){});
// console.log(myMap);
// console.log(Array.from(myMap));

for ([key,value] of myMap) {
    // console.log(key,value);
    
}

myMap.forEach((value,key)=>{
 console.log(key,value);
 
 
});