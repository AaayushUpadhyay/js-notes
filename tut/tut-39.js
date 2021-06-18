console.log('Welcome to tut 39');
// promises

function fun(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const error=false;
        if(!error){
            resolve('argument passed through resolve');//passing an argument in resolve and reject is not compulsory.
        }
        else{
            reject('argument passed through reject');
        }

        },2000);
    })
};

fun().then(function(args){
    console.log('resolve function runs then  :'+args)
}).catch(function(args){
    console.log('reject function runs catch  :'+args)
})