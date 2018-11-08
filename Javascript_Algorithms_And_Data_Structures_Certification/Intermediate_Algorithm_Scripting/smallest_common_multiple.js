function smallestCommons(arr) {
    // console.log(arguments[0]);
    var newArr = [];
    var inbetweenNums = [];
    newArr.push(arr[0],arr[1]);
    newArr.sort().reverse();
    var first = newArr[0];
    var sec = newArr[1];
    for(var i=sec+1; i<first; i++ ) {
      newArr.push(i);
      inbetweenNums.push(i);
      // console.log(i);  
    }
    newArr.sort().reverse();
  
  if()
  
  
  
    // while()
  
  
    return arr;  
  
  }
  
  smallestCommons([1, 5]);
  smallestCommons([5, 1]);