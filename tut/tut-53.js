console.log('Welcome to tut-53');
// Generators

function* mygen(){
   
    
    
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let x = mygen();// mygen function returns a generator.
console.log(x.next());//jab tkk saari values nhi generate ho jati tbb tkk done: false else done: true.
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
