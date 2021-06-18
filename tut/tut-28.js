console.log('Welcome to tut 28');

// object prototype

let obj={
    name:"Harry"
}
console.log(obj);
/* javascript mei koi bhi object jo hum banate hai usko javascript 'Object' constructor ki help se create karta hai.YEH CONSTRUCTOR KUCH PREDEFINED FUNCTIONS HUMARE OBJECTS KO DETA HAI.isi pre defined template ko hum prototype kehte hai. */


function name(x){
    this.myName=x;
}

let obj1= new name('ayush');
name.prototype.getName = function(){
    return this.myName;
}
name.prototype.setName = function(n){
    this.myName=n;
}
console.log(obj1);

// never change the prototype of 'Object' constructor.

// Prototypes are old now we ave es6 classes.