const input = require(`readline-sync`);

let str = input.question("Write the string and get the longest word:");

var regExp = /[0-9!@#$%^&*()_+\-=[{};':",.<>]+/g; 

if(regExp.test(str)){
 throw 'contain numbers or symbols'; 
} 

longWord(str);

    len = str.split(' ').length;

function longWord(str) { 
    var split = str.split(' ');
    var largest = split[0].length;
    largest = 0;

     for (var i = 0; i < split.length ; i++) {
       // console.log(largest);

        if (largest < split[i].length){
           largest = split[i].length;
           longest = split[i];
            
        }
     }
     console.log(longest);

    }
