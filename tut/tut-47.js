console.log('Welcome to tut-47');

let s = 'harry is harry';
let regex = /harry/;
// some metacharacters
regex = /^f/;// start of line
regex = /y$/;// end of line
regex = /h.rry/;// . matlab us jagah koi bhi ek character a sakta hai.(there must be a character for match to happen)
regex = /h*rry/;// zero or any no of characters .
regex = /h\*rry/;// if we want to match star.
regex = /ha?rry/; // ? ke pehle ka character optional hai.lekin uski jagaah koi aur character nhi ho sakta. agar humari string 'hxrry is harry' hai toh 'harry' match ho jayega.Matlab 'ha?rry' by default 'harry' match karega agar harry nhi milta tbb woh doosre alternatives dudhega.
if(regex.test(s))
{
    console.log(regex.exec(s));
    console.log('match found');
    
    
    
}
else{
    console.log(regex.exec(s));
    console.log('match not found');
    
}

