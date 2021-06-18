console.log('Wecome to tut-42');

// Fetch API

let myBtn = document.getElementById('gbtn');

myBtn.addEventListener('click',getData);

// function getData(){
//     console.log('inside getData');
//     fetch("ayush.txt").then((response)=>{
//         console.log('inside first then');
//         return response.text();
//     }).then((data)=>{
//         console.log('inside second then');
//         console.log(data)
//     });
// }
// console.log('before calling getData');
// getData();
// console.log('after calling getData');

/*
pehle 'before calling getData' print hoga. phir
'inside getData' print hoga. Phir 'after calling getData' 
print hoga.Kyunki fetch is asynchronous.Isliye fetch background
mein apna kaam karega aur baaki age ka kaam hoga.
Phir 'inside first then' print hoga phir 'inside second then'
print hoga.Uske baad data show hoga.
 */

function getData(){
    let url="https://api.github.com/users"
    let params={
        method:'get',
        headers:{
            'Content-Type':'application/json'
        }

    }
    
    fetch(url,params).then((response)=>{
        
        return response.json();
    }).then((data)=>{
        
        console.log(data)
    });
}
function postData(){
    let url="http://dummy.restapiexample.com/api/v1/create";
    let data={"name":"test","salary":"123","age":"23"};
    let params={
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)

    }
    
    fetch(url,params).then((response)=>{
        
        return response.json();
    }).then((data)=>{
        
        console.log(data)
    });
}

 getData();
postData();
