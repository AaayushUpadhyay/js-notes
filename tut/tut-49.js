console.log('Welcome to tut-49');

let regex = /\w/;// word character - _or alphanmeric
regex = /\w+/; // one or more than one word characters
regex = /\W/; // non-word character such as @,' ',$ etc.
regex = /\W+/; // one or more than one non word characters
regex = /\d/; // digit
regex = /\d+/;// one or more digit
regex = /\D/; // non-digit
regex = /\D+/; // one or more non-digit
regex = /\s/; //  whitespace character 
regex = /\s+/;// one or more whitespace characters
regex = /\S/; // non-whitespace character
regex = /\S+/; // one or more non-whitespace characters
regex = /1r2r\b/; // \b ke pehle jo word likha hai woh match hoga agar uske baad koi space aya tbb bhi same result ayega lekin koi character aya toh match nhi hoga.
str = "harhar1r2r4@$%6r";


if(regex.test(str))
{
    console.log(regex.exec(str));
    console.log('match found');
    
    
    
}
else{
    console.log(regex.exec(str));
    console.log('match not found');
    
}
