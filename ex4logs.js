
   const input = require(`readline-sync`);
   
   console.log("recommends a good restaurant in Tel Aviv");
   console.log("Please answer the following questions");
   let people = input.question("1.How many people are you going with?");
   let numberOfPeople = parseInt(people);
   let KosherM;
 
  // console.log(numberOfPeople);

   if (numberOfPeople != Number) {
    console.log("Please write a number");
     people = input.question("1.How many people are you going with?");
   }

   let Kosher = input.question("2. Should it be Kosher? y/n ");
 //  console.log(Kosher);

  if (Kosher == "y") {
    KosherM = input.question("Should it be Kashrut Lemehadrin? y/n ");

                    if (KosherM == "y") {   
                        
                            console.log("you're looking for a Kashrut Lemehadrin");
                        
                        } else if (KosherM == "n") {
                            console.log("you're looking for just a Kosher");
                        } else {
                            //console.log("please answer y/n");
                            //let KosherM = input.question("Should it be Kashrut Lemehadrin? y/n ");
                            throw 'Not an answer';
                        }

  } else if (Kosher == "n") {
    console.log("you're not looking for a Kosher");
  } else {
    console.log("please answer y/n");
   //let Kosher = input.question("2. Should it be Kosher? y/n ");
   throw 'Not an answer';

  }
  

  var readlineSync = require("readline-sync");
//var firstName = readlineSync.question("First Name:");
//console.log("Hi" + firstName);

  //let foodType = input.question("3. What kind of food do you want?");

  foodOptions = ['asian', 'Isreli', 'Italian', 'Mexican'];
  index = readlineSync.keyInSelect(foodOptions, "3. What kind of food do you want?");
  console.log(foodOptions[index] + ' is GREAT');


 if (numberOfPeople<5 && (Kosher == "n") && foodOptions[index] == "asian" ) {
 console.log("MOON restaurant is recommended");

    } else if (10<numberOfPeople<20 && (KosherM == "y") && foodOptions[index] == "Isreli" ) {
        console.log("Arusa restaurant is recommended");

    } else if ( 4<numberOfPeople<10 && (Kosher == "y") && foodOptions[index] == "Italian" ) {
        console.log("Olivery restaurant is recommended");
    
    } else if ( 5<numberOfPeople<50 && (Kosher == "n") && foodOptions[index] == "Mexican" ) {
         console.log("Mexicana restaurant is recommended");
   
     } else  {
       console.log("We're SORRY! We couldn't find what you're looking for");
     }