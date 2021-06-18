console.log("Welcome to Asynchronous programming");

let fetchBtn=document.getElementById("fetchBtn");

fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler() {

    console.log("You clicked the button");

    const xhr= new XMLHttpRequest();

    //open the object
    xhr.open('GET','https://gorest.co.in/public-api/posts',true);
    xhr.onprogress=function(){
       let elem=document.getElementById('show');
       elem.innerHTML=` <div class="spinner-border mx-2 my-4" role="status">
       <span class="sr-only">Loading...</span>
     </div>`;

        
    }
    xhr.onload=function() {
        if (this.status === 200) {
            let elem=document.getElementById('show');
        let html="";
        let a=JSON.parse(this.response).data;
        console.log(a);
        
        for (const key in a) {
            html=html+`<li class="list-group-item">${a[key].title} ${a[key].employee_age}</li>`;
            
        }
        elem.innerHTML=html;
        }

        else
        {
            let elem=document.getElementById('abc');
            elem.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong>Some thing is wrong !.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`;

        }
        
        
        
        
        
    }
    
    xhr.send();
    
    
}

var myform=document.getElementById('myform');
myform.addEventListener('submit',formHandler);

function formHandler(e) {
  e.preventDefault();
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var gender=document.getElementById('gender').value;
  e.target.reset();
  const xhr= new XMLHttpRequest();
  xhr.open('GET','https://gorest.co.in/public-api/users/',true);
  xhr.getResponseHeader('Content-type','application/json');
 xhr.onload=function () {
   console.log("done");
   
 }
 mydata=`{"name":${name},"email":${email},"gender":"${gender}"}`;
 xhr.send(mydata)
  console.log(mydata);
  
}
