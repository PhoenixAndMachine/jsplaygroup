function fn(args, name, cb) {
  console.log("Running " + name + " function and it will callback in " + args + "ms");
  setTimeout(function() {cb(null, args, name)}, args);
} 

/*
var len = 5;
var data = [];
for(var i=0; i<len; i++) {
  fn(500, i+"th", function(err, args, name) {
    console.log("callback of " + name + " function is called in " + args + "ms");
    data.push(name) ;
  });
}
console.log(data);
*/
/*
 * Problem 3 
 *  The data can not be filled in 
 *  And the requirement is to fill data in 
 */



/* Solution 3_4 : without order */
function onStepAll(len, cb) {
  var data = [];
  var count = 0;
  for(var i=0; i<len; i++) {
    fn(500, i+"th", function(err, args, name) {
      console.log("callback of " + name + " function is called in " + args + "ms");
      data.push(name);
      count++;
      if(count==len) cb(null, data);
    });
  }
}


onStepAll(5, function(err, d) {
  console.log(d);
})
