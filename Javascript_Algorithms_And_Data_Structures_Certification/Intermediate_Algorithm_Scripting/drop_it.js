function dropElements(arr, func) {
  // Drop them elements.
  var newLen = arr.length; // **need variable so value changes in for loop
  for (var i=0; i < newLen; i++) {
      if (func(arr[0])) {
        break;
      } else {
          arr.shift();
      }
  }
      console.log(arr);
      return arr;
   }
  
  dropElements([1, 2, 3], function(n) {return n < 3; }); 
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})

  
  //INTERMEDIATE CODE SOULTION
  function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});


  //ADVANCED CODING SOLUTION
  function dropElements(arr, func) {
    while(arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});