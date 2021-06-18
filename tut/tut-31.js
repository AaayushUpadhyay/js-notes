console.log('Welcome to tut 31');

// inheritance using prototypes


// Modern ES6 Classes

class Employee {
    constructor(name, experience) {
        this.employeeName = name;
        this.employeeExperience = experience;
    }

    slogan() {
        return 'my company is the best';
        
    }


}
let obj = new Employee('Ayush',23);
// console.log(obj);

// class Programmer{
//     constructor(language,hobby){
//         this.language=language;
//         this.hobby=hobby;
//     }
// }


// let obj1= new Programmer('python','singing');

// console.log(obj1);

class Programmer extends Employee{
    constructor(name,experience,language){
        super(name,experience);// super keyword will execute the constructor of Employee class.
        this.language=language;
    }
    static add(a,b){//static function ko use karne ke liye class ka object nhi banana padta hai seedha likho jobhiclassnamehai.add(value1,value2s)
        return a+b;
    }
}

let pro= new Programmer('ayush',3,'python');
 console.log(pro)