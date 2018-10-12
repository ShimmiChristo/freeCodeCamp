// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  var newArr = [];
  for(var i =1; i < arguments.length; i++) {
    newArr.push(arguments[i]);
  }
   return (arr.filter(el => newArr.indexOf(el) === -1 ));

  // return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



// BASIC CODE SOLUTION

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}


// INTERMEDIATE CODE SOLUTION
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}


// ADVANCED CODE SOLUTION (one line!!)
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
