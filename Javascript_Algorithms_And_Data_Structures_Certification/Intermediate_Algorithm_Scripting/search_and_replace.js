function myReplace(str, before, after) {
    if(before[0] !== before[0].toUpperCase()) {
      return (str.replace(before, after));    
    }
    else {
      var newWord = after[0].toUpperCase() + after.slice(1, after.length);
      return (str.replace(before,newWord));  
    }
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");


  
  //BASIC CODE SOLUTION
  function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



  //INTERMEDIATE CODE SOLUTION 
  function myReplace(str, before, after) {
    //Create a regular expression object
      var re = new RegExp(before,"gi");
    //Check whether the first letter is uppercase or not
      if(/[A-Z]/.test(before[0])){
      //Change the word to be capitalized
        after = after.charAt(0).toUpperCase()+after.slice(1);
         }
         //Replace the original word with new one
      var  newStr =  str.replace(re,after);
    
     return newStr;
    }
    
    // test here
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");