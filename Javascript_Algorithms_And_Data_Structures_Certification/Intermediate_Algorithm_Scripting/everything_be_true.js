function truthCheck(collection, pre) {
    //Iterate through the first argument to check each object.
    //Only if all of them are truth will we return true, so make sure all of them check.
    
    // Is everyone being true?

    var findTruth = true;
    for(var i=0; i<collection.length; i++) {  
        for (var j in collection[i]) {
            if (!collection[i].hasOwnProperty(pre) || !collection[i][j]){
                findTruth = false;
            } 
            else {
                // return true;
            }
        }
    }
        console.log(findTruth);
        return findTruth;
    }
  
    truthCheck([
        {"name": "Pete", "onBoat": true}, 
        {"name": "Repeat", "onBoat": true}, 
        {"name": "FastFoward", "onBoat": null}
    ], "onBoat")
    
    // truthCheck([
    //   {"user": "Tinky-Winky", "sex": "male"}, 
    //   {"user": "Dipsy", "sex": "male"}, 
    //   {"user": "Laa-Laa", "sex": "female"}, 
    //   {"user": "Po", "sex": "female"}
    // ], "sex"); // should return true
    
    // truthCheck([
    //   {"user": "Tinky-Winky", "sex": "male"}, 
    //   {"user": "Dipsy"}, 
    //   {"user": "Laa-Laa", "sex": "female"}, 
    //   {"user": "Po", "sex": "female"}
    // ], "sex") //should return false

  


//   BASIC CODE SOLUTION
function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    var counter = 0;
    // Check for each object
    for (var c in collection) {
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
  }
  
  // test here
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



//INTERMEDIATE CODE SOLUTION
function truthCheck(collection, pre) {
    return collection.every(function (element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }
  
  // test here
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



//ADVANCED CODE SOLUTION
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");