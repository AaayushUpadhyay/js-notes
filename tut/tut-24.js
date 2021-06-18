console.log('Welcome to tut 24');
// let today = new Date();//today's date and current time.
// today = new Date('04/13/2020');//mm-dd-yyyy format.
//  today = new Date('June 13 010 17:18:26');
// console.log(today);

a=new Date('04/13/1999');
console.log(a);
console.log(a.getDay());//0-sunday,1-monday and so on..
console.log(a.getDate());
console.log(a.getMinutes());
console.log(a.getHours());
console.log(a.getSeconds());
console.log(a.getTime());// timestamp- tota time in seconds form 1 jan 1970 till this moment.

console.log(a.getMilliseconds());
a.setDate(23);
a.setMinutes(24);
a.setSeconds(4);
a.setHours(2);
a.setFullYear(2099);
console.log(a);

