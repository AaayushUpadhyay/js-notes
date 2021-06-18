console.log('Welcome to tut 56');

let arr = ['mango','banana','pear','apple'];
// console.log(arr);


// Traditional for loop
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
    
// }

let obj = {
    name :"Ayush",
    language :"python",
    hobby :"ML"
}
// console.log(obj);

// // iterating an Object

// for (let index = 0; index < Object.values(obj).length; index++) {
//     const element = Object.values(obj)[index];
//     console.log(element);
    
    
// }
// FOR IN TAB USE KARENGE JAB HUME KISI ITERABLE(string,array,object) KI KEYS KO LENA HAI
for (const key in obj) {
    
        const element = obj[key];
        console.log(element);
        
        
    
}
for (let index in arr) {
    
        console.log(arr[index]);
        
        
    
}
// FOR OF TAB USE KARENGE JAB HUME KISI ITERABLE(string,array,object) KI VALUES KO LENA HAI

for (let fruit of arr) {
    console.log(fruit);
    
    
}


for (let value of Object.values(obj)) {

    console.log(value);
    
    
}