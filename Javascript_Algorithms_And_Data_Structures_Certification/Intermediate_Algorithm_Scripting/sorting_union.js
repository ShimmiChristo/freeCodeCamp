function uniteUnique(arr) {
    var args = [];
    for(var a=0; a<arguments.length; a++) {
      for(var aSub=0; aSub<arguments[a].length; aSub++){
        if(args.indexOf(arguments[a][aSub]) === -1) {
          args.push(arguments[a][aSub]);            
        }
      }
    }
      return (args);          
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// --------------------------------
  //BASIC CODE SOLUTION
  function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    var finalArray = [];
  
    // Loop through the arguments object to truly made the program work with two or more arrays
    // instead of 3.
    for (var i = 0; i < arguments.length; i++) {
      var arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (var j = 0; j < arrayArguments.length; j++) {
        var indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


  // ALTERNATIVE BASIC CODE SOLUTION
  function uniteUnique(arr) {
    var args = [...arguments];
    var result = [];
    for(var i = 0; i < args.length; i++) {
      for(var j = 0; j < args[i].length; j++) {
         if(!result.includes(args[i][j])) {
          result.push(args[i][j]);
        }
      }
    }
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



// INTERMEDIATE CODE SOLUTION
function uniteUnique(arr1, arr2, arr3) {
    var newArr;
    //Convert the arguments object into an array
     var args = Array.prototype.slice.call(arguments);
     //Use reduce function to flatten the array
     newArr = args.reduce(function(arrA,arrB){
     //Apply filter to remove the duplicate elements in the array
       return arrA.concat(arrB.filter(function(i){
         return arrA.indexOf(i) === -1;
       }));
     });
   
      return newArr;                    
   }
   
   // test here
   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

   

  //ADVANCED CODE SOLUTION
  function uniteUnique() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]){
      concatArr = concatArr.concat(arguments[i]); i++;
    }
    uniqueArray = concatArr.filter(function(item, pos) {
      return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);