var employ = function(name, age) {
  this.age = age;
  this.name = name;

  getName = function() {
    return this.name;
  }

  getAge = function() {
    return this.age;
  }
  
  return {
    "getName": getName,
    "getAge": getAge
  }
}



var emily = new employ("Emily", 25);
console.log(emily);

console.log(emily.getName());

