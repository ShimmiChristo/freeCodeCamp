function pairElement(str) {
    var i;
    var j;
    var newStr = str.split('');
    var newArr = [];
    for (i=0; i<newStr.length; i++) {
      newArr.push(newStr.slice(i,i+1));
    }
    for (j=0; j<newArr.length; j++) {
      if (newArr[j] == 'G') {
        newArr[j].push('C');    
      }
      else if (newArr[j] == 'C') {
        newArr[j].push('G');    
      }
      else if (newArr[j] == 'A') {
        newArr[j].push('T');    
      }
      else if (newArr[j] == 'T') {
        newArr[j].push('A');    
      }
    }
    return newArr;
  }
  
  pairElement("GCG");


  //BASIC CODE SOLUTION
  function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];

    // Function to check with strand to pair.
    var search = function(char) {
      switch (char) {
        case 'A':
          paired.push(['A', 'T']);
          break;
        case 'T':
          paired.push(['T', 'A']);
          break;
        case 'C':
          paired.push(['C', 'G']);
          break;
        case 'G':
          paired.push(['G', 'C']);
          break;
      }
    };

    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
      search(str[i]);
    }

    return paired;
  }

  // test here
  pairElement("GCG");

  // INTERMEDIATE CODE SOLUTION
  function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x,pairs[x]]);
  }

  //test here
  pairElement("GCG");