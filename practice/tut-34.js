console.log("Welcome to Asynchronous Programming");

setTimeout(() => {
    for (let index = 0; index < 4000; index++) {
        const element =index;
        console.log("This is index number"+index);
        
        
    }
}, 10000);
console.log("Done printing");
