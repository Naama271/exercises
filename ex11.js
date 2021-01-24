//ex 11

const input = require(`readline-sync`);

let str = input.question("palindrome?");

//console.log(str);

function Palindrome(str) {

    
    let strlen = str.length;
   // console.log(strlen);

    for (var i = 0; i < strlen / 2; i++) {

       // console.log(str[i]);
       //palindrome esffse
       // e (0) e (5)
       // s (1) s (4)

        if (str[i] !== str[strlen - 1 - i]) {
            console.log('It is not a palindrome');
       break;
    }else{
        console.log('It is a palindrome');
        break;
        }
    }
    
}
Palindrome(str);