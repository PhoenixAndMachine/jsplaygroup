var Employee = function(name, age) {
  this.name = name;
  this.age = age;

  var that = this;
  getName = function() {
    return that.name;
  }
  
  return getName;
}

var e = new Employee("Grey", 28);
console.log(e());

