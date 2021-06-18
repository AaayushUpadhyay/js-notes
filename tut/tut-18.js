console.log('Welcome to tut 18');
// document.getElementById('heading').addEventListener('click',fun1);/this event is fired after the mouse is clicked and then released.
// document.getElementById('heading').addEventListener('mousedown',fun2);/ this event is fired when the button is just clicked i.e button is not yet released after clicking.
// function fun1(e){
//     console.log('you fired click event');
// };
// function fun2(e){
//     console.log('you fired mousedown event ');
// };

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('mouseenter');
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('mouseleave');
// })

document.getElementById('btn').addEventListener('click',function(e){
    console.log('clicked');
    e.preventDefault();
})