console.log('Welcome to tut-43');

// asyn and await.
// if we use async and await with fetch api then we dont need o write 2 .then
async function ayush(){// async function returns a promise.
    console.log("inside ayush function")
   const response= await fetch('https://api.github.com/users');
   console.log('before response');
   const users = await response.json();
   console.log('users resolved');
   return users;// return karne pe async wali promise resolve ho jati hai.
}
console.log("before calling ayush");
let a=ayush();
console.log("after calling ayush");
console.log(a);
a.then(data=>console.log(data))
console.log("end of js file");

/*flow of the function 
sabse pehle "before calling ayush" print hoga
phir control function ke andar jayega aur "inside ayush function" print hoga.
jaise hi use await mila control baki ke kaam niptayega aur background mei await apna kaam karta rahega.
isliye ab "after calling ayush" print hoga.
phir console.log(a) hua hai lekin abhi kyunki promise resolve nhi hui hai isliye 
Promise {<pending>} dikhayega.
uske baad "end of js file" print hoga.
ab jab control ne saare baki ke kaam nipta diye tab wapas await ke pass ayega.
phir "before response" print hoga aur phir  doosra wala await ayega contorl phir jayega baki ke kaam niptane lekin ab koi kaam hai nhi toh phir "users resolved" print hoga.

phir a.then se console.log(data) ho jayega



*/