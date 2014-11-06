var Employee = function(name, age) {
  this.name = name;
  this.age = age;

  getName = function() {
    return this.name;
  }
  
  return getName;
}

var e = new Employee("Phoenix", 28);
console.log(e());



