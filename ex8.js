//ex.8

var array = [];
var x;
var i=x;
for (var i = 1 ; i <= 100; i++) {
    
 //console.log(array[i]);

 
 if (i % 7 === 0) {
    array.push('boom');
 }else if (array.indexOf('7') > -1) {
    array.push('boom');
 }
 
 else{
    array.push(i);
 }

}

console.log(array);

//var arr = [1,2,3,4,5];

var strArr = array.map(function(e){return e.toString()});
console.log(strArr);

console.log(( strArr +'').indexOf('7') > -1 );
console.log(typeof(strArr));
//strArr.replace('7', 'boom');
