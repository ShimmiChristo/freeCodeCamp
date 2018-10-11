function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var len = target.length;
    if((str.substring(str.length-len)) == target) {
      return true;
    } else {return false;}
    // return str;
  }
  
  confirmEnding("Bastian", "an");


//   function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
    
//     return str.slice(str.length - target.length) === target;
//   }
  
//   confirmEnding("He has to give me a new name", "name");