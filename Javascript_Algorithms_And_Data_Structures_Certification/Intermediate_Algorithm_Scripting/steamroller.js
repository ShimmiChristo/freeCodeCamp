// Flatten a nested array. You must account for varying levels of nesting.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
  // I'm a steamroller, baby
  // Flatten 1 nested array
  // Check if array is present in array. 
  // Use array.includes? 
  // Use Array.isArray? Yes
  // Flatten 1 nested array
  // use recursion
  function steamrollArray(arr) {
    var newArr = [];
    // var arrCopy = [...arr];
    var arrLength = arr.length;
    var n = 0;
    while (arr.length > 0) {
      var val = arr.shift();
      if (Array.isArray(val)) { 
          arr = val.concat(arr);
      } else {
        newArr.push(val);
      }
    }
    console.log(newArr);
    return newArr;
  }
  steamrollArray([1,2,[90],[8], [3, [[4]]]]);




  // CLASSIC RECURSIVE 
  function flatten(arr) {
    if(!Array.isArray(arr)) {
      return [arr];
    }

    var newArray = [];
    for(var i = 0; i < arr.length; i++) {
      newArray = newArray.concat(flatten(arr[i]));
    }
    return newArray;
  }
  
  flatten([1,[2,[3]],[4]]); // => [1,2,3,4]