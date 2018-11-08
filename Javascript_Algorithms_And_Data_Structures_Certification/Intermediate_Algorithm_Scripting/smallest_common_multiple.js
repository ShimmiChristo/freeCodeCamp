function smallestCommons(arr) {
  var newArr = [];
  // sort the arr largest to smallest
  arr.sort(function(a,b){
    return b-a;
  })
  newArr.push(arr[0],arr[1]);
  var first = newArr[0];
  var sec = newArr[1];
  for(var i=sec+1; i<first; i++ ) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1]; //the first * the second
    for (var n=2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while(n !== newArr.length);
  
  console.log(quot);
  return quot;  
}

// smallestCommons([1, 5]);
// smallestCommons([5, 1]);
// smallestCommons([1, 13])
smallestCommons([2, 10]);




// BASIC CODE SOLUTION
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1,5]);


// INTERMEDIATE CODE SOLUTION
function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
  range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
  var GCD = gcd(lcm, range[i]);
  lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {    // Implements the Euclidean Algorithm
  if (y === 0)
      return x;
  else
      return gcd(y, x%y);
  }
}

// test here
smallestCommons([1,5]);