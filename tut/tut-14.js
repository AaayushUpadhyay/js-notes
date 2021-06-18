/* 
two types of selectors:
1. single element selector
2. multiple element selector
*/ 
// single element selectors:-

// console.log('Welcome to tut 14');
// element= document.getElementById('first');
// element=element.parentNode;
// element=element.childNodes;
// element.style.color='red';
//  element.innerText='Ayush is a good boy.';
//  element.innerHtml='<b>Ayush is a good boy.</b>';
//  element.innerText='Ayush is a good boy.';

// Query selectors:-
// let sel = document.querySelector('#first');
// sel = document.querySelector('.child');//agar kai div's ki classes 'child' hai toh sirf pehla element jiski class div hai woh milega.
// sel.style.color='green';
// console.log(sel);


// Multiple element selectors:-

let eles= document.getElementsByClassName('child');
// console.log(eles);

// if you want to accces individual element use indexing;
// console.log(eles[2]);

// if you want to see all the elemnts:-
// Array.from(eles).forEach(function(element){
//     console.log(element);
// });

