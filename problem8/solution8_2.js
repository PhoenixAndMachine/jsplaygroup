var Employee = function(name, age) {
  this.name = name;
  this.age = age;

  getName = function(context) {
    return function() {
      return context.name;
    }
  }(this);
  
  return getName;
}

var e = new Employee("Lv", 28);
console.log(e());

