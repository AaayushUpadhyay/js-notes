console.log('Welcome to tut-37');
// Callback is a functions that takes a function as a Input

let students = [
    {name:'Ayush',subject:'js'},
    {name:'Rohan',subject:'ML'}
];// pretend that this response is coming from server.

function enrollStudent(student){
    setTimeout(function(){
        students.push(student);
        console.log('sudent enrolled.')
        getStudents();

    },1000);
}
let html="";
function getStudents(){
   setTimeout(function(){
    let html="";
    let list=document.getElementById('list');
    students.forEach(function(student){
        html+=`<li>${student.name}-${student.subject}</li>`
        
    });
    list.innerHTML=html;
    

   },2000);
}
// enrollStudent({name:'Ankit',subject:'js'})