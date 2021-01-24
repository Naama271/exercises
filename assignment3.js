   
   var figlet = require('figlet');
     
    figlet('SINGHANG', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        
        console.log(data);
        
        }) ;


var words = ["beyonce", "LadyGaga", "Madonna", "eminem", "usher", "jayz", "cardiB"];
toUpper = function(x){ 
    return x.toUpperCase();
  };
  words = words.map(toUpper);
 // console.log(words);


const random = Math.floor(Math.random() * words.length);
var word = words[random];
//console.log(word);

var roundnumber = 10;
    
var str = word.replace(/[A-Za-z]/gi, '*');
var guessArr=[];

round(str);

function round(str){

    if (roundnumber === 0 ){
        console.log("no more rounds...");
      //  console.log("the singer is " + word);
        throw 'no more rounds...the singer was ' + word;
    }
    

console.log("you have "+ roundnumber + " rounds left");
console.log("the word is:"+ str);

/*
let wordGuessInput = input.question("guess the singer:");
wordGuessInput = wordGuessInput.toUpperCase();
wordInput(wordGuessInput);

function wordInput(){
    if (wordGuessInput == word) {
        console.log("your guess is right!");
        throw'';
    } else{
        console.log("your guess is wrong..."); 
    }
}*/


var guessStr = guessArr.join(',');
console.log("the letters you guessded: " + guessArr);  

const input = require(`readline-sync`);
let letterGuessInput = input.question("guess one letter:");

var letterGuess = letterGuessInput.toUpperCase(); 

checkInput(letterGuess);

guessArr.push(letterGuess);

function checkInput(){
var regExp = /[0-9!@#$%^&*()_+\-=[{};':",.<>]/g;
if(regExp.test(letterGuess) || letterGuess.length>1){
    console.log("the guess is invalid. only letters and only one. you will not lose an attempt.")
    round(str);
  
}; };



const regex = RegExp(letterGuess);

//console.log(roundnumber);




if(regex.test(word)){
    var newarr=[];
    
    console.log("there is " + letterGuess);
   // console.log(word);
   // console.log(wordStars);

   for (var i = 0; i < word.length; i++) {

    
   // console.log(str);
    
    //console.log(word.charAt(i)===letterGuess);
    if (word.charAt(i)===letterGuess){
        //console.log(letterGuess);
        newarr.push(letterGuess);
  } else if (str.charAt(i)!='*'){
     // console.log(str);
     //   console.log(str.charAt(i));
    
       newarr.push(str.charAt(i));
    }    else {
      //  console.log("*");
        newarr.push("*");
       
        //console.log(letterGuess);

    }
  }

} else {

    console.log("no " + letterGuess);
    
    roundnumber = roundnumber-1;
    round(str,roundnumber);

};


var str = newarr.join('');
//console.log(guessArr);
//console.log(str);
   if (str == word){
  // console.log("you're good!!! the singer is " + word);
   throw 'you\'re good!!! the singer is ' + word ;
}

round(str,guessArr);
};

