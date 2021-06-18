console.log("Javascript Events");
heading=document.getElementById('heading');
heading.addEventListener('mouseover',function (event) {
    let variable;
    variable=event.target;
    variable=event.target.id;
    variable=Array.from(event.target.classList);
    variable=event.offsetX;// element ke comparison mei kaha click kiya
    variable=event.clientX;// browser Window ke comparison mei kaha click kiya
    console.log('You have clicked the heading.');
    console.log(event);
    console.log(variable);
    
    
    
});