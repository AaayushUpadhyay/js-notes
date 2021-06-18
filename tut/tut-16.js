console.log('Welcome to tut 16')

// Creating elements.

let element=document.createElement('li');// creating an element.
element.className='childul';//adding class to inserted element.
element.id='newli';//adding id to inserted element.
// 2 ways to add text to the inserted element.
// method 1:
/*
element.innerText='this is an inserted li';
element.innerHTML='<b>this is an inserted li</b>';
let ul=document.querySelector('ul.this');
ul.appendChild(element);//appends at last position the new element.
*/

// method 2:-
/*
let tnode=document.createTextNode('this is an inserted element');
element.appendChild(tnode);
let ul=document.querySelector('ul.this');
ul.appendChild(element);
*/


// Replacing of an element;
/*
let tnode=document.createTextNode('this is an inserted li');
element.appendChild(tnode);
let ul=document.querySelector('ul.this');
ul.appendChild(element);
let nelem=document.createElement('h3');
let tnode1=document.createTextNode('this heading replaced the inserted li');
nelem.appendChild(tnode1);
element.replaceWith(nelem);//to replace an element.
console.log(nelem);
*/

// replacing using Replacechild
/*
let elem=document.createElement('h1');
elem.id='myelemid';
elem.className='myelemclass';
let tnode=document.createTextNode('this li was replaced using replacedChild');
elem.appendChild(tnode);
let original_li=document.getElementById('fli');
let ul=document.querySelector('ul.this');
ul.replaceChild(elem,original_li);

console.log(elem,original_li);
*/

// removing an element;
/*
let ul=document.querySelector('ul.this');
ul.removeChild(document.getElementById('Lli'));
*/

// adding,removing,creating,getting,checking the attribute of an element.
/*
let elem=document.createElement('h1');
console.log(elem)

elem.setAttribute('href','https://www.google.com');
a=elem.getAttribute('href');
a=elem.hasAttribute('href');//if the attribute exists then it returns true.
a=elem.hasAttribute('id');//if the attribute does'nt exist then it returns false.
elem.removeAttribute('href');
console.log(a);
*/