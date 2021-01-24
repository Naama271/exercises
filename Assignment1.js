const input = require(`readline-sync`);

var readlineSync = require("readline-sync");

console.log("    Welcome to the quiz-");
console.log("What kind of person are you?");

var firstName = readlineSync.question("First Name:");
console.log("Hi " + firstName + "!" +
 " What kind of person are you?" + " let's see");

  //let foodType = input.question("3. What kind of food do you want?");


  answers1 = ['summer', 'spring', 'autumn', 'winter'];
 // answers1 = ['15',    '20',      '10',        '5'];
  index1 = readlineSync.keyInSelect(answers1, "1. What's your favorite season?");
 // console.log(index1);
  console.log(answers1[index1] + ' is your answer');

  var points1 = index1 ;

  function firstQuest() {
    
    index1;
    switch(index1) {
      case 0:
        points1 = 5;
       // console.log(points1);
      break;
      case 1:
        points1 = 20;
      break;
      case 2:
        points1 = 10;
      break;
      case 3:
        points1 = 15;
      break;
      case 4:
        throw 'Not an answer';
      break;

      default:
        console.log("something went wrong");
    }
  }
  firstQuest();


  answers2 = ['hate people', 'Im fine with most' , 'I love them all' , 'dont really care' ];
   // answers2 = ['5',             '15',                  '20',                 '10'];
  index2 = readlineSync.keyInSelect(answers2, "2. What do you think of people?");
 // console.log(index2);
  console.log(answers2[index2] + ' is your answer');

  var points2 = index2 ;

  function secondQuest() {
    
    index2;
    switch(index2) {
      case 0:
        points2 = 5;
        
      break;
      case 1:
        points2 = 15;
        
      break;
      case 2:
        points2 = 20;
       // console.log(points2);
      break;
      case 3:
        points2 = 10;
      //  console.log(points2);
      break;
      case 4:
        throw 'Not an answer';
      break;

      default:
        console.log("something went wrong");
    }
  }
  secondQuest();
 // console.log(points2);



  answers3 = ['Im sure anyone will help', 'I will call for rescue' , 'I will blame everyone I know', 'I will manage somehow'];
   // answers2 = ['20',                         '15',                      '5',                       '10'];
  index3 = readlineSync.keyInSelect(answers3, "3. You're out of gas in the middle of nowhere. What would you do?");
 // console.log(index3);
  console.log(answers1[index3] + ' is your answer');

  var points3 = index3 ;

  function thirdQuest() {
    
    index3;
    switch(index3) {
      case 0:
        points3 = 20;
      break;
      case 1:
        points3 = 15;
      break;
      case 2:
        points3 = 5;
      break;
      case 3:
        points3 = 10;
      break;
      case 4:
        throw 'Not an answer';
      break;

      default:
        console.log("something went wrong");
    }
  }
  thirdQuest();
 // console.log(points3);


  answers4 = ['not an animals person', 'cats are the best', 'snakes', 'dogs are the best'];
    // answers2 = [    '10',               '15',               '5',              '20'];
  index4 = readlineSync.keyInSelect(answers4, "4. What's your favorite animal?");
 // console.log(index4);
  console.log(answers4[index4] + ' is your answer');

  var points4 = index4 ;

  function fourQuest() {
    
    index4;
    switch(index4) {
      case 0:
        points4 = 10;
      break;
      case 1:
        points4 = 15;
      break;
      case 2:
        points4 = 5;
      break;
      case 3:
        points4 = 20;
      break;
      case 4:
        throw 'Not an answer';
      break;

      default:
        console.log("something went wrong");
    }
  }
  fourQuest();
 // console.log(points4);


  answers5 = ['stay at home and wait till its done', 'spend every second with friends and family', 'just have dinner', 'no plans yet'];
     // answers2 = [    '5',                                   '20',                                    '15',                 '10'];
     var index5 = readlineSync.keyInSelect(answers5, "5. It's christmas! What's your plans?");
  //console.log(index5);
  console.log(answers1[index5] + ' is your answer');

  
  var points5 = index5 ;

  function fiveQuest() {
    
   index5;
    switch(index5) {
      case 0:
        points5 = 10;
      break;
      case 1:
        points5 = 15;
      break;
      case 2:
        points5 = 5;
      break;
      case 3:
        points5 = 20;
      break;
      case 4:
        throw 'Not an answer';
      break;

      default:
        console.log("something went wrong");
    }
  }
  fiveQuest();
 // console.log(points5);

   // console.log(typeof(points1));
   // console.log(typeof(points2));
   // console.log(typeof(points3));
   // console.log(typeof(points4));

var sum = (points1) + (points2) + (points3) + (points4);

//console.log(typeof(sum));
//console.log(sum);

function sumPoints(sum){
console.log("the result is:");
// 0-30 points - you're very negative... think positive
// 35-55 points - you don't really care about anything
// 60-85 points - realistic
// 90-100 point - positivity is secound name

var sum = (points1) + (points2) + (points3) + (points4);
//console.log(sum);
//console.log(typeof(sum));
//console.log(sum);

if (sum <= 30) {

    console.log("you're very negative... think positive!");

}

else if ( sum <= 55) {

    console.log("you don't really care about anything");

}

else if (sum <= 85) {
    console.log("you're realistic");
}

else if (sum <= 100) {
    console.log("positivity is secound name");
}
else  {
    console.log("something went wrong");
}
}
sumPoints();