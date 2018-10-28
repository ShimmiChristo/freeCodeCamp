function fearNotLetter(str) {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var splitStr = str.split('');
    for (var i=26; i>0; i--) {
      if (alphabet.indexOf(str[i]) - alphabet.indexOf((str[i-1])) == 2) {
        var insertNewLetter = splitStr.indexOf(str[i]);
        var indexFound = alphabet.indexOf(str[i])-1;
        var valueFound = alphabet[indexFound];
        return (alphabet[indexFound]);
        // return (splitStr.splice(insertNewLetter,0,valueFound)); // inserts missing letter and returns in order
      }
    }
  }
  fearNotLetter("abce");
  fearNotLetter("stvwx");



// BASIC CODE SOLUTION
  function fearNotLetter(str) {
    for(var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
      /* if code of current character is not equal to first character + no of iteration
      hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }  
    }
    return undefined;
  }
  
  // test here
  fearNotLetter("abce");

  // SIMPLIFIED ADVANCED CODE SOLUTION
  function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  }