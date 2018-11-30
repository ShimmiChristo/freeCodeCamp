// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.


function addTogether() {
  var args = new Array(arguments.length);
  for (var i=0; i<args.length; i++) {
    args[i] = arguments[i];
  }
  if(args.length == 2){

    if(typeof arguments[0] != 'number' || typeof arguments[1] != 'number') {
      return undefined;
    } else {
      return arguments[0]+arguments[1];
    }
  }
  if (args.length == 1) {
    var a = arguments[0];
    var b = arguments[1];
    if (typeof a != 'number') {
      return undefined;
    } else {
      return function(b){
        if(typeof b !=='number'){
          return undefined;
          } else 
          return a+b;
      };
    }
  }


}

// addTogether(2,3); 
addTogether(2)([3]);