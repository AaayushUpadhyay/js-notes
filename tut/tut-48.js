console.log('Welcome to tut-48');
// Charcter sets.

let str = "harry Bhai";
let regex = /h[a-z]rry/;// can be any character from a-z.
regex = /h[^aty]rry/;// can be any character except a,t,y/
regex = /h[^aty]rr[xyz]/;
regex = /h[a-zA-Z]rr[0-9]/;// MULTIPLE CHARACTER SETS

// Quantifiers

regex = /har{2}y/; // r should exactly occur 2 times
regex = /har{0,2}y/; // r can occur minimum 0 times and maximum 2 times.


// Groupings
regex = /(har){2}/;
regex = /(har){2}([0-9]r){3}/;
str = "harhary";
str = "harhar1r2r6r";


if(regex.test(str))
{
    console.log(regex.exec(str));
    console.log('match found');
    
    
    
}
else{
    console.log(regex.exec(str));
    console.log('match not found');
    
}
