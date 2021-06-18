console.log("More on JS Events");
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
let elem=document.querySelector('.container');
elem.addEventListener('mousemove',func2);

function func1(e) {
    console.log("You clicked",e);
    // form ki default property hoti hai ki form submit hone pe page refresh ho jata hai to prevent this,
    e.preventDefault();
    
}

function func2(e) {
  document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},20)`;
    
}