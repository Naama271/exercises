const input = require(`readline-sync`);

let str = input.question("write the string:");

upperVowels(str);

 function upperVowels() { 

    var res = str.replace(/a|i|e|o|u|y/gi, function (x) {
        return x.toUpperCase();
      });
   console.log(res);
  }
 


