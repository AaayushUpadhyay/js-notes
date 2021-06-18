console.log('welcome to d and d');

let imgBox = document.querySelector('.imgbox');
let whiteBoxes = document.getElementsByClassName('whitebox');
// event listeners for imgbox.
imgBox.addEventListener('dragstart',(e)=>{
    console.log('dragstart');
    e.target.className += " hold";// adding class hold to imgbox
    setTimeout(()=>{
        e.target.className = "hide";

    },0);// when 0 is used then settimeout wala funtion sabse last mei run hoga.
    
});

imgBox.addEventListener('dragend',(e)=>{
    console.log('dragend');
    e.target.className = 'imgbox';
    
});

for (whitebox of whiteBoxes){
    whitebox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log('dragover');
        
    });
    whitebox.addEventListener('dragenter',(e)=>{
        console.log('dragenter');
       
            e.target.className += " hold1";
        
        
    });
    
    whitebox.addEventListener('dragleave',(e)=>{
        e.target.className = "whitebox";
        
        
    });
    whitebox.addEventListener('drop',(e)=>{
        console.log(e.target);
        e.target.append(imgBox);
        e.target.className = "whitebox";
        
    });
    
}
