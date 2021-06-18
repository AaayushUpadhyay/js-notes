x='www';
console.log('project-3');


const key=' nNhaVBtw0JjSG12QGolNx6GJa9AK4XtK';
let mydiv=document.querySelector('.accordion');
let html="";

const xhr = new XMLHttpRequest();

xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5132d68441ef441bbfb18fd3eb2eb28c`,true);

xhr.onload=function(){
    if(this.status===200){
        articles=JSON.parse(this.response).articles;
        console.log(articles[0]);
        articles.forEach(function(article,index) {
            html +=`<div class="card"><!--fromhere-->
        <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              ${article.title}
            </button>
          </h2>
        </div>
    
        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample">
          <div class="card-body">
              <div class="row">
          <div class="col-lg-4">
              <img class="img-fluid" src=${article.urlToImage}></img>
          </div>
          <div class="col-lg-8"><p>${article.description}<a style="text-decoration: n${index};" target="_blank" href=${article.url}>Read More</a></p>
          </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <!-- till here -->`
            
        });
        mydiv.innerHTML=html;
        
    }
}




xhr.send();