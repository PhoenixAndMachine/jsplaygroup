var person = {
  "name": "Trantect",
  "greeting": function(something) {
    console.log(this + " is greeting with " + something);
  }
}


person.greeting("I am here.");


