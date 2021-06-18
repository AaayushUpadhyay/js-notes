console.log('Welcome to project 2');
let books = localStorage.getItem('books');
        let booksObj;
    if (books == null) {
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books);
    }


class Book{
    constructor(name,author,genre){

        this.name=name;
        this.author=author;
        this.genre=genre;
    }
    static delete(i){
        let books = localStorage.getItem('books');
        let booksObj;
    if (books == null) {
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books);
    }
    if (i==0){
        booksObj.splice(i,1);
    }
booksObj.splice(i+1,1);


    localStorage.setItem('books',JSON.stringify(booksObj));
    Display.show(booksObj);

    }
    
    
}
class Display{
    static clear(){
        let elem=document.getElementById('bookform');
        elem.reset();

    }
    static show(list){
        let html="";
        list.forEach(function(obj,index) {
            html +=` <tr class="mytr">
            <th scope="row">${index+1}</th>
            <td id="td1">${obj.name}</td>
            <td id="td2">${obj.author}</td>
            <td id="td3">${obj.genre}</td>
            <td><button type="button" class="btn btn-danger id="${index}" onclick="Book.delete(this.id)">Delete</button></td>
          </tr>`;
          console.log(index);

            
        });
        
       document.getElementById('mybody').innerHTML=html;
    }
    

  
}

Display.show(booksObj);
let bookform=document.getElementById('bookform');
bookform.addEventListener('submit',function submit(e){
    e.preventDefault();
    bookName=document.getElementById('book').value ;
    authorName=document.getElementById('author').value;
    fiction=document.getElementById('fiction');
    cooking=document.getElementById('cooking');
    programming=document.getElementById('programming');
    let genre;
    if (fiction.checked){
        genre=fiction.value;
    }
    else if (cooking.checked){
        genre=cooking.value;
    }
    else if (programming.checked){
        genre=programming.value;
    }
    if (bookName!=null && authorName!=null && genre!=null){
    let book= new Book(bookName,authorName,genre);
    let books = localStorage.getItem('books');
    if (books == null) {
        bookObj = [];
    }
    else {
        bookObj = JSON.parse(books);
    }
    bookObj.push(book);
    localStorage.setItem('books', JSON.stringify(bookObj));
   Display.clear();
   Display.show(bookObj);

    console.log(book);
}
});


b=document.getElementById('search');
b.addEventListener('input',function(e){
    let a=document.querySelectorAll('.mytr');
    Array.from(a).forEach(function(element){
        d=element.innerText;
        if(d.includes(b.value)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        

    });
   

})