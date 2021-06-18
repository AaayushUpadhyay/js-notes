console.log('Welcome to tut-27');

// creating object

let obj = {
    name:'Aston Martin',
    topSpeed:160,
    run:function(){
        console.log(`${this.name} is running`);
    }

}
// console.log(obj);


// Creating a constructor


function Car(carname,speed){
    this.name=carname;
    this.carSpeed=speed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
}
let newCar= new Car('Aston',160);
console.log(newCar);


