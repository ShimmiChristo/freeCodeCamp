var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    this.getFullName = function() {
      return fullName;
    };
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
    this.setFullName = function(name) {
      fullName = name;
    };
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  bob.setFirstName('Chris');
  
  // console.log(bob.getFirstName());
  // console.log(bob.getLastName());
  console.log(bob.getFullName());


  
  