console.log('Welcome to tut 44');
// error handling in javascript
// throwing a custom error.
// let a = undefined;
// if (a!=undefined){
//     console.log("No error");
// }
// else{

//     throw new Error("error occured");
// }

try {
   
        console.log("we are inside try block");
        fx();
   
} catch (error) {
    console.log('error occured');// apna khud ka error message
    console.log(error);// system generated error
    console.log(error.message);
    console.log(error.name);
    
    
}
finally{
    console.log("error aye ya nhi finally execute hoga");
}