'use strict'

/*
  You need to understand problem7_1.js to problem7_4.js first
*/
var result = {};

for(var i=0; i<5; i++) {
  result[i] = function() {
    console.log("I am result " + i);
  }
}

//console.log(result);
result[0]();
result[1]();
result[2]();
result[3]();
result[4]();



/*
  It is the mistake we always make, figure it out why it is wrong.
  HINT: scope
*/



/*
  Solution: closure
*/


var outcome = {};
for(var j=0; j<5; j++) {
  outcome[j] = function(index) {
    return function() {
      console.log("I am outcome " + index);
    }
  }(j); 
}

//console.log(outcome);
outcome[0]();
outcome[1]();
outcome[2]();
outcome[3]();
outcome[4]();






