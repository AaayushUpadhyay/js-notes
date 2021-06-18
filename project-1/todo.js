// if user adds a note add it to localStorage,
display();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    display();

});

// displaying new notes to user.

function display() {
    let elem = document.getElementById('notes');
    let notes = localStorage.getItem('notes');
    let html = "";
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.forEach(function (content, index) {
        html += `<div class="card my-2 mx-2 note-card" style="width: 18rem;" >
        <div class="card-body">
        <h5 class="card-title">Note ${ index + 1}</h5>
        <p class="card-text">${ content}</p>
        <a onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete</a>
      </div>

        </div>`

    });
    if (notesObj.length != 0) {
        elem.innerHTML = html;

    }
    else{
        elem.innerHTML = 'No notes made.'
    }
}

// function to delete a node.

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    display();

}

// search function

let search=document.getElementById('sea');
search.addEventListener('input',function(){
    let input= search.value;
let notecards = document.getElementsByClassName('note-card');
Array.from(notecards).forEach(function(element){
  
    let noteTxt = element.getElementsByTagName("p")[0].innerText;
    if (noteTxt.includes(input)){
        element.style.display="block";
    }
    else
    {
        element.style.display="none";
    }

});


});