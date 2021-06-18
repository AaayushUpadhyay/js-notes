console.log('Welcome to ajax');

let fetchBtn=document.getElementById('fetchBtn');

fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('button clicked');
    // instantiate an xhr object.
    const xhr = new XMLHttpRequest();
// open the xhr object.
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);// state 2
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);// state 2
    // xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');//iska matlab ki humlog url mei hi apna data send kar rhe.
    // what to do on progress(optional)
    xhr.onprogress=function(){// state 3
        console.log('Work on progress.');
    };
    xhr.onreadystatechange=function(){
        console.log('current state '+xhr.readyState)

    };
    // what to do when response is ready.ONLOAD CAN BE USE FOR ADDING SPINNERS AND LOADERS.
    xhr.onload=function(){// onload function runs when state is 4.
        if(this.status===200){
            console.log(this.response);

        }
        else{
        console.log('some error occured.');
        }
       

    };
    // xhr.send({name="test"&salary="123"&age="23"});
    let params=`{"name":"test34343","salary":"123","age":"23"}`;
    xhr.send(params);// sending request.
    console.log('we are done.')
}

let popBtn=document.getElementById('popBtn');

popBtn.addEventListener('click',popHandler);
function popHandler(){
    console.log('button clicked');
    
    const xhr = new XMLHttpRequest();

    
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);// state 2
   
    xhr.onprogress=function(){// state 3
        console.log('Work on progress.');
    };
    xhr.onreadystatechange=function(){
        console.log('current state '+xhr.readyState)

    };

    xhr.onload=function(){
        if(this.status===200){
            console.log(JSON.parse(this.response));
            let list=document.getElementById('list');
            let objlist=JSON.parse(this.response).data;
            let str;
            for(key/*key always stores the index of array always.*/  in objlist){
            //    console.log(objlist[key].employee_name);
               str+=`<li>${objlist[key].employee_name}</li>`;


            }
            list.innerHTML=str;

        }
        else{
        console.log('some error occured.');
        }
       

    };
   
    
    xhr.send();
    console.log('we are done.')
}
