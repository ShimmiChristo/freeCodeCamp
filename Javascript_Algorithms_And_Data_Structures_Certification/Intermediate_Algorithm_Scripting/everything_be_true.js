function truthCheck(collection, pre) {
    //Iterate through the first argument to check each object.
    //Only if all of them are truth will we return true, so make sure all of them check.
    
    // Is everyone being true?
  for(var i=0; i<collection.length; i++) {  
    var property1 = collection[i];
    for (var j in property1) {
      console.log(j);
      if (!property1.hasOwnProperty(j)){
        // console.log(collection[i][j]);
        return false;
      } 
      else {
        return true;
      }
    }
  }
    console.log(pre);
    return pre;
  }
  
  // truthCheck([
  //   {"user": "Tinky-Winky", "sex": "male"}, 
  //   {"user": "Dipsy", "sex": "male"}, 
  //   {"user": "Laa-Laa", "sex": "female"}, 
  //   {"user": "Po", "sex": "female"}
  // ], "sex"); // should return true
  
  truthCheck([
    {"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": "female"}
  ], "sex") //should return false