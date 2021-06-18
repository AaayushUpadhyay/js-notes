console.log('Welcome to form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let no = document.getElementById('no');

console.log(name,email,no);

name.addEventListener('blur',(e)=>{
    let re = /^[a-zA-Z]([a-zA-Z0-9]){2,10}$/;
    
    let str = name.value;
    if (re.test(str)){
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        console.log('name matched');
        
    }
    else{
        name.classList.remove('is-valid');
        name.classList.add('is-invalid');
        console.log('wrong name');
        
    }
    
});


name.addEventListener('input',()=>{
    let re1= /is-valid/;
    let re2= /is-invalid/;
    let a=name.className;
     
    if (name.value==""){
        
        if (re1.test(a)){
            let result = re1.exec(a);
            console.log(result);
            name.classList.remove('is-valid');
            
            
            
        }
        else if (re2.test(a)){
            let result1=re2.exec(a);
            console.log(result1);
            name.classList.remove('is-invalid');
            
        }
        
    }
    
});

    



no.addEventListener('blur',(e)=>{
    console.log('no typed');
    let re = /([^0])([0-9]){9}$/;
    
    let str = no.value;
    if (re.test(str)){
        no.classList.remove('is-invalid');
        no.classList.add('is-valid');
        console.log('no matched');
        
    }
    else{
        no.classList.remove('is-valid');
        no.classList.add('is-invalid');
        console.log('wrong no');
        
    }
    
});
no.addEventListener('input',()=>{
    let re1= /is-valid/;
    let re2= /is-invalid/;
    let a=no.className;
     
    if (no.value==""){
        
        if (re1.test(a)){
            let result = re1.exec(a);
            console.log(result);
            no.classList.remove('is-valid');
            
            
            
        }
        else if (re2.test(a)){
            let result1=re2.exec(a);
            console.log(result1);
            no.classList.remove('is-invalid');
            
        }
        
    }
    
});


email.addEventListener('blur',(e)=>{
    console.log('email typed');
    let re = /^([a-zA-Z0-9]{3,7})@([a-zA-Z0-9]{5})\.([a-zA-Z]{2,7})$/;
    
    let str = email.value;
    if (re.test(str)){
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        console.log('email matched');
        
    }
    else{
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        console.log('wrong email');
        
    }
    
});
email.addEventListener('input',()=>{
    let re1= /is-valid/;
    let re2= /is-invalid/;
    let a=email.className;
     
    if (email.value==""){
        
        if (re1.test(a)){
            let result = re1.exec(a);
            console.log(result);
            email.classList.remove('is-valid');
            
            
            
        }
        else if (re2.test(a)){
            let result1=re2.exec(a);
            console.log(result1);
            email.classList.remove('is-invalid');
            
        }
        
    }
    
});